import React, { useState } from "react";
import Navbar from "../components/Navbar";
import HomeFilters from "../components/HomeFilters";
import { Steps } from "../sources/helper";
import CarouselVideos from "../components/CarouselVideos";
import { FaAngleDown } from "react-icons/fa";
import VideosList from "../components/VideosList";
import Layout from "../components/Layout";

export default function Home() {
  const [selectedFilter, setSelectedFilter] = useState<keyof Steps | undefined>(
    "advanced"
  );
  return (
    <Layout
      selectedFilter={selectedFilter}
      setSelectedFilter={setSelectedFilter}
    >
      <CarouselVideos filterType={selectedFilter} />
      <div className="pt-16 pb-4 text-center text-white bg-seconadaryLight">
        Scroll down to see more videos
        <FaAngleDown className="mx-auto mt-1 text-xl" />
      </div>
      {/* <WhatIsReact /> */}
      <VideosList />

      <div className="w-full h-screen bg-black"></div>
    </Layout>
  );
}
