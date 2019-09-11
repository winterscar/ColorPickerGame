import React, { useState } from "react";
import ReactDOM from "react-dom";
import { CirclePicker } from "react-color";
import GetRandomColor from "./colors";

import "./styles.css";

const ColorCircle = ({ color, click }) => (
  <div
    style={{
      backgroundColor: color,
      width: "30px",
      height: "30px",
      borderRadius: "100%",
      cursor: "Pointer",
      margin: "5px"
    }}
    onClick={click}
  />
);

const NumberOfColors = 21;

const MakeColors = cols =>
  Array(cols)
    .fill(0)
    .map(x => GetRandomColor(x));

const DidWin = (correctIndex, thisIndex) => {
  if (correctIndex === thisIndex) alert("you won!");
};

const GetWinningColor = () => {
  let min = Math.ceil(0);
  let max = Math.floor(NumberOfColors);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

let colorsStyle = {
  display: "flex",
  flexWrap: "wrap",
  width: "300px"
};

let colorContainer = {
  display: "flex",
  justifyContent: "center",
  width: "100%"
};

function App() {
  const [colors, setColors] = useState(MakeColors(NumberOfColors));
  const [winningColor, setWinner] = useState(GetWinningColor);

  return (
    <div className="App">
      <h2>What color is this?</h2>
      <h1>{colors[winningColor]}</h1>
      <div style={colorContainer}>
        <div style={colorsStyle}>
          {colors.map((c, i) => (
            <ColorCircle
              index={i}
              color={c}
              click={() => {
                DidWin(winningColor, i);
                setColors(MakeColors(NumberOfColors));
                setWinner(GetWinningColor());
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
