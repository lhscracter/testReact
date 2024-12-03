import React, { useEffect, useReducer, useRef } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import List from "../components/todo/List";
import Write from "../components/todo/Write";
import axios from "axios";

const initialTodo = {
    todoList :[ ]
}

export const TodoDispatch = React.createContext(null)

function reducer(state, action){

    switch(action.type){
        case 'CREATE' :
            return {
                todoList : state.todoList.concat(action.todo)
            }
        case 'REMOVE' :
            return {
                ...state
                ,todoList: state.todoList.filter(todo => todo.id !== action.id)
            }
        case 'TOGGLE' :
            return {
                ...state
                ,todoList: state.todoList.map(todo=> todo.id === action.id ? {...todo,complete: !todo.complete}:todo )
            }
        case 'AXIOSCALL' :
            return {
                ...state
                ,todoList : action.data
            }
        default :     
            return state;
    }

}

export default function TodoList1(){

    console.log('TodoList')

    const [state,dispatch] = useReducer(reducer,initialTodo)

    const {todoList} = state

    useEffect(() =>{
        const axiosCall = async() => {
                const getData = await axios.get('https://jsonplaceholder.typicode.com/todos')
                return getData.data
            }
        
            axiosCall().then(res => dispatch({type:'AXIOSCALL',data:res}))
        },[] 
    )

    // const onChange = (e)=> {
    //     const {name,value} = e.target
    //     dispatch({type:"CHANGE",name,value})
    // }

    // const nextId = useRef(3)

    // const onCreate = ()=> {
    //     const todo = {
    //         id:nextId.current
    //         ,title
    //         ,completed:false
    //     }
    //     dispatch({type:'CREATE', todo})

    //     nextId.current += 1
    // }

    // const onRemove = (id) =>{
    //     dispatch({type:'REMOVE', id})
    // }

    // const onToggle = (id)=>  {
    //     dispatch({type:'TOGGLE', id})
    // }

    return <>
        <h1>Hello TodoList</h1>
        <TodoDispatch.Provider value={dispatch}>
            <Write dataLength = {todoList.length}/>
            <List todoList = {todoList} />
        </TodoDispatch.Provider>
    </>
}