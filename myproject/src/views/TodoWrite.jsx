import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function TodoWrite(){

    const navigate = useNavigate();

    const [title,setTitle] = useState('testTItle')

    const onChage = (e)=> {
        const {name,value} = e.target
        setTitle(value)
    }

    const onCreate = ()=> {
        alert('등록')
        navigate('/todo')
        
    }

    
    return <>
        <h1>Todo Write </h1>
        <div>
            title : <input type="text" name="title" value={title} onChange={onChage}/>
            <button onClick={onCreate}>등록</button>
            <button onClick={onCreate}>등록</button>
        </div>
    </>
}