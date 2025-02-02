import {selectorPage} from "../css/selectorPage.css"
import { Navigate, useNavigate } from "react-router-dom";

export function SelectorPage({nombre, setNombre}){
    const opciones = ["Dwarves", "Elves", "Skavens"];
    const navigate = useNavigate();

    return(
        <div className="conContainer">
            <div className="containerSelector">
               {opciones.map((opcion) => (
                    <button key={opcion} className={`selectorButton selectorButton-${opcion}`} onClick={() => {setNombre(opcion); navigate(`/Main/${opcion}`)}}><span className="textoBoton">{opcion}</span></button>
                    
               ))}
               
            </div>
        </div>
        
    )
}