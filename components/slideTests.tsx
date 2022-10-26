import { Swiper, SwiperSlide } from "swiper/react";

export default function SlideTest() {
  return (
    <Swiper slidesPerView={"auto"} spaceBetween={4}>
        <SwiperSlide
          className={"product-card__references-carousel__slide"}
        >
          <img
              src={`https://picsum.photos/200/300?random=1`}
              alt="Project"
              className="slide-image"
            />
        </SwiperSlide>
        <SwiperSlide
        className={"product-card__references-carousel__slide"}
      >
        <img
            src={`https://picsum.photos/200/300?random=1`}
            alt="Project"
            className="slide-image"
          />
      </SwiperSlide>
    </Swiper>
  );
}