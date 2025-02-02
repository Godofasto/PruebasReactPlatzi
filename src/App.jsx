import { MainPage } from "./pages/MainPage";
import {SelectorPage} from "./pages/SelectorPage"
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import React from "react";



export function App(){
    const [nombre, setNombre] = React.useState('');

    return(
        <Router>
            <Routes>
                <Route path = "/" element={<SelectorPage nombre = {nombre} setNombre={setNombre}/>}></Route>
                <Route path = "/Main/Dwarves" element={<MainPage team={nombre}/>}></Route>
                <Route path = "/Main/Elves" element={<MainPage team={nombre}/>}></Route>
                <Route path = "/Main/Skavens" element={<MainPage team={nombre}/>}></Route>
            </Routes>
        </Router>
    )
}

export default App;
