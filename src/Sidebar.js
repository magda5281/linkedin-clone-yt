import { Avatar } from "@material-ui/core";
// import { Avatar } from "@mui/material";
import React from "react";
import "./Sidebar.css";
import background from "./images/sidebar-background.jpg";
import { selectUser } from "./features/userSlice";
import { useSelector } from "react-redux";

function Sidebar() {
  const user = useSelector(selectUser);

  const recentItem = (topic) => {
    return (
      <div className="sidebar__recentItem  ">
        <span className="sidebar__hash">#</span>
        <p>{topic}</p>
      </div>
    );
  };
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <img src={background} alt="background" />
        <Avatar src={user?.photoUrl} className="sidebar__avatar">
          {user?.email[0]}
        </Avatar>
        <h2>{user.displayName}</h2>
        <h4>{user.email}</h4>
      </div>
      {/* sidebar stats  */}
      <div className="sidebar__stats">
        <div className="sidebar__stat">
          <p>Who viewd you</p>
          <p className="sidebar__statNumber">2,333</p>
        </div>
        <div className="sidebar__stat">
          <p>Views on post</p>
          <p className="sidebar__statNumber">2,000</p>
        </div>
      </div>
      <div className="sidebar__bottom">
        <p>Recent</p>
        {recentItem("reactjs")}
        {recentItem("programing")}
        {recentItem("software")}
        {recentItem("design")}
        {recentItem("developer")}
      </div>
    </div>
  );
}

export default Sidebar;
