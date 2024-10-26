import {defineStore} from "pinia";
import {productApi} from "../api/product.api";

export const useProductStore = defineStore("product", {
    state: () => ({
        products: [],
    }),

    actions: {
        async getAllProduct() {
            try {
                const response = await productApi.getAllProduct();

                if (response.status === 200) {
                    if (Array.isArray(response.data.metadata)) {
                        this.products = response.data.metadata;
                    } else {
                        console.error("Data does not array:", response.data.metadata);
                    }
                } else {
                    console.error("Error something");
                }
            } catch (error) {
                console.error("Call error API:", error);
            }
        },
    },
});
