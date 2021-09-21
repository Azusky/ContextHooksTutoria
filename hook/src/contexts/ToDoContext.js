import React, {createContext, useReducer, useEffect} from 'react'

import { todoReducer } from '../reducers/todoReducer';


export const ToDoContext = createContext()

const ToDoContextProvider = (props) => {
    const [todoList, dispatch] = useReducer(todoReducer,[], ()=>{
        const localData = localStorage.getItem('todoList')
        return localData ? JSON.parse(localData):[]
    })
    useEffect(()=>{
        localStorage.setItem('todoList', JSON.stringify(todoList))
    },[todoList])
    return (
        <ToDoContext.Provider value={{todoList, dispatch}}>
            {props.children}
        </ToDoContext.Provider>
    );
}

export default ToDoContextProvider;
