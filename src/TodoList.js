function TodoList({children}){
    return(
        //Esto es porque en app TodoList esta englobando otras cosas
       <ul> 
        {children} 
      </ul>
    );
  }
  export {TodoList};