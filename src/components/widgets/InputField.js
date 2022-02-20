import React from "react";

export default function InputField({ type = "text", placeholder }) {
  return (
    <div className="w-full">
      <input
        className="w-full h-12 rounded-md border-2 px-3 border-blue-500 focus:outline-none focus:border-blue-800"
        type={type}
        placeholder={placeholder}
      />
    </div>
  );
}
