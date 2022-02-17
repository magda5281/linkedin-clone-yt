import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import linkedin_icon from "./images/linkedin-icon.png";
import HeaderOption from "./HeaderOption.js";
import HomeIcon from "@material-ui/icons/Home";
import SupervisorAccountIcon from "@material-ui/icons/SupervisorAccount";
import WorkIcon from "@material-ui/icons/Work";
import ChatIcon from "@material-ui/icons/Chat";
import NotificationsIcon from "@material-ui/icons/Notifications";
import AppsIcon from "@material-ui/icons/Apps";
import avatarImg from "./images/Magda-avatar.png";
import { useDispatch, useSelector } from "react-redux";
import { logout, selectUser } from "./features/userSlice.js";
import { auth } from "./firebase";

function Header() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);
  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  };
  return (
    <div className="header">
      <div className="header__left">
        <img src={linkedin_icon} alt="linkedin logo" />
        <div className="header__search">
          <SearchIcon className="header__searchIcon" />
          <input placeholder="Search" type="text" />
        </div>
      </div>
      <div className="header__right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={WorkIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notifications" />
        {user && (
          <HeaderOption avatar={true} title="Sign Out" onClick={logoutOfApp} />
        )}
        <HeaderOption Icon={AppsIcon} title="Work" />
      </div>
    </div>
  );
}

export default Header;
