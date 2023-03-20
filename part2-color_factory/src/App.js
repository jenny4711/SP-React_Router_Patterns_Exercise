import "./App.css";
import { useState } from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Colors from "./pages/Colors";

import ColorDetail from "./pages/ColorDetail";
import AddColor from "./pages/AddColor";
import { v4 as uuid } from "uuid";

function App() {
  const COLORLIST = [
    { id: uuid(), color: "pink", hex: "#f6bbbb" },
    { id: uuid(), color: "orange", hex: "#f5a623" },
  ];
  const [colorList, setColorList] = useState(COLORLIST);

  const addColor = (newColor) => {
    setColorList((colorList) => [...colorList, { ...newColor, id: uuid() }]);
  };

  return (
    <div className="App">
      <Routes>
        <Route path="/colors" element={<Colors colorList={colorList} />} />
        <Route path="/addcolor" element={<AddColor addColor={addColor} />} />
        <Route path="/colors/:color/:hex" element={<ColorDetail />} />
        <Route path="/*" element={<Navigate to="/colors" />} />
      </Routes>
    </div>
  );
}

export default App;
