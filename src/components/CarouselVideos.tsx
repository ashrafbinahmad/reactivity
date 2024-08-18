import React, { MouseEvent, useEffect, useRef } from "react";
import { SwiperSlide, Swiper, SwiperRef, SwiperSlideProps } from "swiper/react";
import {
  getAllStepsFor,
  getAllStepsForAdvanced,
  getThumbUrlOf,
  Step,
  Steps,
  Video,
} from "../sources/helper";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import { Swiper as SwiperType } from "swiper";
import { useNavigate } from "react-router-dom";

interface CarouselVideosPropsType {
  filterType?: keyof Steps;
}

export default function CarouselVideos({
  filterType = "advanced",
}: CarouselVideosPropsType) {
  const navigate = useNavigate();
  const swiperRef = useRef<SwiperType | null>(null);
  const videos = getAllStepsFor(filterType);

  function handleNextSlideClick() {
    swiperRef.current?.slideNext();
  }

  function handlePrevSlideClick() {
    swiperRef.current?.slidePrev();
  }

  function handleSlideClick(
    e: React.MouseEvent<HTMLElement, globalThis.MouseEvent>,
    video: Step
  ) {
    const classList = e.currentTarget.classList;
    if (classList.contains("swiper-slide-prev")) handlePrevSlideClick();
    else if (classList.contains("swiper-slide-next")) handleNextSlideClick();
    else navigate(`/videos/${video.youtubeId}`);
  }

  return (
    <div className="">
      <Swiper
        translate="yes"
        className="bg-seconadaryLight cursor-pointer"
        spaceBetween={-50}
        slidesPerView={1.75}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper: any) => {
          swiperRef.current = swiper;
        }}
        speed={1000}
        loop={true}
        centeredSlides
      >
        {videos.map((video, index) => (
          <SwiperSlide className="" onClick={(e) => handleSlideClick(e, video)}>
            <div className="relative overflow-hidden shadow-inner shadow-black">
              <img src={getThumbUrlOf(video.youtubeId)} alt="" />
              <div className="absolute bottom-[2rem] w-full text-white z-20">
                <div className="grid justify-center flex-col items-center grid-cols-[4rem_auto] w-full gap-4">
                  <div>
                    <p className="text-6xl font-semibold text-right">
                      {index + 1}
                    </p>
                  </div>
                  <div className="self-end">
                    <p className="text-3xl">{video.title}</p>
                  </div>
                </div>
                <div className="LINE bg-white h-1 w-[calc(100%-2rem)]  m-auto rounded"></div>
              </div>
              <div className="SHADOW absolute -bottom-20 bg-[#09454fb4] w-[200%] h-1/2 blur-3xl text-white"></div>
              <div className="SHADOW absolute -bottom-20 bg-[#000000] w-[200%] h-44 blur-3xl text-white"></div>
            </div>
          </SwiperSlide>
        ))}
        <div className="relative z-50 flex justify-end gap-1 mr-5 -top-5 ">
          <FaArrowCircleLeft
            color="white"
            className="cursor-pointer opacity-40 hover:opacity-100 backdrop-blur-sm"
            size={50}
            onClick={handlePrevSlideClick}
          />
          <FaArrowCircleRight
            color="white"
            className="cursor-pointer opacity-40 hover:opacity-100 backdrop-blur-sm"
            size={50}
            onClick={handleNextSlideClick}
          />
        </div>
      </Swiper>
    </div>
  );
}
