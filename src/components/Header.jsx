import {header} from '../css/header.css'
import { Navigate, useNavigate } from "react-router-dom";



export function Header({tituloHeader}){
    const navigate = useNavigate();
    return(
        <div className="headerContainer">
            <button className="backButton" onClick={() => navigate("/")}></button>
            <div className='headerTitleContainer'>
                <p className="headerTitle">{tituloHeader}</p>
            </div>
        </div>
    )
}