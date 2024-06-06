import React from "react";
import { useState } from "react";
import Slider from "./Slider";

function RGBPanel(){
  const panelCSS = {
    display: "flex",
    flexDirection: "column",
    border: "1px solid black",
    borderRadius: "10px",
    width: "300px",
    padding: "30px",
    margin: "auto",
    justifyContent: "center"
  };
  const [r, setR] = useState(128);
  const [g, setG] = useState(128);
  const [b, setB] = useState(128);

  const updateR = (c) => setR(c);
  const updateG = (c) => setG(c);
  const updateB = (c) => setB(c);
    return(
        <>
        <div style={panelCSS}>
        <h3>RGBPanel 元件</h3>
          <div
          style={{ 
          backgroundColor: `rgb(${r}, ${g}, ${b})`,
          width: "200px", 
          height: "100px",
        }}
          />
        <Slider label="RED" onChange={updateR}/>
        <Slider label="GREEN" onChange={updateG}/>
        <Slider label="BLUE" onChange={updateB}/>
        </div>
        </>
    );
}

export default RGBPanel;