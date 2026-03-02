import {useState} from "react";
import './exercici2.css'

function Exercici2() {
    const [cercle, background, color] =useState(0)

    function incrementar() {
        if (titol.style.color == "red"){
            titol.style.color = "black"
        }
  }

    function decrementar() {
        if (cercle != "yellow") background.color = "yellow";
  }

    function reset() {
        if (comptador > 0) background.color = "green";
        else if (comptador < 0) color = "red";
        else color = "black";
  }
    
  return (

    <div className="block">
      <div className="block1">
        
        <div className="cercle">

        </div>

        <div className="select">
          <div className="descrementar">
            <button onClick={decrementar}>Decrementar</button>
          </div>

          <div className="reiniciar">
            <button onClick={reset}>Reset</button>
          </div>

          <div className="incrementar">
            <button onClick={incrementar}>Incrementar</button>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Exercici2