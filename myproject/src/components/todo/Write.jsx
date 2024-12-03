import React, { useContext, useRef, useState } from "react";
import { TodoDispatch } from "../../views/TodoList1";
import useInputs from "../../hook/useInputs";

export default function Write({dataLength}){

    console.log('Write')

    const dispatch = useContext(TodoDispatch)

    const nextId = useRef(dataLength)

//    const [inputs,setInputs] = useState({
//         title:'',
//         complete:false
//    })

//    const {title,complete} = inputs

//     const onChange = (e)=> {
//         const {name,value} = e.target
//         setInputs({
//             ...inputs
//             ,[name]:value
//         })
//     }

    const [{title,complete},onChange,reset] = useInputs(
        {title:'',complete:false}
    );


    const onCreate = ()=>{
        const todo = {
            id: nextId.current
            ,title
            ,complete:false
        }
        dispatch({type:'CREATE',todo})

        // setInputs({
        //     title:''
        // })
        reset();
        nextId.current += 1
    }

    return <>
        <p>할일 : <input type="text" name="title" value={title} onChange={onChange}/>  
            <button onClick={onCreate}>등록</button>
        </p>
        
    </>

}