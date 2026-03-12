import { useState } from "react";

function Exercici3() {
  // 1. Definim els estats per a cada estil
  const [isBold, setIsBold] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  const [isUnderlined, setIsUnderlined] = useState(false);

  // 2. Creem un objecte d'estils que depèn de l'estat
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

      {/* El text que canvia segons els estats */}
      <p style={textStyle}>Lorem Ipsum</p>

      <div className="buttons">
        {/* En fer clic, invertim l'estat actual amb l'operador NOT (!) */}
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