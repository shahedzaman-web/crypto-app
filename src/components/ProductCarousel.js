import React from "react";
import { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { ether, ninja, wallet } from "../assets";

const ProductCarousel = () => {
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
            src={wallet}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          DeFi Wallet
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
            src={ether}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
         Micro Ether
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
            src={ninja}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
        NinjaTrader
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
            src={wallet}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
          DeFi Wallet
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
            src={ether}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
         Micro Ether
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
            src={ninja}
            className="w-25  align-self-center my-3"
            alt="..."
          />
          <h5 className="card-title text-white my-2 display-5s">
        NinjaTrader
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

export default ProductCarousel;
