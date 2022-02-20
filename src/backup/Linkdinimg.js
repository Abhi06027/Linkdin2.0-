import React from "react";

export default function Linkdinimg(props) {
  return (
    <div>
      <img className={props.imgstyle} src={props.imgsrc} alt="" />
    </div>
  );
}
