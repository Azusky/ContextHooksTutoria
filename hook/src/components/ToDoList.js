import { ThemeContext } from "../contexts/ThemeContext";
import { useContext, useState, useEffect } from "react";

import NewToDoForm from "./NewToDoForm";
import { ToDoContext } from "../contexts/ToDoContext";
import ToDoDetails from "./TodoDetails";
const ToDoList = () =>{

  const { isLightTheme, light, dark} = useContext(ThemeContext)
  const {todoList, addToDo} = useContext(ToDoContext)
  const theme = isLightTheme ? light : dark

  console.log(todoList,'lol')

  useEffect(() => {
    console.log(todoList)
  },[todoList])
  return (
    <div className="todo-list" style={{color:theme.syntax, background: theme.bg}}>
      { todoList.length ? <ol>{todoList.map(todo => <ToDoDetails todo={todo} theme={theme} />)}</ol> : <h4>Empty list</h4>}
      
    </div>
  )
}

export default ToDoList;
