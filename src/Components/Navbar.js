import React from "react";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import SmartToyIcon from "@mui/icons-material/SmartToy";

const Navbar = () => {
  return (
    <div className="flex cursor-pointer border-b-4 inset-1 h-12 justify-between items-center  bg-[rgb(64,157,120)] max-w-screen-2xl text-white ">
      <div className="flex p-2 m-2">
        <div className=" bg-[rgb(64,157,120)] rounded-full hover:rotate-180">
          <span>
            <ArrowBackIcon fontSize="large" style={{ color: "white" }} />
          </span>
        </div>
      </div>
      <div className="w-1/3  flex justify-center">
        <h1 className="font-sans  font-semibold text-[30px] hover:font-bold underline">
          Chat Bot
          <span className="px-2">
            <SmartToyIcon fontSize="large" style={{ color: "white" }} />
          </span>
        </h1>
        {/* <input
          className=" w-full font-sans bg-white rounded-3xl px-2 py-2 h-10 outline-none text-blue-950"
          type="Text"
          placeholder="search"
        /> */}
      </div>
      <div className="p-1 m-1 border-b-2-white  bg-[rgb(64,157,120)] rounded-full hover:bg-green-400">
        <span>
          <SentimentSatisfiedAltIcon
            fontSize="large"
            style={{ color: "white" }}
          />
        </span>
      </div>
    </div>
  );
};

export default Navbar;
