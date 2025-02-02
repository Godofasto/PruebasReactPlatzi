import {counter} from '../css/counter.css'
import { useState } from 'react';

export function Counter({maxAmmounts}){
    
    const [contador, setContador] = useState(0);

    function sumar(){
        if(contador < maxAmmounts){
            setContador(contador + 1);
        }else{
            console.log('limite alcanzado');
        }
    }

    function restar(){
        if(contador > 0){
            setContador(contador - 1);
        }else{
            console.log('limite alcanzado');
        }
    }

    return(
        <div className="counterContainer">
            <button className='plusle' onClick={() => sumar()}></button>
            <div className='counterNumber'>{contador}</div>
            <button className='minum' onClick={() => restar()}></button>
        </div>
    )
}