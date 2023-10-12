import React, { useState } from "react";

const Todolist = () => {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  
  const handleData = () => {
    setData([...data, input]);
  };
  const hadleTask = (e) => {
    setInput(e.target.value);
  };
  return (
    <div onChange={(e) => hadleTask(e)}>
      <input type="text" placeholder="todo list here" value={input} />
      <button onClick={() => handleData()}>+</button>
      {data.map(() => {
        return <div>{input}</div>;
      })}
    </div>
  );
};

export default Todolist;
