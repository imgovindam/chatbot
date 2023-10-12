import { useEffect, useState } from "react";
import Chatbox from "./Components/Chatbox";
import Inputbox from "./Components/Inputbox";
import Navbar from "./Components/Navbar";
import Sidebar from "./Components/Sidebar";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import Todolist from "./Components/Todolist";

function App() {
  const [first, setFirst] = useState(0);

  const [chat, setChat] = useState([]);
  const [newChat, setNewchat] = useState("");

  useEffect(() => {
    let xyz = chat.length;
    switch (xyz) {
      case 1:
        setChat([
          ...chat,
          {
            id: 2,
            msg: "hello, I am Chitti, thanks for connecting,may i know your name please?",
            icon: <AccountCircleIcon />,
            time: getCurrentTime(),
          },
        ]);
        // break;

        break;
      case 3:
        setChat([
          ...chat,
          {
            id: 2,
            msg: `hellow ${chat[2].msg},we are happy to help you!!please provide me your mobile number`,
          },
        ]);

        break;

      case 5:
        console.log(chat[0]);
        // console.log(newChat);
        setChat([
          ...chat,
          {
            id: 2,
            msg: `thankyou for your mobile Number ${chat[4].msg}, give me your email please`,
          },
        ]);

        break;
      case 7:
        setChat([
          ...chat,
          {
            id: 2,
            msg: `got your email  ${chat[6].msg}, type "YES" & will move ahead with your details `,
          },
        ]);

        break;
      case 9:
        // console.log(chat[0]);
        // console.log(newChat);
        setChat([
          ...chat,
          {
            id: 2,
            msg: `Thankyou  ${chat[2].msg}: ,i got your mob no::${chat[4].msg} & email id: ${chat[6].msg} ,to confirm,
            please press `,
            button: true,
          },
        ]);

        break;

      default:
    }
  }, [chat]);

  const handleMessanger = () => {
    setChat([
      ...chat,
      {
        id: 1,
        msg: newChat,
      },
    ]);
    setNewchat("");
  };

  console.log(chat);

  const increment = () => {
    setFirst(first + 1);
  };

  //for time
  function getCurrentTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, "0");
    const minutes = now.getMinutes().toString().padStart(2, "0");
    //   const seconds = now.getSeconds().toString().padStart(2, "0");

    return `${hours}:${minutes}`;
  }

  return (
    <div className="App flex flex-col ">
      {/* <Todolist /> */}
      <div>
        <Navbar />
      </div>
      <div className="grid grid-cols-12 bg-yellow-500 h-[100vh]">
        <div className="grid col-span-3 ">
          <Sidebar chat={chat} />
        </div>
        <div className="grid col-span-9  bg-zinc-300">
          <div>
            <Chatbox
              first={first}
              setNewchat={setNewchat}
              setChat={setChat}
              newChat={newChat}
              chat={chat}
            />
          </div>

          <div>
            <Inputbox
              increment={increment}
              first={first}
              handleMessanger={handleMessanger}
              newChat={newChat}
              setNewchat={setNewchat}
              // handleBot={handleBot}
              setChat={setChat}
              chat={chat}
            />
          </div>
        </div>
        {/* <div className="grid col-span-9 bg-zinc-300 ">
          <Inputbox
            increment={increment}
            first={first}
            handleMessanger={handleMessanger}
            newChat={newChat}
            setNewchat={setNewchat}
            // handleBot={handleBot}
            setChat={setChat}
            chat={chat}
          />
        </div> */}
      </div>
    </div>
  );
}

export default App;

// import React from "react";
// import Chatbot from "react-chatbot-kit";

// import ActionProvider from "./ActionProvider";
// import MessageParser from "./MessageParser";
// import config from "./config";

// export function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <Chatbot
//           config={config}
//           actionProvider={ActionProvider}
//           messageParser={MessageParser}
//         />
//       </header>
//     </div>
//   );
// }
