import React, { useState } from "react";
import { Link } from "react-router-dom";

const Square = ({ size, level }) => {
  const [isSplit, setIsSplit] = useState(false);

  const handleClick = (e) => {
    e.stopPropagation();
    setIsSplit(true);
  };

  if (isSplit) {
    return (
      <div
        className={`relative flex flex-wrap`}
        style={{
          width: size,
          height: size,
        }}
      >
        {[0, 1, 2, 3].map((index) => (
          <Square key={index} size={size / 2} level={level + 1} />
        ))}
      </div>
    );
  }

  return (
    <div
      onClick={handleClick}
      className={`border border-black bg-gray-100 hover:bg-gray-300 transition`}
      style={{
        width: size,
        height: size,
      }}
    ></div>
  );
};

const BoxClick = () => {
  return (
    <>
      <div className="text-center">
        <button className="bg-slate-400 rounded-md px-2 py-1">
          <Link to={"/"}>go back to home</Link>
        </button>
      </div>
      <h1 className="text-center text-3xl font-bold">Box Split</h1>
      <div className="flex justify-center items-center h-screen">
        {/* Initial Square */}
        <Square size={400} level={0} />
      </div>
    </>
  );
};

export default BoxClick;
