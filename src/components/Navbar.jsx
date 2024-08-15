import React from "react";
import { appleImg, bagImg, searchImg } from "../utils/index";
import { navLists } from "../constants/index";

const Navbar = () => {
  return (
    <header className="w-full py-5 sm:px-10 px-5 flex items-center sticky top-0 z-50 bg-black/40">
      <nav className="w-full flex justify-between screen-max-width">
        <img src={appleImg} alt="Apple Icon" width={18} height={18} />
        <div className="flex flex-1 justify-center max-sm:hidden">
          {navLists.map((item) => (
            <a
              href={`#${item}`}
              key={item}
              className="mx-5 text-sm text-gray hover:text-white transition-all"
            >
              {item}
            </a>
          ))}
        </div>
        <div className="flex items-baseline gap-7 max-sm:justify-end max-sm:flex-1 text-gray cursor-pointer">
          <img src={searchImg} alt="search" width={18} height={18} />
          <img src={bagImg} alt="bag" width={18} height={18} />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
