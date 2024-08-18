import { FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <div className="border-[#ffffff30] bg-seconadary border-b">
      <div className="flex justify-stretch gap-5 m-auto text-white container">
        <a
          href="/#"
          className="flex items-center gap-2 p-3 w-min text-white container LEFT"
        >
          <span className="flex justify-center bg-primary pt-1 rounded-full w-10 h-10 text- text-center text-lg text-white align-middle logo">
            r.
          </span>
          <h1 className="font-bold text-xl">Reactivity.</h1>
        </a>
        <div className="relative w-full MENU-DIV self-end">
          <ul className="flex gap-4 font-semibold MENU">
            <li className="py-5 border-b-4 border-b-primaryLight ITEM">
              Videos
            </li>
            <li className="opacity-90 py-5 ITEM">Documents</li>
          </ul>
          {/* <span className="bg-primary w-40 h-16"></span> */}
        </div>
        <div className="flex items-center gap-4 RIGHT self-center">
          <div className="flex items-center gap-2 bg-[#ffffff30] px-5 py-2 rounded-3xl w-96 SEARCH">
            <FaSearch />
            <input
              type="text"
              name="search"
              id="searchBox"
              autoComplete="false"
              placeholder="Search react js Docs and Videos"
              className="bg-[transparent] w-full outline-0"
            ></input>
          </div>
          {/* <div className="flex justify-center items-center bg-primary rounded-full w-10 h-10 USER">
            <FaUser />
          </div> */}
        </div>
      </div>
    </div>
  );
}
