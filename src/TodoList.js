import './TodoList.css'
function TodoList({children}){
    return(
        //Esto es porque en app TodoList esta englobando otras cosas
       <ul className="contenedorElementosLista"> 
        {children} 
      </ul>
    );
  }
  export {TodoList};