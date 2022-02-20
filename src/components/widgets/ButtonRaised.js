import React from "react";

export default function ButtonRaised({ type = "button", children }) {
  return (
    <button className="cursor-pointer px-4 py-3 w-full">{children}</button>
  );
}
