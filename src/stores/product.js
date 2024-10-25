import {defineStore} from "pinia";
import {productApi} from "../api/product.api";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
        product: {},
    }),

    actions: {
        async getAllProduct() {
            try {
                const response = await productApi.getAllProduct();
                console.log(11111111111111111);

                if (response.status === 200) {
                    // Cập nhật danh sách sản phẩm vào state
                    this.products = response.data.metadata;
                    console.log(response);
                } else {
                    console.error("Error something");
                }
            } catch (error) {
                console.error(error);
            }
        },
    },
});
