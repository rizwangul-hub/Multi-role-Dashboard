import React from "react";
import profile from "../images/Shape.png";
import setting from "../images/Shape (1).png";
import notification from "../images/bell.png";

const Header = () => {
  return (
    <div className="flex justify-around gap-2 h-[60px] bg-green-600 text-white">
      <div>
        <div>Page / Dashboard</div>
        <h2 className="font-bold">Dashboard </h2>
      </div>
      <div className="flex gap-3 items-center gap-3">
        <input
          type="search"
          placeholder="🔍 Type here..."
          name=""
          id=""
          className="border h-11 pl-3 pr-4 rounded-lg bg-white text-black"
        />
        <div className="flex gap-2">
          <img className="w-[30px] h-[30px]" src={profile} alt="" />
          <div>Director</div>
          <img className="w-[30px] h-[30px]" src={setting} alt="" />
          <img className="w-[30px] h-[30px]" src={notification} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Header;
