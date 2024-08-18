import React from "react";
import { Steps } from "../sources/helper";

const filters: (keyof Steps)[] = [
  "advanced",
  "HTML",
];

interface HomeFiltersProps {
  activeFilter?: keyof Steps | undefined;
  onFilterClick: (clickedFilter: keyof Steps | undefined) => void;
}

export default function HomeFilters({
  activeFilter = "advanced",
  onFilterClick,
}: HomeFiltersProps) {
  return (
    <div className="bg-seconadaryLight text-white">
      <ul className="flex gap-4 container m-auto py-5 font-semibold text-sm">
        {filters.map((filterItem, index) => (
          <li
            className={`px-4 py-2 bg-[#ffffff30]  rounded-3xl cursor-pointer transition-colors ${
              filterItem === activeFilter ? "bg-white text-seconadary" : "hover:bg-[#ffffff66]"
            }`}
            onClick={() => onFilterClick(filterItem)}
          >
            {filterItem}
          </li>
        ))}
      </ul>
    </div>
  );
}
