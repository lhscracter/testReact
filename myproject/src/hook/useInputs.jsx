import React, { useReducer, useState } from "react";


function reducer(state,action){

    switch(action.type){
        case 'CHANGE' :
            return {
                ...state,
                [action.name]:action.value
            }
        case 'RESET' :
            return Object.keys(state).reduce((acc, current)=>{
                acc[current] = '';
                return acc;
            },{})
        default :
            return state
    }

}

export default function useInputs(form){

    const [state,dispatch] = useReducer(reducer,form)

    // const [inputs,setInputs] = useState(form)

    const onChange = (e)=> {
        const {name, value} = e.target

        // setInputs({
        //     ...inputs
        //     ,[name]:value
        // })
        dispatch({type:'CHANGE',name,value})
    }

    const reset = ()=> {
        dispatch({type:'RESET'})
    }

    return [state,onChange,reset]
}