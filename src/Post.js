import React, { forwardRef } from "react";
import "./Post.css";
import { Avatar } from "@material-ui/core";
import InputOption from "./InputOption.js";
import ThumbUpIcon from "@material-ui/icons/ThumbUp";
import ReplyOutlinedIcon from "@material-ui/icons/ReplyOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import SendIcon from "@material-ui/icons/Send";
// import FlipMove from "react-flip-move";

//flipMove needs reference to the object that will be animated
//we wrap a child component in forwardRef and pass ref as a prop
const Post = forwardRef(({ name, description, message, photoUrl }, ref) => {
  console.log(typeof name);
  return (
    <div ref={ref} className="post">
      <div className="post__header">
        <Avatar src={photoUrl}>{name[0]}</Avatar>

        <div className="post__info">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>
      <div className="post__body">
        <p>{message}</p>
      </div>
      <div className="post__buttons">
        <InputOption Icon={ThumbUpIcon} title="Like" color="grey" />
        <InputOption Icon={ChatOutlinedIcon} title="Comment" color="grey" />
        <InputOption Icon={ReplyOutlinedIcon} title="Share" color="grey" />
        <InputOption Icon={SendIcon} title="Send" color="grey" />
      </div>
    </div>
  );
});

export default Post;
