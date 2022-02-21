import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { secure, secureApp, union } from "../assets";

const ServiceCarousel = () => {
  return (
    <Swiper
      slidesPerView={3}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      spaceBetween={30}
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay]}
      className="mySwiper py-3"
    >
      <SwiperSlide>
        <div className="swiper-card m-2">
          <img
            src={union}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
            Bitcoin Escrow Service
          </h5>
          <p className="text-white fs-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            praesent massa ullamcorper ultrices eu tortor...
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-card m-2">
          <img
            src={secure}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          Safe and secure
          </h5>
          <p className="text-white fs-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            praesent massa ullamcorper ultrices eu tortor...
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-card m-2">
          <img
            src={secureApp}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          Integrated app
          </h5>
          <p className="text-white fs-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            praesent massa ullamcorper ultrices eu tortor...
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="swiper-card m-2">
          <img
            src={union}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
            Bitcoin Escrow Service
          </h5>
          <p className="text-white fs-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            praesent massa ullamcorper ultrices eu tortor...
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-card m-2">
          <img
            src={secure}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          Safe and secure
          </h5>
          <p className="text-white fs-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            praesent massa ullamcorper ultrices eu tortor...
          </p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
      <div className="swiper-card m-2">
          <img
            src={secureApp}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          Integrated app
          </h5>
          <p className="text-white fs-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nisl
            praesent massa ullamcorper ultrices eu tortor...
          </p>
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default ServiceCarousel;
