<script setup>
import Warehouse from "@/components/Warehouse.vue";
import FeaturesDatail from "@/components/FeaturesDatail.vue";
import ProductDetailSliderImage from "@/components/ProductDetailSliderImage.vue";
import {socials} from "@/utils";
</script>

<template>
    <!-- Features Detail -->
    <FeaturesDatail />

    <!-- Product Banner -->
    <section class="product__banner">
        <img class="product__banner-img" src="../../public/images/productHero.jpg" alt="" />
    </section>

    <!-- Product Breadcrumb -->
    <section class="py-3">
        <div class="container">
            <nav aria-label="breadcrumb">
                <ol class="breadcrumb">
                    <li class="breadcrumb-item"><router-link to="/" class="text-primary-btc text-decoration-none">Home</router-link></li>
                    <li class="breadcrumb-item active" aria-current="page">Library</li>
                </ol>
            </nav>
        </div>
    </section>

    <!-- Product -->
    <section class="py-3">
        <div class="container">
            <div class="row g-5">
                <div class="col-lg-3 col-md-6">
                    <div class="">
                        <ProductDetailSliderImage />
                    </div>
                </div>
                <div class="col-lg-6 col-md-6">
                    <div>
                        <h2 class="fs-3 fw-normal">Rượu vang đỏ Úc Barossa Valley Maison Blue</h2>
                        <p>
                            Rượu vang đỏ Shiraz Barossa Valley 2018 Maison Blue được làm từ những những trái nho trồng trong vườn nho cao cấp ở vùng
                            Thung lũng Barossa nổi tiếng. Một chai rượu Shiraz đậm đà và mãnh liệt với tannin phong phú. Rượu bùng nổ với hương vị
                            trái cây đen, quả lý chua, mận, cam thảo, cùng gia vị ngọt ngào, gỗ sồi thơm và vanila. Một loại rượu mạnh mẽ nhưng được
                            cân bằng một cách hoàn hảo.
                        </p>
                        <!-- Social -->
                        <div class="d-flex gap-4">
                            <p>Tình trạng: <span class="text-primary-btc">Còn hàng</span></p>
                            <div class="header-social col-4 d-lg-flex gap-2 d-none">
                                <a
                                    :href="social.link"
                                    v-for="social in socials"
                                    :key="social.name"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    class="d-flex justify-content-center align-items-center rounded"
                                    style="color: #8b959e; width: 25px; height: 25px; font-size: 15px; flex-shrink: 0; background-color: #f1f1f1"
                                >
                                    <i :class="social.icon"></i>
                                </a>
                            </div>
                        </div>
                        <h2 class="">850.000<span>đ</span></h2>
                        <!-- type -->
                        <div class="row g-2">
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <img class="object-fit-cover" height="100%" src="../../public/icons/grape.png" alt="grape" />
                                    <p class="mb-0">Giống nho: <br /><span class="text-primary-btc">Shiraz</span></p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <img class="object-fit-cover" height="100%" src="../../public/icons/grape.png" alt="grape" />
                                    <p class="mb-0">Dung tích: <br /><span class="text-primary-btc">750ml</span></p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <img class="object-fit-cover" height="100%" src="../../public/icons/grape.png" alt="grape" />
                                    <p class="mb-0">Vùng: <br /><span class="text-primary-btc">Đông Nam Úc</span></p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <img class="object-fit-cover" height="100%" src="../../public/icons/grape.png" alt="grape" />
                                    <p class="mb-0">Niên vụ: <br /><span class="text-primary-btc">2018</span></p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <img class="object-fit-cover" height="100%" src="../../public/icons/grape.png" alt="grape" />
                                    <p class="mb-0">Nồng độ: <br /><span class="text-primary-btc">15%</span></p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <img class="object-fit-cover" height="100%" src="../../public/icons/grape.png" alt="grape" />
                                    <p class="mb-0">Quốc gia: <br /><span class="text-primary-btc">Úc</span></p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <img class="object-fit-cover" height="100%" src="../../public/icons/grape.png" alt="grape" />
                                    <p class="mb-0">Thương hiệu: <br /><span class="text-primary-btc">Shiraz</span></p>
                                </div>
                            </div>
                            <!-- Item 1 -->
                            <div class="col-6">
                                <div class="d-flex w-100 d-flex w-100 align-items-center gap-2">
                                    <img class="object-fit-cover" height="100%" src="../../public/icons/grape.png" alt="grape" />
                                    <p class="mb-0">Nhiệt độ bảo quản: <br /><span class="text-primary-btc">15°C - 18°C</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-3">
                    <div class="">
                        <a href="#" class="btn btn-lg bg-primary-btc text-light w-100"
                            ><i class="fa-solid fa-file-arrow-down"></i> Download catalogue</a
                        >
                        <div class="border mt-3 p-3 rounded border-info d-flex gap-2">
                            <img class="object-fit-cover" src="../../public/icons/call-icon.png" alt="Hỗ trở mua hàng" height="20px" />
                            <div class="">
                                <p class="mb-1">Hỗ trợ mua hàng</p>
                                <!-- <h3 class="mt-0">0966 999 591 <br />0909 395885</h3> -->
                                <a class="text-primary-btc text-decoration-none fs-4 fw-bold" href="tel:0966999591">0966 999 591</a>
                                <br />
                                <a class="text-primary-btc text-decoration-none fs-4 fw-bold" href="tel:0909395885">0909 395885</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Warehouse -->
    <Warehouse />
</template>

<style scoped>
.product__banner-img {
    max-height: 344px;
    width: 100%;
    object-fit: cover;
    display: block;
    margin: 0 auto;
}
</style>
