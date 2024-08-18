import { useState } from "react";
import HomeFilters from "./HomeFilters";
import Navbar from "./Navbar";
import { Steps } from "../sources/helper";
import { useLocation } from "react-router-dom";

interface LayoutProps {
  children: React.ReactNode;
  selectedFilter?: keyof Steps | undefined;
  setSelectedFilter?: (filter: keyof Steps | undefined) => void;
}
export default function Layout({
  children,
  selectedFilter,
  setSelectedFilter,
}: LayoutProps) {
  const location = useLocation();
  return (
    <div>
      <div className="sticky top-0 z-20">
        <Navbar />
        {location.pathname === "/" &&
        <HomeFilters
        activeFilter={selectedFilter}
        onFilterClick={(clickedFilter) => {
          setSelectedFilter?.(clickedFilter);
        }}
        />
      }
      </div>
      {children}
    </div>
  );
}
