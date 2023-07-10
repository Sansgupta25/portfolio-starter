import React from "react";
import { BiHomeAlt, BiUser } from "react-icons/bi";

import { BsClipboardData, BsBriefcase, BsChatSquare, BsChatSquareText } from "react-icons/bs";
import { Link } from "react-scroll";
const Nav = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50 ">
      <div className="container mx-auto"></div>

      <div  className="w-full bg-black/20 h-[96px] backdrop-blur-2xl rounded-full max-w-[460px] mx-auto px-5 flex justify-between items-center text-2xl text-white/50">
        <Link to="home" activeClass="active" smooth={true} spy={true} offset={-200} className="cursor-pointer w-p-[60px] h-[60] flex items-center justify-center text-2xl">
          <BiHomeAlt />
          {/* <p className="items-center justify-center text-2xl">Home</p> */}
        </Link>
        <Link to="about" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-p-[60px] h-[60] flex items-center justify-center text-2xl">
          <BiUser />
        </Link>
        <Link to="projects" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-p-[60px] h-[60] flex items-center justify-center text-2xl">
          <BsClipboardData />
        </Link>
        <Link to="work" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-p-[60px] h-[60] flex items-center justify-center text-2xl">
          <BsBriefcase />
        </Link>
        <Link to="contactus" activeClass="active" smooth={true} spy={true} className="cursor-pointer w-p-[60px] h-[60] flex items-center justify-center text-2xl">
          <BsChatSquareText />
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
