import React from "react";

export default function TextLink({ children }) {
  return (
    <div className="hover:underline hover:rounded-lg  cursor-pointer font-semibold    ">
      {children}
    </div>
  );
}
