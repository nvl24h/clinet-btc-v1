<script setup>
import Banner from "@/components/Banner.vue";
import ProductSlider from "@/components/ProductSlider.vue";
</script>

<template>
    <main>
        <Banner />
        <!-- Hero -->
        <section class="overflow-hidden" style="background-color: #01182e">
            <div class="container">
                <div class="text-center position-relative py-3 text-white">
                    <img class="position-absolute top-0 start-0" src="../../public/images/Background hero.png" alt="" />
                    <p class="mb-0">Rượu Vang Úc cho người Việt</p>
                    <p class="mb-0">Nơi trải nghiệm rượu vang trọn vẹn và thăng hoa</p>
                </div>
            </div>
        </section>
        <!-- feautures -->
        <section class="py-5 bg-body-tertiary">
            <div class="container">
                <!-- feature top -->
                <div class="row g-3">
                    <!-- item1 -->
                    <div class="col-lg-3 col-6 feature__item feature__item-01 position-relative">
                        <div class="d-flex gap-3">
                            <img class="object-fit-cover" width="auto" height="60px" src="../../public/icons/feature01.png" alt="" />
                            <h4 class="z-1">
                                +2000 <br />
                                Sản phẩm
                            </h4>
                        </div>
                        <p class="mb-0 fs-6 text-body-secondary">Nhập khẩu & phân phối chính hãng</p>
                    </div>
                    <!-- item2 -->
                    <div class="col-lg-3 col-6 feature__item feature__item-02 position-relative">
                        <div class="d-flex gap-3">
                            <img class="object-fit-cover" width="auto" height="60px" src="../../public/icons/feature04.png" alt="" />
                            <h4 class="z-1">
                                Giao hàng <br />
                                Toàn quốc
                            </h4>
                        </div>
                        <p class="mb-0 fs-6 text-body-secondary">Linh hoạt giao hàng theo yêu cầu từ Khách hàng</p>
                    </div>
                    <!-- item3 -->
                    <div class="col-lg-3 col-6 feature__item feature__item-03 position-relative">
                        <div class="d-flex gap-3">
                            <img class="object-fit-cover" width="auto" height="60px" src="../../public/icons/feature02.png " alt="" />
                            <h4 class="z-1">
                                Giao hàng <br />
                                Nhanh 24h
                            </h4>
                        </div>
                        <p class="mb-0 fs-6 text-body-secondary">Miễn phí giao hàng tại Hà Nội, Đà Nẵng, Nha Trang, Hồ Chí Minh, Phú Quốc</p>
                    </div>
                    <!-- item4 -->
                    <div class="col-lg-3 col-6 feature__item feature__item-04 position-relative">
                        <div class="d-flex gap-3">
                            <img class="object-fit-cover" width="auto" height="60px" src="../../public/icons/feature03.png" alt="" />
                            <h4 class="z-1">
                                Cam kết <br />
                                Chất lượng
                            </h4>
                        </div>
                        <p class="mb-0 fs-6 text-body-secondary">Sản phẩm nhập nguyên chai, chính hãng, từ thương hiệu uy tín.</p>
                    </div>
                </div>
            </div>
        </section>
        <!-- About -->
        <section class="py-5">
            <div class="container">
                <div class="row align-items-center g-5">
                    <!-- About left -->
                    <div class="col-lg-6">
                        <div class="row g-3">
                            <div class="col-6 overflow-hidden">
                                <img src="../../public/images/image left 1.png" class="w-100 object-fit-cover" height="300px" alt="" />
                                <img src="../../public/images/image left 2.png" class="w-100 object-fit-cover mt-3" height="300px" alt="" />
                            </div>
                            <div class="col-6 overflow-hidden mt-5">
                                <img src="../../public/images/image right 1.png" class="w-100 object-fit-cover" height="300px" alt="" />
                                <img src="../../public/images/image right 3.png" class="w-100 object-fit-cover mt-3" height="300px" alt="" />
                            </div>
                        </div>
                    </div>
                    <!-- about right -->
                    <div class="col-lg-6">
                        <div class="w-75">
                            <p class="fw-bold fs-4 text-primary-btc text-uppercase">Betty’s Choice</p>
                            <h2 class="fw-bold fs-1 mb-4">Rượu Vang Úc cho người Việt</h2>
                            <p class="mb-4 text-body-secondary">
                                Betty’s choice là tập hợp những sản phẩm chất lượng cao của nước Úc, những sản phẩm đã được lựa chọn kỹ càng để phù
                                hợp nhất với dinh dưỡng, khẩu vị và thói quen của người Việt.
                            </p>
                            <a href="#!" class="btn btn-lg bg-primary-btc text-light">Xem thêm</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Media -->
        <section class="py-5 media">
            <div class="container">
                <div class="row align-items-center">
                    <!-- Media -->
                    <div class="col-lg-5 text-light">
                        <div class="">
                            <h2 class="fs-1 fw-bold">
                                <span class="text-primary-btc">Tìm Kiếm</span><br />
                                Cộng Tác Viên
                            </h2>
                            <h3 class="fs-1">Trên toàn quốc</h3>
                            <p class="">
                                <strong>Hãy trở thành Cộng tác viên của BETTY CHOICE,</strong> <br /><strong>nhận ngay:</strong><br />
                                THU NHẬP CAO VÀ KHÔNG GIỚI HẠN PHONG CÁCH SỐNG SANG TRỌNG VÀ ĐẲNG CẤP GIAO LƯU, KẾT BẠN VỚI BẠN BÈ CÙNG GU
                            </p>
                            <p class="">
                                <strong>Betty Choice là đơn vị nhập khẩu trực tiếp và phân phối độc quyền các dòng vang Úc:</strong><br />
                                Sản phẩm đa dạng, phong phú, dễ bán, chiết khấu cao Hệ thống Showroom và kho hàng trải dài toàn quốc Hệ thống quản lý
                                đơn hàng, doanh số chuyên nghiệp Đội ngũ chăm sóc cộng tác viên tận tình, chuyên nghiệp
                            </p>
                            <a href="#!" class="btn btn-lg bg-primary-btc text-light mt-3">đăng ký ngay</a>
                        </div>
                    </div>

                    <!-- video -->
                    <div class="col-lg-7 mt-lg-0 mt-5">
                        <div class="media__video ms-auto">
                            <iframe
                                src="https://www.youtube-nocookie.com/embed/Q1501qkfi_g"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                referrerpolicy="strict-origin-when-cross-origin"
                                allowfullscreen
                            ></iframe>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <!-- Product Slider -->
        <section class="products py-5">
            <div class="container">
                <div class="products__box">
                    <h2 class="text-center mb-5">Sản Phẩm Bán Chạy</h2>
                    <!-- list product -->
                    <div class="products__list">
                        <ProductSlider />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<style>
.feature__item::after {
    position: absolute;
    right: 55px;
    top: -55px;
    font-size: 6rem;
    color: #e6e6e6;
}

.feature__item-01::after {
    content: "01";
}

.feature__item-02::after {
    content: "02";
}

.feature__item-03::after {
    content: "03";
}

.feature__item-04::after {
    content: "04";
}

.media {
    background-image: url("../../public/images/background\ media.jpg");
    background-repeat: no-repeat;
    background-size: cover;
}

.media__video {
    position: relative;
    max-width: 690px;
    width: 100%;
    padding-bottom: 52%;
    height: 0;
    overflow: hidden;
}

.media__video iframe {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
}
</style>
