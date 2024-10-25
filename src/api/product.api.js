import axiosInstance from "./instance.api";

export const productApi = {
    getAllProduct: async () => await axiosInstance.get("products/publict/all"),
};
