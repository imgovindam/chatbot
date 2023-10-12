import AccountCircleIcon from "@mui/icons-material/AccountCircle";

function getCurrentTime() {
  const now = new Date();
  const hours = now.getHours().toString().padStart(2, "0");
  const minutes = now.getMinutes().toString().padStart(2, "0");
  //   const seconds = now.getSeconds().toString().padStart(2, "0");

  return `${hours}:${minutes}`;
}

export const data = [
  {
    id: 1,
    name: "chitti",
    greet: "hellow there,how may i help you?",
    msg: "please enter your name",
    icon: <AccountCircleIcon />,
    time: getCurrentTime(),
  },
  {
    id: 2,
    name: "user",
    greet: "hellow there,how may i help you?",
    msg: "please enter your name",
    icon: <AccountCircleIcon />,
    time: getCurrentTime(),
  },
];
