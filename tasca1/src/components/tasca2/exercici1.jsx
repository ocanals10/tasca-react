import { useState } from "react";
import imatge1 from "../imatges/imatge1.jpg"; 
import imatge2 from "../imatges/imatge2.jpg";
import imatge3 from "../imatges/imatge3.jpg";
import imatge4 from "../imatges/imatge4.jpg";

function Exercici1() {

    const [imatges, setImatges] = useState([imatge1, imatge2, imatge3, imatge4]);

    return (
        <div>
            {imatges.map((imatge) => {
                return (
                    <div>
                        <img src={imatge} style={{width: "180px", display: "flex", alignContent: "center"}}/>

                    </div>
                )
            })}

            
        </div>
    )
}

export default Exercici1