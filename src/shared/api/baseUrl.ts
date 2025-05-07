import axios from "axios";
import { toast } from "react-toastify";

const notify = () => toast("Запрос прошел успешно");

export const mokkyApi = axios.create({
  baseURL: "https://d6a55f81178c55c0.mokky.dev",
});

mokkyApi.interceptors.request.use((res) => {
  notify();
  return res;
});
