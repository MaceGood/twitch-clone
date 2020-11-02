import React from "react";
import "./Header.css";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SearchIcon from "@material-ui/icons/Search";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import WhatshotIcon from "@material-ui/icons/Whatshot";
import MonetizationOnIcon from "@material-ui/icons/MonetizationOn";
import { Avatar } from "@material-ui/core";

function Header() {
  return (
    <div className="header">
      <div className="header__left">
        <img
          src="https://pngimg.com/uploads/twitch/twitch_PNG18.png"
          alt="Twitch Logo"
          className="header__leftLogo"
        />
        <h2>Following</h2>
        <h2>Browse</h2>
        <div className="header__verticalLine"></div>
        <h2>Esports</h2>
        <h2>Music</h2>
        <MoreHorizIcon />
      </div>

      <div className="header__center">
        <input type="text" placeholder="Search" />
        <div className="header__centerLogoContainer">
          <SearchIcon />
        </div>
      </div>

      <div className="header__right">
        <div className="header__rightContainer">
          <WhatshotIcon />
          <MailOutlineIcon />
          <ChatBubbleOutlineIcon />
        </div>
        <div className="header__rightBits">
          <MonetizationOnIcon />
          <h4>Get Bits</h4>
        </div>
        <Avatar />
      </div>
    </div>
  );
}

export default Header;
