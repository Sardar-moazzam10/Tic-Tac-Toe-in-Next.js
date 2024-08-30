import React from "react";

const Square = ({ value, onClick }) => {
  return (
    <button
      className="boxes w-36 h-36 text-2xl cursor-pointer "
      onClick={onClick}
    >
      {value}
    </button>
  );
};

export default Square;
