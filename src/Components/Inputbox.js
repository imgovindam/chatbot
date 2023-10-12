import React, { useState } from "react";
import SendIcon from "@mui/icons-material/Send";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

const Inputbox = ({
  increment,
  first,
  handleMessanger,
  newChat,
  setNewchat,
  handleBot,
  setChat,
  chat,
}) => {
  function handleMessage() {
    setChat([
      ...chat,
      {
        id: 1,

        msg: newChat,
        icon: <AccountCircleIcon />,
      },
    ]);
    setNewchat("");
  }
  // function handleMessage() {
  //   handleMessanger();
  //   if (first % 2 === 0) {
  //     handleBot();
  //   } else if (first % 2 !== 0) {
  //     // handleBot();
  //     // console.log();
  //   } else {
  //     console.log(" ");
  //   }
  // }
  const handleStartTyping = (e) => {
    setNewchat(e.target.value);
  };

  // function startButton() {
  //   if (first === 0) {
  //     setChat([
  //       ...chat,
  //       {
  //         id: 2,
  //         msg: "hey Greeting of the Day,please press send button after your response",
  //         // icon: <AccountCircleIcon />,
  //         // time: getCurrentTime(),
  //       },
  //     ]);
  //   } else {
  //     console.log("plz reset");
  //   }
  // }
  // const [bot, setBot] = useState(first);

  console.log(newChat);
  return (
    //  //absolute top-3/4 w-3/4
    <div className="grid grid-cols-12 p-2 top-3/4 ">
      {" "}
      <div
        className="w-full flex col-span-12   rounded-3xl"
        onChange={(e) => handleStartTyping(e)}
      >
        <input
          className="w-full p-2 m-2 rounded-3xl outline-green-400 bg-white"
          type="text"
          placeholder="Typing..."
          value={newChat}
        />
        <span
          className="p-2 m-2 cursor-pointer"
          onClick={() => handleMessage()}
        >
          <SendIcon
            fontSize="large"
            style={{ color: "green" }}
            onClick={() => increment()}
          />
        </span>

        {/* {first==0 ?"   ":""} */}
        {/* <div className="hover:shadow-md">
          <button
            onClick={handleBot}
            className="px-2 py-2 mb-2   items-center justify-center bg-green-400 text-center rounded-full text-white font-sans w-1/8 p-4 m-4"
          >
            Start
          </button>
        </div> */}
      </div>
      {/* <div>i am input box, take me there</div> */}
    </div>
  );
};

export default Inputbox;
