import {mainPage} from "../css/mainPage.css"
import {Header} from "../components/Header"
import { CharactersRows } from "../components/CharactersRows"

export function MainPage({team}){
    let unitsNames = [];
    let maxAmmounts = [];
    if(team === 'Dwarves'){
        unitsNames = ['Dwarf Linemen', 'Dwarf Blitzer', 'Troll Slayer', 'Death Roller']
    }else if(team === 'Elves'){
        unitsNames = ['Wood Elf Lineman', 'Forest Treeman', 'Wardancer']
    }else if(team === 'Skavens'){
        unitsNames = ['Skaven Linemen', 'Skaven Blitzer', 'Skaven Thrower', 'Gutter Runner', 'Rat Ogre']
    }

    if(team === 'Dwarves'){
        maxAmmounts = [12,2,1,1]
    }else if(team === 'Elves'){
        maxAmmounts = [12,1,2]
    }else if(team === 'Skavens'){
        maxAmmounts = [12, 4, 2, 2, 1]
    }

    return(
        <>
        <Header tituloHeader={team}/>
        <div className="mainPage">
            <CharactersRows unitsNames = {unitsNames} maxAmmounts = {maxAmmounts}></CharactersRows>
        </div>
        </>
    )
} 

