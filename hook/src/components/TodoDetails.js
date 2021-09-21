import { useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";


const ToDoDetails = ({todo,theme}) => {
    const {dispatch} = useContext(ToDoContext)

    return (
        <li key={todo.id} style={{background:theme.ui}} onClick={()=>dispatch({type:'REMOVE_TODO',id:todo.id})}>
            <div key={todo.id} className='title'>{todo.title}</div>
        </li>
     );
}

export default ToDoDetails;
