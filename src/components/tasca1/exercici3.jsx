import { useState } from "react";

function Exercici3() {
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);

  const textStyle = {
    fontWeight: isBold ? "bold" : "normal",
    fontStyle: isItalic ? "italic" : "normal",
    textDecoration: isUnderlined ? "underline" : "none",
    fontSize: "24px",
    margin: "20px 0"
  };

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>Formatador de Text</h2>

      <p style={textStyle}>Lorem Ipsum</p>

      <div className="buttons">
        <button onClick={() => setIsBold(!isBold)}>
          {isBold ? "Treure Negreta" : "Negreta"}
        </button>

        <button onClick={() => setIsItalic(!isItalic)}>
          {isItalic ? "Treure Cursiva" : "Cursiva"}
        </button>

        <button onClick={() => setIsUnderlined(!isUnderlined)}>
          {isUnderlined ? "Treure Subratllat" : "Subratllat"}
        </button>
      </div>
    </div>
  );
}

export default Exercici3;