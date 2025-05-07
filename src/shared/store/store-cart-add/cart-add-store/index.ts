import { makeAutoObservable, runInAction } from "mobx";
import { Book } from "../../../types/type";
import { mokkyApi } from "../../../api/baseUrl";

class cartAddStore {
  cart: Book | null = null;
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  CartIdDetail = async (id: number) => {
    try {
      this.loading = true;
      const response = await mokkyApi.get<Book>(`/items/${id}`);
      runInAction(() => {
        this.cart = response.data;
        this.loading = false;
        console.log(this.cart);
      });
    } catch (e) {
      console.log(e);
    }
  };
}

export default new cartAddStore();
