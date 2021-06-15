import React from "react";
import "./chatOnline.css";

export default function chatOnline() {
  return (
    <div className="chatOnline">
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSR62OMOAa41rOjExkHnCL2oxexldHeARYg&usqp=CAU"
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>

        <span className="chatOnlineName">Jellooo</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSR62OMOAa41rOjExkHnCL2oxexldHeARYg&usqp=CAU"
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>

        <span className="chatOnlineName">Jellooo</span>
      </div>
      <div className="chatOnlineFriend">
        <div className="chatOnlineImgContainer">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOSR62OMOAa41rOjExkHnCL2oxexldHeARYg&usqp=CAU"
            alt=""
            className="chatOnlineImg"
          />
          <div className="chatOnlineBadge"></div>
        </div>

        <span className="chatOnlineName">Jellooo</span>
      </div>
    </div>
  );
}
