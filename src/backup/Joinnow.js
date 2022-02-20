import React from "react";

export default function Joinnow(props) {
  return (
    <div>
      <div className="flex justify-center space-x-1 mt-6">
        <p className={props.name3style}> {props.name3} </p>
        <p className={props.name4style2}> {props.name4}</p>
      </div>
    </div>
  );
}
