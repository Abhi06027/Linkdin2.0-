import React from "react";

export default function Buttonapple(props) {
  return (
    <div>
      <div className="pt-2 pb-6 ">
        <a href={props.link}>
          <button className={props.applebuttonstyle}>
            <img className={props.imgstyle} src={props.imgsrc} alt="" />
            {props.button2}
          </button>
        </a>
      </div>
    </div>
  );
}
