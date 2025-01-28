import './TodoItem.css'
function TodoItem({text, completed}){
    return(     
      <li className="objetoLista">
        <span className={`Icon Icon-check  ${completed && "Icon-check-active"}`}>V</span>
        <p>{text}</p>
        <span>X</span>
      </li>
    );
  }

  export {TodoItem};