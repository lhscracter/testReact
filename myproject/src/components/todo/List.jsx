import React, { useContext } from "react";
import {TodoDispatch} from "../../views/TodoList1";

export default function List({todoList}){

    console.log('List')

    const dispatch = useContext(TodoDispatch)

    return <>
        {todoList.length > 0 ?
            todoList.map(todo => (
                <li key={todo.id}><b style={{cursor:'pointer',
                    color:todo.complete ? 'blue':'black'}}
                    onClick={()=>{dispatch({type:'TOGGLE',id:todo.id})}}>
                        {todo.title} {todo.id}
                    </b>
                    {todo.complete || <button onClick={()=> {dispatch({type:'REMOVE',id:todo.id})}}>삭제</button>}
                    
                </li>
            ))
            :<p>no List</p>
        }
    </>
}