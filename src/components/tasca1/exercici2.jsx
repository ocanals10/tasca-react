import { useState } from "react";

function Exercici2() {
  const [color, setColor] = useState("grey");

  const cercleStyle = {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    backgroundColor: color, 
    margin: "20px auto",
    border: "2px solid #333",
    transition: "background-color 0.3s ease" 
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Canviador de Colors</h2>
      
      <div style={cercleStyle}></div>

      <div className="buttons">
        <button onClick={() => setColor("red")}>Vermell</button>
        <button onClick={() => setColor("blue")}>Blau</button>
        <button onClick={() => setColor("green")}>Verd</button>
      </div>
    </div>
  );
}

export default Exercici2;