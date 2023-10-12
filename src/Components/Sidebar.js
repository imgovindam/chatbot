import React from "react";

const Sidebar = ({ chat }) => {
  return (
    <div className=" bg-[rgb(64,157,120)] border-r-4 h-full">
      <div className="flex flex-col p-4 m-6 font-sans font-normal text-[25px] text-white">
        {chat.map((item, index) => {
          return <div>{item.id == "1" ? item.msg : ""}</div>;
        })}
      </div>
    </div>
  );
};

export default Sidebar;
