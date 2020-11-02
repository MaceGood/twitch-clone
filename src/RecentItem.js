import React from "react";
import "./RecentItem.css";

function RecentItem({ url, title }) {
  return (
    <div className="recentItem">
      <div className="item">
        <iframe
          width="582"
          height="327"
          src={url}
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
        <div className="details">
          <h4>{title}</h4>
          <p>Mace</p>
          <p>Hacking & Programming</p>
        </div>
      </div>
    </div>
  );
}

export default RecentItem;
