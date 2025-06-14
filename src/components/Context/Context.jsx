import { createContext,useContext,useEffect,useState } from "react";
const dataContext=createContext(null)
export const ContextProvider=(props)=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        const notes = JSON.parse(localStorage.getItem('notes'))
        if(notes){
            setData(notes)
        }
    },[])
    return(
        <dataContext.Provider value={{
            data,
            setData
        }} >
            {props.children}
        </dataContext.Provider>
    )
}

export const useData=()=>{
    const context=useContext(dataContext)
    return context
}