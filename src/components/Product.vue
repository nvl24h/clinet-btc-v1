<script setup>
import {useProductStore} from "@/stores/product";
import {computed, onMounted} from "vue";

// Tạo một instance của productStore
const productStore = useProductStore();

// Sử dụng computed để lấy danh sách sản phẩm từ store
const products = computed(() => productStore.products);

// Lấy danh sách sản phẩm từ API khi component được mounted
const getDataProduct = async () => {
    await productStore.getAllProduct(); // Gọi trực tiếp action để lấy dữ liệu từ API
};

// Khi component được mounted, gọi action để lấy dữ liệu
onMounted(() => {
    console.log(11111111111111);

    getDataProduct();
    console.log(products.value); // Kiểm tra danh sách sản phẩm sau khi lấy dữ liệu
});
</script>

<template>
    <section class="product py-5">
        <div class="container">
            <div class="row g-2 g-md-4">
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                            <p class="fw-bold fs-2 text-primary-btc">650,<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                href="#"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                            <p class="fw-bold fs-2 text-primary-btc">650,<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                href="#"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                            <p class="fw-bold fs-2 text-primary-btc">650,<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                href="#"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                            <p class="fw-bold fs-2 text-primary-btc">650,<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                href="#"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                            <p class="fw-bold fs-2 text-primary-btc">650,<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                href="#"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                            <p class="fw-bold fs-2 text-primary-btc">650,<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                href="#"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                            <p class="fw-bold fs-2 text-primary-btc">650,<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                href="#"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3 col-md-4 col-6">
                    <div class="card rounded-4 product-slider position-relative">
                        <div class="overflow-hidden position-relative" style="height: 270px">
                            <img
                                src="https://product.hstatic.net/200000511439/product/heart_of_the_murray_do_rose_d638e5ebacc74d548941948f5edab72d_large.jpg"
                                class="card-img-top pt-4 position-absolute top-50 start-50 translate-middle"
                                alt="..."
                                style="height: 100%; width: auto"
                            />
                        </div>
                        <div class="card-body">
                            <h5 class="card-title small product-title">Vang đỏ Pháp Château Fontaubert Bordeaux 2021</h5>
                            <p class="fw-bold fs-2 text-primary-btc">650,<span class="fs-6">000</span></p>
                            <a
                                class="product__link position-absolute top-50 start-50 translate-middle text-white z-3 justify-content-center align-items-center d-none"
                                href="#"
                                ><i class="fa-solid fa-arrow-right" style="color: currentColor"></i
                            ></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.product-slider:hover::after {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    background-color: #48c7f0;
    opacity: 0.4;
    border-radius: 15px;
}

.product-slider:hover .product__link {
    display: inline-flex !important;
}
.product-slider .product__link {
    width: 50px;
    height: 50px;
    border: 2px solid #fff;
    border-radius: 50%;
    bottom: 0;
    right: 0;
}

.product-img {
    background-position: center;
}

.product-title {
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2; /* Giới hạn số dòng */
    overflow: hidden;
    text-overflow: ellipsis; /* Thêm dấu ... sau khi văn bản bị cắt */
}
</style>
