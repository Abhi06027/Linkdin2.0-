import React from "react";

export default function Headername(props) {
  return (
    <div>
      <div className=" mt-10 sm:mt-10 md:mt-36 pb-3 lg:mt-36">
        <img className={props.imgstyle} src={props.imgsrc} alt="" />
      </div>

      <div className="py-3 ">
        <h1 className={props.namestyle}>{props.name}</h1>
        <p className={props.namestyle2}>{props.name2}</p>
      </div>
    </div>
  );
}
