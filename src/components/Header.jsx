import React from "react";
import logo from "../assets/logo.png";
import moment from "moment";
import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center justify-center space-y-2 text-center">
        <img src={logo} alt="" />
        <p className="text-primaryText/70 text-lg">
          Journalism Without Fear or Favour
        </p>
        <div className="text-primaryText/80 font-medium text-xl ">
          {moment().format("LLLL")}
        </div>
        <div className="p-4 w-full bg-secondBg rounded-sm flex gap-3">
          <div className="bg-[#D72050] text-white p-2 font-medium text-xl">Latest</div>
          <Marquee pauseOnHover={true} speed={50} className="space-x-10 bg-transparent text-lg  text-primaryText font-semibold w-full" gradientWidth={0}>
            <Link>I can be a React component, multiple React components, or just some
            text.</Link>
            <Link>I can be a React component, multiple React components, or just some
            text.</Link>
            <Link>I can be a React component, multiple React components, or just some
            text.</Link>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
