import { useState,useEffect } from "react";
import {nanoid} from "nanoid"
import {FaWindowClose,FaRegMinusSquare,FaRegWindowRestore,FaSave,FaArrowRight,FaArrowLeft} from 'react-icons/fa'
import { useData } from "../Context/Context";
const App=(props)=>{
    const colorTheme=["#F7CE21","#14AF6C","#104FC1","#F9851C","#CFB5E2","#FFC0C0"]
    const [currentColor,setCurrentColor]=useState("#14AF6C")
    const [arrowClicked,setArrowClicked]=useState(0)
    const {setData, data} = useData()
    const [body,setBody]=useState("")
    const [title,setTitle]=useState("")
    let notes=data

    const createNewNote=()=>{
        const newNote={id:nanoid(),title:title,body:body,date:new Date().toLocaleDateString(),currentColor:currentColor}
        notes=[newNote,...notes]
        localStorage.setItem('notes',JSON.stringify(notes))
        setData(notes)
    }

    const saveNote=()=>{
        const currentNote=data.filter((note)=>note.id===props.currentNoteId)
        console.log(currentNote)
        currentNote[0].title=title
        currentNote[0].body=body
        currentNote[0].currentColor=currentColor
        let Notes=data.filter((note)=>note.id!==props.currentNoteId)
        Notes=[currentNote[0],...Notes]
        localStorage.setItem('notes',JSON.stringify(Notes))
        setData(Notes)
        setTitle("Untitled")
        setBody("")
        props.change(false)
    }
    useEffect(()=>{
        let counter=arrowClicked
        if(arrowClicked<0){
            counter=0
        }
        else if(arrowClicked>colorTheme.length-1){
            counter=colorTheme.length-1
        }
        setCurrentColor(colorTheme[counter])
    },[arrowClicked])

    return(
        <div
  className="z-10 absolute top-4 p-4 left-1/2 transform -translate-x-1/2 rounded-lg border-[5px] border-black w-full sm:w-[350px] h-[300px]"
  style={{ display: props.Clicked ? 'block' : 'none', backgroundColor: currentColor }}
>
  <div className="text-lg flex flex-row justify-start items-center gap-1 absolute top-0 right-1">
    <FaRegMinusSquare />
    <FaRegWindowRestore />
    <div onClick={() => props.change(false)}>
      <FaWindowClose color="#EF3F3F" />
    </div>
  </div>
  <div className="flex flex-row justify-center items-center gap-2 mb-2">
    <div onClick={() => setArrowClicked(arrowClicked - 1)}>
      <FaArrowLeft />
    </div>
    <p className="font-Inter text-xl text-center">{currentColor}</p>
    <div onClick={() => setArrowClicked(arrowClicked + 1)}>
      <FaArrowRight />
    </div>
  </div>
  <div className="p-4 flex flex-col justify-center items-start bg-white rounded-lg m-auto w-full gap-2">
    <form>
      <input
        name="title"
        placeholder="Title"
        type="text"
        className="outline-none w-full h-full text-xl font-Inter"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        style={{ resize: 'none' }}
        name="body"
        className="w-full h-full font-Inter outline-none"
        value={body}
        onChange={(e) => setBody(e.target.value)}
      />
    </form>
    <button
      onClick={() => {
        createNewNote();
        saveNote();
      }}
    >
      <FaSave />
    </button>
  </div>
</div>
    )
}
export default App;