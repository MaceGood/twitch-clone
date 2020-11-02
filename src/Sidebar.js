import React from "react";
import Channel from "./Channel";
import "./Sidebar.css";
import SearchIcon from "@material-ui/icons/Search";

function Sidebar() {
  return (
    <div className="sidebar">
      <div className="sidebar__top">
        <h5>FOLLOWED CHANNELS</h5>
        <Channel
          avatar="https://i.pinimg.com/originals/3d/7f/8c/3d7f8c4ff644b94de53f87546a4437a0.png"
          name="ZHC"
          followers="17M"
        />
        <Channel
          avatar="https://art.pixilart.com/9e632d6c399893c.png"
          name="Mr.Beast"
          followers="60M"
        />
        <h5>RECOMMENDED CHANNELS</h5>
        <Channel
          avatar="https://lh3.googleusercontent.com/ogw/ADGmqu_oBPqyKW5g1RbrG2lhJUd2Df-DMbU-zz_6mX6XDg=s83-c-mo"
          name="Mace"
          followers="1M"
        />
        <p className="sidebar__topShowMore">Show More</p>
      </div>

      {/* <div className="sidebar__bottom">
        <div className="sidebar__bottomContainer">
          <SearchIcon />
          <input type="text" placeholder="Search to Add Friends" />
        </div>
      </div> */}
    </div>
  );
}

export default Sidebar;
