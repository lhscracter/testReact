import axios from "axios";
import React, { useCallback, useReducer, useRef } from "react";


const initialState = {
    inputs : {
        username : '',
        email : ''
    },
    userList : [
        {id: 1,username: 'test',email : 'test@test.com'}
        ,{id: 2,username: 'test1',email : 'test1@test.com'}
    ]
}

function reducer(state, action){

    switch(action.type){
        case 'CHANGE_INPUT' :
            return {
                ...state
                ,inputs:{
                    ...state.inputs
                    ,[action.name] :action.value
                }
            };
        case 'CREATE_INPUT' :
            return {
                inputs: initialState.inputs
                ,userList : state.userList.concat(action.user)
            };
        case 'REMOVE' :
            return {
                inputs : initialState.inputs
                ,userList: state.userList.filter(user => user.id !== action.id)
            }
        case 'DATASET' :
            return {
                inputs : initialState.inputs
                ,userList : action.users
            }
        default : 
            return state
    }
}

export default function HelloReact(){

    const isLogin = 'test2'

    const arrTest = ['1','2','3']

    const arrObTest = ['Apple','Banana','Cherry']

    const [state,dispatch] = useReducer(reducer, initialState)

    const {username, email} = state.inputs

    const onChange = (e) => {
        const {name, value} = e.target
        dispatch({type:'CHANGE_INPUT',name,value})
    }

    const nextId = useRef(3)

    const onCreate = useCallback(() => {

        dispatch(
            {type:'CREATE_INPUT'
            ,user:{
                id:nextId.current
                ,username
                ,email
                }
            }
        )

        nextId.current += 1;
    },[username, email])

    const onRemove = (id) => {
        dispatch({type:"REMOVE",id})
    }

    const dataCall = () => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
            console.log(res.data)
            dispatch({type:'DATASET',users:res.data})
        })
    }

    return (
        <>
            <h1>Hello React</h1>
            {isLogin ? <h1>True Text</h1> : <h1>False Text</h1>}

            {isLogin  == 'test1' ? <h1>true</h1> :
             isLogin == 'test2' ?<h1>false</h1> :
             <h1>test3</h1>}

            {arrObTest.map(obj =>(<p>{obj}</p>))}

            username : <input type="text" name = "username" value={username} onChange={onChange}/>
            <br/>email : <input type="text" name = "email" value={email} onChange={onChange}/>
            <button onClick={onCreate}>등록</button>
            <button onClick={dataCall}>데이터통신</button>


            {state.userList.length > 0  && <h2>UserList On</h2>}
            {state.userList.length > 0  ? state.userList.map(user => (
                <li>
                    {user.username} : {user.email}
                    <button onClick={()=> onRemove(user.id)}>삭제</button>
                </li>
            ))
            : <p>no Data</p>
            }
        </>
    )
}