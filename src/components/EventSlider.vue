<template>
    <swiper
        :breakpoints="{
            '640': {
                slidesPerView: 1,
                spaceBetween: 20,
            },
            '768': {
                slidesPerView: 2,
                spaceBetween: 30,
            },
            '1024': {
                slidesPerView: 3,
                spaceBetween: 40,
            },
        }"
        :loop="true"
        :slidesPerView="'auto'"
        :spaceBetween="20"
        :navigation="true"
        :modules="modules"
        class="mySwiper"
    >
        <swiper-slide
            ><div class="event__item">
                <img src="../../public/images/Event01.png" alt="" />
                <div class="event__box">
                    <h3 class="heading__sub event__title">Hà Nội | MATTER of TASTE |</h3>
                    <p class="desc event__time">Thời gian: 18:00, ngày 28/09/2024</p>
                    <p class="desc event__adsress">Địa điểm: Phòng Grand Cru – Bottle Bunker, Tầng 1 LOTTE Mall West Lake, Tây Hồ, Hà Nội</p>
                </div>
            </div></swiper-slide
        ><swiper-slide
            ><div class="event__item">
                <img src="../../public/images/Event01.png" alt="" />
                <div class="event__box">
                    <h3 class="heading__sub event__title">Hà Nội | MATTER of TASTE |</h3>
                    <p class="desc event__time">Thời gian: 18:00, ngày 28/09/2024</p>
                    <p class="desc event__adsress">Địa điểm: Phòng Grand Cru – Bottle Bunker, Tầng 1 LOTTE Mall West Lake, Tây Hồ, Hà Nội</p>
                </div>
            </div></swiper-slide
        ><swiper-slide
            ><div class="event__item">
                <img src="../../public/images/Event01.png" alt="" />
                <div class="event__box">
                    <h3 class="heading__sub event__title">Hà Nội | MATTER of TASTE |</h3>
                    <p class="desc event__time">Thời gian: 18:00, ngày 28/09/2024</p>
                    <p class="desc event__adsress">Địa điểm: Phòng Grand Cru – Bottle Bunker, Tầng 1 LOTTE Mall West Lake, Tây Hồ, Hà Nội</p>
                </div>
            </div></swiper-slide
        ><swiper-slide
            ><div class="event__item">
                <img src="../../public/images/Event01.png" alt="" />
                <div class="event__box">
                    <h3 class="heading__sub event__title">Hà Nội | MATTER of TASTE |</h3>
                    <p class="desc event__time">Thời gian: 18:00, ngày 28/09/2024</p>
                    <p class="desc event__adsress">Địa điểm: Phòng Grand Cru – Bottle Bunker, Tầng 1 LOTTE Mall West Lake, Tây Hồ, Hà Nội</p>
                </div>
            </div></swiper-slide
        ><swiper-slide
            ><div class="event__item">
                <img src="../../public/images/Event01.png" alt="" />
                <div class="event__box">
                    <h3 class="heading__sub event__title">Hà Nội | MATTER of TASTE |</h3>
                    <p class="desc event__time">Thời gian: 18:00, ngày 28/09/2024</p>
                    <p class="desc event__adsress">Địa điểm: Phòng Grand Cru – Bottle Bunker, Tầng 1 LOTTE Mall West Lake, Tây Hồ, Hà Nội</p>
                </div>
            </div></swiper-slide
        ><swiper-slide
            ><div class="event__item">
                <img src="../../public/images/Event01.png" alt="" />
                <div class="event__box">
                    <h3 class="heading__sub event__title">Hà Nội | MATTER of TASTE |</h3>
                    <p class="desc event__time">Thời gian: 18:00, ngày 28/09/2024</p>
                    <p class="desc event__adsress">Địa điểm: Phòng Grand Cru – Bottle Bunker, Tầng 1 LOTTE Mall West Lake, Tây Hồ, Hà Nội</p>
                </div>
            </div></swiper-slide
        >
    </swiper>
</template>
<script>
// Import Swiper Vue.js components
import {Swiper, SwiperSlide} from "swiper/vue";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import {Navigation} from "swiper/modules";

export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        return {
            modules: [Navigation],
        };
    },
};
</script>

<style scoped>
.swiper {
    width: 100%;
    height: 100%;
}

.swiper-slide {
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.5;
    transition: all 0.5s ease-in-out;
}

.swiper-slide img {
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.swiper-slide-active + .swiper-slide {
    opacity: 1;
    transition: all 0.5s ease-in-out;
}

.swiper-slide-active + .swiper-slide .event__box {
    max-width: 80%;
    margin: 0 auto;
    text-align: start;
    background-color: #f8f5f5;
    padding: 20px;
    border-radius: 10px;
    margin-top: -60px;
    z-index: 100;
    position: relative;
    display: block;
    transition: all 0.5s ease-in-out;
}

/* ///////////// */
.event__box {
    display: none;
}
</style>
