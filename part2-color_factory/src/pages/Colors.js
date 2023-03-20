import React, { useState } from "react";
import { v4 as uuid } from "uuid";
import { Link } from "react-router-dom";
import "../Color.css";

const Colors = ({ colorList }) => {
  console.log(colorList);
  const link = colorList.map((color) => {
    let rmHex = color.hex;
    let rmCode = rmHex.replace("#", "");
    return (
      <li key={color.id}>
        <Link to={`/colors/${color.color}/${rmCode}`}>{color.color}</Link>
      </li>
    );
  });

  return (
    <div>
      <nav>
        <h2>Welcome to the color factory.</h2>
        <h1>
          <Link to="/addcolor">ADD A COLOR</Link>
        </h1>
      </nav>
      <div className="addcolor-list">
        <h2>Please Select a Color</h2>
        <ul>{link}</ul>
      </div>
    </div>
  );
};

export default Colors;
