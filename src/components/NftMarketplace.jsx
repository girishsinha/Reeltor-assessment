import React from "react";
import EtherIcon from "./EtherIcon";

const NftMarketplace = () => {
  return (
    <div className="sm:h-60 sm:w-110 h-50 w-90 relative ">
      <div className="bg-gradient-to-t from-[#0000009C] to- z-5 h-full w-full absolute rounded-lg "></div>
      <img
        src="/marketplace.jpeg"
        alt="image"
        className="absolute h-full w-full object-cover top-0 rounded-lg z-1"
      />
      <div className="absolute text-sm left-6 bottom-6 font-medium text-white z-10">
        <h3 className="font-bold text-base">House Andromeda</h3>
        <h3 className="font-[mulish] font-semibold flex items-center">
          <EtherIcon /> 1.44 Ether
        </h3>
        <p className="font-[mulish] font-normal">(24 bidders)</p>
      </div>
      <div className="absolute left-6 top-6 flex gap-2 z-10  ">
        <h3 className=" p-1 px-3  bg-white/45 font-bold text-white text-sm rounded-4xl cursor-pointer hover:bg-white/70">
          Top pics
        </h3>
        <h3 className=" p-1 px-3 bg-white/45 font-bold text-white text-sm rounded-4xl cursor-pointer hover:bg-white/70">
          Featured
        </h3>
      </div>
      <div className="absolute right-6 bottom-8 flex justify-between w-25 z-10 ">
        {" "}
        <img
          src="avatar2.jpeg"
          alt="avatar"
          className="w-9 aspect-square rounded-full cursor-pointer"
        />
        <div className=" w-9 aspect-square bg-white/60 backdrop-blur-lg rounded-full flex items-center cursor-pointer hover:bg-white/70">
          <img
            src="instagram.svg"
            alt="instaicon"
            className="m-auto w-4 aspect-auto cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default NftMarketplace;
