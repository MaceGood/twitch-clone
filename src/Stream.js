import React from "react";
import NotificationsActiveIcon from "@material-ui/icons/NotificationsActive";
import "./Stream.css";

function Stream() {
  return (
    <div className="stream">
      <div className="stream__container">
        <div className="stream__status">
          <div className="stream__statusContainer">
            <div className="stream__statusContainerTop">
              <div className="stream__statusIndicator">OFFLINE</div>
              <h2>Check out the below streams from Mace</h2>
            </div>

            <div className="stream__statusInfo">
              <NotificationsActiveIcon />
              <p>You will be notifed when Mace is live</p>
            </div>
          </div>
        </div>
        <div className="stream__videoEmbed">
          <iframe
            className="stream__video"
            width="582"
            height="327"
            src="https://www.youtube.com/embed/f6EEUYyLFus"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default Stream;
