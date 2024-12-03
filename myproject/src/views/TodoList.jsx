import React, { useReducer } from "react";
import { Navigate, useNavigate } from "react-router-dom";

const initialTodo = {
    todoList :[
        {id:1, title:'testTitle', completed:false}
        ,{id:2, title:'testTitle1', completed:false}
    ]
}

function reducer(state, action){
    return state;
}

export default function TodoList(){

    const navigate = useNavigate()

    const [state,dispatch] = useReducer(reducer,initialTodo)

    const onWrite = () => {
        navigate('/write')
    }

    return <>
        <h1>Hello TodoList</h1>
        <ol>
            {state.todoList.map(todo => (
                <li>{todo.title}</li>
            ))}
        </ol>
        <button onClick={onWrite}>글쓰기</button>
    </>
}