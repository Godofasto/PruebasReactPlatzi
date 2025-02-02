import {charactersRows} from '../css/charactersRows.css'
import { Counter } from '../components/Counter'



export function CharactersRows({unitsNames, maxAmmounts}){ //Aqui quiero hacer un map como en lo de los botones al principio que beba de una lista y que la info venga como props del main para no crear 3 componentes

    return(
        <div className="rowsContainer">
           
           {unitsNames.map((unit, index) => (
                    <div className='row'><span className='unitName'>{unit}</span><span className='maxQuantity'>Max Ammount: 0 - {maxAmmounts[index]}</span><span className='counter'><Counter maxAmmounts = {maxAmmounts[index]}></Counter></span></div>
                    
               ))}

        </div>
    )
}