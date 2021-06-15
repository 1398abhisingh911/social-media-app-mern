import React from "react";
import "./message.css";

export default function Message({ own }) {
  return (
    <div className={own ? "message own" : "messsage"}>
      <div className="messageTop">
        <img
          className="messageImg"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEW8-VmRSrhFBnXY5IVUmt-vAqHazj_9GwWw&usqp=CAU"
          alt=""
        />
        <p className="messageText">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit.
        </p>
      </div>
      <div className="messageBottom">1 hr ago</div>
    </div>
  );
}
