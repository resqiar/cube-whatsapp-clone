import { IconButton } from "@material-ui/core";
import React from "react";
import ChatRow from "./atoms/Chat/ChatRow";
import ChatHeader from "./atoms/Header/ChatHeader";

import "./Chat.css";

import InsertEmoticonOutlinedIcon from "@material-ui/icons/InsertEmoticonOutlined";
import AttachFileOutlinedIcon from "@material-ui/icons/AttachFileOutlined";
import MicOutlinedIcon from "@material-ui/icons/MicOutlined";
import { TrainRounded } from "@material-ui/icons";

const Chat = ({ messages }) => {
  return (
    <div className="chat__container">
      <div className="chat__header">
        <ChatHeader />
      </div>

      <div className="chat__column">
        {messages.map((element) => (
          <ChatRow text={element.message} className={`chat__row__container ${element.receiver === true ? "chat__sender" : ""}`}/>
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
          <input type="text" placeholder="Type a message" />
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
