import { computed, makeAutoObservable, runInAction } from "mobx";
import { Book } from "../../types/type";

class CartStore {
  items: Book[] = [];
  totalItems: number = 0;

  constructor() {
    const storedCart = localStorage.getItem("cart-inl");
    this.items = storedCart ? JSON.parse(storedCart) : [];

    makeAutoObservable(this, {
      totalPrice: computed,
    });
  }

  addToCart(item: any) {
    this.items.push(item);
    runInAction(() => {
      localStorage.setItem("cart-inl", JSON.stringify(this.items));
      this.totalItems = this.items.length;
    });
  }

  removeFromCart(id: number) {
    this.items = this.items.filter((item) => item.id !== id);

    runInAction(() => {
      localStorage.setItem("cart-inl", JSON.stringify(this.items));
      this.totalItems = this.items.length;
    });
  }

  isInCart(itemId: number) {
    return this.items.some((item) => item.id === itemId);
  }

  get cartLength() {
    return this.totalItems;
  }

  get totalPrice() {
    return this.items.reduce((sum, item) => (sum += item.price), 0);
  }
}

export const cartStore = new CartStore();
