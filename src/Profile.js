import React from "react";
import "./Profile.css";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import NotificationsIcon from "@material-ui/icons/Notifications";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import RecentItem from "./RecentItem";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__topLeft">
        <img
          src="https://lh3.googleusercontent.com/ogw/ADGmqu_oBPqyKW5g1RbrG2lhJUd2Df-DMbU-zz_6mX6XDg=s83-c-mo"
          alt=""
        />
        <div className="profile__topLeftDetails">
          <h1>Mace</h1>
          <h3>1M Followers</h3>
        </div>
      </div>
      <div className="profile__topRight">
        <FavoriteBorderIcon className="heart" />
        <NotificationsIcon className="notification" />
        <MoreVertIcon className="tocki" />
      </div>
      <div className="profile__menu">
        <h2 className="active">Home</h2>
        <h2>About</h2>
        <h2>Schedule</h2>
        <h2>Videos</h2>
        <h2>
          <ArrowUpwardIcon className="arrow" />
        </h2>
        <h2>Chat</h2>
      </div>
      <div className="profile__recent">
        <h2>Recent broadcasts</h2>
        <RecentItem
          url="https://www.youtube.com/watch?v=f6EEUYyLFus&t=2s"
          title="How to build Clock in JS"
        />
        <RecentItem
          url="https://www.youtube.com/watch?v=f6EEUYyLFus&t=2s"
          title="How to build Clock in JS"
        />
        <RecentItem
          url="https://www.youtube.com/watch?v=f6EEUYyLFus&t=2s"
          title="How to build Clock in JS"
        />
      </div>
      <div className="profile__categories">
        <h2>Mace's recently streamed Categories</h2>
        <img
          src="https://lh3.googleusercontent.com/YJG84LxJERGeHIQYZ2E8UV_RYWlm_2Ode9_Un99G3qx4O9IahaPfXHoSXqXqedAwGcQF5MKV-4xNPMYtF5prK9w"
          alt=""
        />
        <h2>Gaming</h2>
      </div>
    </div>
  );
}

export default Profile;
