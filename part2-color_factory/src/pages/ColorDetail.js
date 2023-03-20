import React from "react";
import { useParams, Link } from "react-router-dom";
import "../ColorDetail.css";

const ColorDetail = () => {
  const { color, hex } = useParams();

  return (
    <div className="ColorDetail" style={{ backgroundColor: `#${hex}` }}>
      <h2>THIS IS {color.toUpperCase()}</h2>
      <h2>ISN'T IT BEAUTIFUL?</h2>
      <Link to="/colors">GO BACK</Link>
    </div>
  );
};

export default ColorDetail;
