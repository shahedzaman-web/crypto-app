
import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { confirmation, profit, support, } from "../assets";

const TokenSealCarousel = () => {
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
            src={profit}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
           Enjoy The Profit
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
            src={support}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          Customer Support
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
            src={confirmation}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          Confirmation
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
            src={profit}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
           Enjoy The Profit
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
            src={support}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          Customer Support
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
            src={confirmation}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          Confirmation
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

export default TokenSealCarousel;
