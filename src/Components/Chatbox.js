import React, { useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { data } from "./Dummydata";

const Chatbox = ({ first, setNewchat, setChat, chat }) => {
  console.log(chat);
  const handleButtonYes = () => {
    setChat([
      ...chat,
      {
        id: 2,
        msg: `thankyou  ${chat[2].msg}: ,i got your  number:${chat[4].msg} & email id: ${chat[6].msg} ,we will connect with you shortly`,
      },
    ]);
  };
  return (
    <div className=" border-y-black h-full  ">
      <div className="border-black items-center  w-full h-full p-4 ">
        {chat.map((item, index) => {
          return (
            <>
              {item.id == "2" ? (
                <div className="flex m-2 rounded-3xl w-1/3 items-center   bg-white p-2">
                  <span className="">
                    {item.icon}

                    {/* <AccountCircleIcon /> */}
                  </span>
                  <p className="mx-2 p-1" key={index}>
                    <span className="font-bold">{item.name}</span>
                    {/* {item.greet} */}
                    {item.msg}
                    {item.button && (
                      <div className="p-2 m-2">
                        <button
                          className=" hover:bg-green-600 px-4 m-2 text-white py-2 rounded-sm  bg-[rgb(64,157,120)]"
                          onClick={() => handleButtonYes()}
                        >
                          Yes
                        </button>
                        <button className=" hover:bg-green-600 px-4 text-white py-2 rounded-sm  bg-[rgb(64,157,120)]">
                          No
                        </button>
                      </div>
                    )}

                    {/* {first} */}
                    <span className="font-extralight text-xs mx-10 p-2">
                      {item.time} {index + 1}
                    </span>
                  </p>
                </div>
              ) : (
                <div className="flex  flex-row-reverse">
                  <div className="w-1/4 text-white  bg-[rgb(64,157,120)] rounded-2xl items-center justify-center p-2 m-2 ">
                    <span className="">
                      <AccountCircleIcon />
                    </span>
                    <p className="mx-2">
                      <span className="font-bold"></span>
                      <p>{item.msg}</p>
                      <span className="font-extralight text-xs mx-10 p-2">
                        {item.time}
                      </span>
                    </p>
                  </div>
                </div>
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Chatbox;
