import './TodoCounter.css';
function TodoCounter({total, completed}){
    return(
      <h1 className='textoCounter'>
        Has completado <span>{completed}</span> de {total} To Dos
      </h1>
    );
  }

  export {TodoCounter};