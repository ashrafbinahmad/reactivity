import React from "react";
import { FaSearch, FaUser } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-seconadary border-b border-[#ffffff30]">
      <div className="container m-auto flex text-white justify-stretch gap-5">
        <a
          href="/#"
          className="LEFT container flex items-center text-white gap-2 p-3 w-min"
        >
          <span className="logo bg-primary text-white w-10 h-10 text-center flex justify-center align-middle rounded-full pt-1 text-lg text-">
            r.
          </span>
          <h1 className="text-xl font-bold ">Reactivity.</h1>
        </a>
        <div className="MENU-DIV self-end  w-full relative">
          <ul className="MENU flex gap-4 font-semibold">
            <li className="ITEM py-5 border-b-primaryLight  border-b-4 ">
              Videos
            </li>
            <li className="ITEM py-5 opacity-90">Documents</li>
          </ul>
          {/* <span className="w-40 h-16 bg-primary"></span> */}
        </div>
        <div className="RIGHT self-center flex items-center gap-4">
          <div className="SEARCH bg-[#ffffff30] px-5 py-2 rounded-3xl w-96 flex items-center gap-2">
            <FaSearch />
            <input
              type="text"
              name="search"
              id="searchBox"
              autoComplete="false"
              placeholder="Search react js Docs and Videos"
              className="bg-[transparent] outline-0 w-full"
            ></input>
          </div>
          {/* <div className="USER flex items-center justify-center w-10 h-10 bg-primary rounded-full">
            <FaUser />
          </div> */}
        </div>
      </div>
    </nav>
  );
}
