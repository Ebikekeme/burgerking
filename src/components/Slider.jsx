import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import img1 from "../assets/img--1.jpg";
import img2 from "../assets/img--2.jpg";
import img3 from "../assets/img--3.jpg";
import img4 from "../assets/img--4.jpg";
import img5 from "../assets/img--5.jpg";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

function Slider() {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
    >
      <SwiperSlide>
        <img src={img1} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img2} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img3} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img4} alt="" className="slide" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={img5} alt="" className="slide" />
      </SwiperSlide>
      ...
    </Swiper>
  );
}

export default Slider;
