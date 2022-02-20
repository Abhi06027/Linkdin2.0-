import React from "react";

export default function Button1(props) {
  return (
    <div>
      <div className=" py-4 cursor-pointer">
        <a href={props.link}>
          <button className={props.buttonstyle}>{props.button}</button>
        </a>
      </div>
    </div>
  );
}
