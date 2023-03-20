import React, { useState } from "react";
import "../AddColor.css";
import { useNavigate,Link } from "react-router-dom";
import { v4 as uuid } from "uuid";


const AddColor = ({ addColor }) => {
  const SAMPLECOLOR = { id: uuid(), color: "", hex: "#bcbcbc" };
  const [color, setColor] = useState(SAMPLECOLOR);
  const navigate = useNavigate();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setColor((color) => ({
      ...color,
      [name]: value,
    }));

    console.log(evt.target.value);
  };
  const handleSubmit = (evt) => {
    evt.preventDefault();

    addColor({ ...color });
    setColor(SAMPLECOLOR);
    navigate("/colors");
    console.log(color);
  };

  return (
    // <div className="AddColor">
      <div className="AddColor-cont" style={{ backgroundColor: color.hex }}>
        <form className='AddColor-form' onSubmit={handleSubmit}>
          <label htmlFor="color">Color name: </label>
          <input type="text" name="color" onChange={handleChange} />
          <input type="color" name="hex" onChange={handleChange} />
          <button>Open color picker</button>
        </form>
      </div>
    // </div>
  );
};

export default AddColor;
