import {useState} from "react";
import './exercici1.css'

function Exercici1() {
    const [comptador, setcomptador] =useState(0)

    function incrementar() {
        setcomptador(comptador + 1)
  }

    function decrementar() {
        setcomptador(comptador - 1)
  }

    function reset() {
        setcomptador(0)
  }
    
  return (

    <div className="block">
      <div className="block1">
        <div className="comptador_txt">
          <p>Comptador Interactiu</p>
        </div>

        <div className="comptador">
          <div className="comptador_num">
            <span id="number" style={{ color: "black" }}>{comptador}</span>
          </div>
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

export default Exercici1