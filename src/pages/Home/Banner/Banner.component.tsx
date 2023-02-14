import React from "react";
import banner1 from "../../../images/home/banner/banner1.png";
import banner2 from "../../../images/home/banner/banner2.png";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper";

const Banner = () => {
  return (
    <div className="mx-10 my-7 z-0">
      {/* Banner section start  */}
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
          <img className="h-full w-full" src={banner2} alt="First Banner pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={banner2} alt="First Banner pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={banner2} alt="First Banner pic" />
        </SwiperSlide>
        <SwiperSlide>
          <img className="h-full w-full" src={banner2} alt="First Banner pic" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
