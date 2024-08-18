import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import HomeFilters from "./components/HomeFilters";
import { SwiperSlide, Swiper } from "swiper/react";
import "swiper/css";
import CarouselVideos from "./components/CarouselVideos";
import VideosList from "./components/VideosList";
import { Steps } from "./sources/helper";
import WhatIsReact from "./components/WhatIsReact";
import { FaAngleDown } from "react-icons/fa";

function App() {
  const [selectedFilter, setSelectedFilter] = useState<keyof Steps | undefined>("advanced");
  return (
    <>
      <div className="sticky top-0 z-20">
        <Navbar />
        <HomeFilters
          activeFilter={selectedFilter}
          onFilterClick={(clickedFilter) => {
            setSelectedFilter(clickedFilter);
          }}
        />
      </div>
      <CarouselVideos filterType={selectedFilter} />
      <div className="pt-16 pb-4 text-center text-white bg-seconadaryLight" >
        Scroll down to see more videos 
        <FaAngleDown className="mx-auto mt-1 text-xl" />
      </div>
      {/* <WhatIsReact /> */}
      <VideosList />

      <div className="w-full h-screen bg-black"></div>
    </>
  );
}

export default App;
