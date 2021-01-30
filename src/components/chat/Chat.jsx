import { IconButton } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import ChatRow from "./atoms/Chat/ChatRow";
import ChatHeader from "./atoms/Header/ChatHeader";

import "./Chat.css";

import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";

import axios from "../../api/axios";

const Chat = ({ messages }) => {
  const [input, setinput] = useState("");
  

  const chatSubmit = async (e) => {
    e.preventDefault();

    await axios.post("/api/v1/message/create", {
      message: input,
      name: "Anonymous",
      receiver: true,
      timestamp: "22:20",
    })
    
    setinput("");
    
  }
  
  return (
    <div className="chat__container">
      <div className="chat__header">
        <ChatHeader />
      </div>

      <div className="chat__column">
        {messages.map((element) => (
          <ChatRow
            text={element.message}
            className={`chat__row__container ${
              element.receiver === true ? "chat__sender" : ""
            }`}
          />
        ))}
      </div>

      <div className="chat__input__container">
        <div className="chat__input__left">
          <IconButton>
            <InsertEmoticonOutlinedIcon />
          </IconButton>
          <IconButton>
            <AttachFileOutlinedIcon />
          </IconButton>
        </div>
        <div className="chat__input">
          <form className="chat__input">
            <input
              type="text"
              value={input}
              onChange={(e) => setinput(e.target.value)}
              placeholder="Type a message"
            />
            <button
              type="submit"
              onClick={chatSubmit}
              className="chat__button"
            ></button>
          </form>
        </div>
        <div className="chat__input__right">
          <IconButton>
            <MicOutlinedIcon />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Chat;
