import { useState } from "react";
import imatge1 from "../imatges/imatge1.jpg"; 
import imatge2 from "../imatges/imatge2.jpg";
import imatge3 from "../imatges/imatge3.jpg";
import imatge4 from "../imatges/imatge4.jpg";

function Exercici5() {

    const imatges = [imatge1, imatge2, imatge3, imatge4]

    const [index, setIndex] = useState(0)

    const seguent = () => {
        setIndex((index + 1) % imatges.length)
    }

    const anterior = () => {
        setIndex((index - 1 + imatges.length) % imatges.length)
    }

    return (
        <div style={{display:"flex", alignItems:"center", gap:"20px"}}>

            <button onClick={anterior}>⬅</button>

            <img src={imatges[index]} style={{width:"300px"}} />

            <button onClick={seguent}>➡</button>

        </div>
    )
}

export default Exercici5