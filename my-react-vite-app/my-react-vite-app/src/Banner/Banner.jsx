import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "./Banner.css"
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

import { Link } from "react-router-dom";
import Slider from "react-slick";
// import Image from "../designLayouts/Image"; // Assuming Image is a custom component

import banner from "/images/Banner/banner.webp";

const Banner = () => {
  

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      <SwiperSlide>
        <Link to="/">
          <div>
            <img
              src={banner}
              alt="banner1"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
            <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
              <h1 className="text-3xl font-semibold text-primeColor">
                Product of The year
              </h1>
              <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat cupiditate modi amet! Facilis, aperiam quaerat.
              </p>
              {/* <ShopNow /> */}
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Link to="/">
          <div>
            <img
              src={banner}
              alt="banner1"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
            <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
              <h1 className="text-3xl font-semibold text-primeColor">
                Product of The year
              </h1>
              <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat cupiditate modi amet! Facilis, aperiam quaerat.
              </p>
              {/* <ShopNow /> */}
            </div>
          </div>
        </Link>
      </SwiperSlide>
      <SwiperSlide>
        {" "}
        <Link to="/">
          <div>
            <img
              src={banner}
              alt="banner1"
              style={{ width: "100%", height: "80vh", objectFit: "cover" }}
            />
            <div className="w-full md:w-2/3 xl:w-1/2 h-80 absolute px-4 md:px-0 top-0 right-0 flex flex-col items-start gap-6 justify-center">
              <h1 className="text-3xl font-semibold text-primeColor">
                Product of The year
              </h1>
              <p className="text-base font-normal text-primeColor max-w-[600px] mr-4">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Repellat cupiditate modi amet! Facilis, aperiam quaerat.
              </p>
              {/* <ShopNow /> */}
            </div>
          </div>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default Banner;
