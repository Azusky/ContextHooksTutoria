import { useState, useContext } from "react";
import { ToDoContext } from "../contexts/ToDoContext";


const NewToDoForm = () => {
    const {dispatch} = useContext(ToDoContext)
    const [title, setTitle] = useState('')
    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch({type: 'ADD_TODO', todo:{title}})
        setTitle('')
    }
    return (
        <form onSubmit={handleSubmit}>
            <label>TO DO </label>
            <input type="text" value={title} required onChange={(e)=>{setTitle(e.target.value)}}/>
            <input type="submit" value='ADD'/>
        </form>
    );
}

export default NewToDoForm;
