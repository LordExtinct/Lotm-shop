import { makeAutoObservable, runInAction } from "mobx";
import { mokkyApi } from "../../../api/baseUrl";
import { Book } from "../../../types/type";

class cartRenderStore {
  allCarts: Book[] = [];
  loading: boolean = false;

  constructor() {
    makeAutoObservable(this);
  }

  CartRender = async () => {
    try {
      this.loading = true;
      const res = await mokkyApi.get(
        "https://d6a55f81178c55c0.mokky.dev/items"
      );

      runInAction(() => {
        this.allCarts = res.data;
        this.loading = false;
      });
    } catch (e) {
      console.error(e);
    }
  };
}

export default new cartRenderStore();
