import "./exercici6.css"
import lizard from "./imatges/lizard.jpg"
import tigre from "./imatges/tigre.jpg"
import gos from "./imatges/gos.jpg"
import elefant from "./imatges/elefant.jpg"
import medusa from "./imatges/medusa.jpg"

function Card({ imatge, titol, text, textBoto1, linkBoto1, textBoto2, linkBoto2 }) {
  return (
    <div className="card-blanca">
      <img className="imatge" src={imatge} alt={titol} /> 
      <h1 className="titol">{titol}</h1> 
      <p className="text">{text}</p> 
      <div className="botons-links">
        <a className="link1" href={linkBoto1}>{textBoto1}</a>
        <a className="link2" href={linkBoto2}>{textBoto2}</a>
      </div>
    </div>
  );
}

export default function Exercici6() {
  return (
    <div className="area-exercici6">
      <div className="contingut">
        <Card
          titol="Lizard" 
          text="Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across all continents except Antarctica." 
          imatge={lizard}
          textBoto1="SHARE" 
          linkBoto1="#" 
          textBoto2="LEARN MORE" 
          linkBoto2="#"
        />
        <Card
          titol="Golden Retriever" 
          text="El Golden Retriever és un gos robust i musculós de mida mitjana, famós pel seu pelatge dens i daurat. És conegut per ser intel·ligent, amable i un excel·lent company per a la família."
          imatge={gos} 
          textBoto1="SHARE" 
          linkBoto1="#" 
          textBoto2="LEARN MORE" 
          linkBoto2="#"
        />
        <Card
          titol="Tigre de Bengala" 
          text="El tigre és el felí més gran del món, conegut per la seva força immensa i les seves ratlles característiques. Són caçadors solitaris i una espècie emblemàtica dels boscos i pastures de l'Àsia."
          imatge={tigre}
          textBoto1="SHARE" 
          linkBoto1="#" 
          textBoto2="LEARN MORE" 
          linkBoto2="#"
        />
        <Card
          titol="Elefant Africà" 
          text="L'elefant africà és el mamífer terrestre més gran que existeix. Són coneguts per la seva gran intel·ligència, la seva memòria prodigiosa i els seus forts vincles familiars dins de la bandada."
          imatge={elefant}
          textBoto1="SHARE" 
          linkBoto1="#" 
          textBoto2="LEARN MORE" 
          linkBoto2="#"
        />
        <Card
          titol="Medusa de Mar" 
          text="Les meduses són criatures marines fascinants que han habitat els oceans des de fa milions d'anys. No tenen cervell ni cor, i el seu cos està format majoritàriament per aigua."
          imatge={medusa}
          textBoto1="SHARE" 
          linkBoto1="#" 
          textBoto2="LEARN MORE" 
          linkBoto2="#"
        />
      </div>
    </div>
  );
}