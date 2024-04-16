import { useState } from "react";

function ColorGenerator() {
  const [color, setColor] = useState("#000000");
  const [choiceColor, setChoiceColor] = useState("hex");

  ///Randome Color generator

  const randomeColor = (length) => {
    return Math.floor(Math.random() * length);
  };

  const colorGenerator = () => {
    if (choiceColor === "hex") {
      const char = [
        "A",
        "B",
        "C",
        "D",
        "F",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "A",
        "B",
        "C",
        "D",
        "F",
        "0",
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
      ];
      let hexColor = "#";

      for (let i = 0; i < 6; i++) {
        hexColor += char[randomeColor(char.length)];
      }

      setColor(hexColor);
      console.log(hexColor);
    } else {
      const r = Math.floor(Math.random() * 256);
      const g = Math.floor(Math.random() * 256);
      const b = Math.floor(Math.random() * 256);

      setColor(`rgb(${r},${g},${b})`);
      console.log(typeof `rgb(${r}, ${g}, ${b})`);
    }
  };
  console.log(color);
  return (
    <>
      <div className="h-screen" style={{ background: color }}>
        <div className="flex gap-10 justify-center my-10">
          <button onClick={() => setChoiceColor("hex")} className="btn">
            Hex color
          </button>
          <button onClick={() => setChoiceColor("rgb")} className="btn">
            Rgb color
          </button>
          <button onClick={colorGenerator} className="btn">
            Generator Random color
          </button>
        </div>
        <div>
          <div className="flex justify-center mt-20">
            <p className="text-3xl font-bold text-white ">{color}</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default ColorGenerator;
