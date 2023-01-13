import React from "react";
import { AiFillHome } from "react-icons/ai";
import { MdCatchingPokemon } from "react-icons/md";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="navbar bg-[#7f1d1d] dark:bg-[#52525b]">
      <div className="flex-1 text-center">
        <a className="btn btn-ghost normal-case text-center text-2xl text-white">
          <AiFillHome className="w-23" />
          <Link to="/">
            <span>Home</span>{" "}
          </Link>
        </a>
      </div>
      <div className="flex-none gap-4">
        <div>
          <MdCatchingPokemon className="w-32 color-white" />
          <span className="text-white font-bold">My Pokemon</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
