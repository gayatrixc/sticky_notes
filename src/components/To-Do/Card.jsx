import {FaPen,FaTrash} from 'react-icons/fa'
import { useData } from "../Context/Context";
const Card=(props)=>{
    const {setData, data} = useData()
    const deleteNode=(id)=>{
        console.log("Clicked "+id)
       const notes=localStorage.getItem('notes')
       const notesArray=JSON.parse(notes)
       const newNote=notesArray.filter((note)=>note.id!==id)
       localStorage.setItem('notes',JSON.stringify(newNote))
       setData(newNote)
    }
    const updateNote=(id)=>{
        console.log("Clicked "+id)
        props.currentNoteId(id)
        props.change(true)
    }
    return(
        <div
        style={{ backgroundColor: props.color }}
        className="w-full sm:w-[300px] h-[300px] relative p-2 flex flex-col justify-center items-center"
      >
        <p className="font-Aurore absolute top-1 left-3 underline text-lg sm:text-2xl">
          {props.title}
        </p>
        <p className="font-Inter text-sm sm:text-lg relative">{props.body}</p>
        <p className="font-Aurore absolute bottom-1 right-1">{props.date}</p>
        <div className="text-xs m-auto absolute top-1 right-1 flex flex-row justify-center items-center gap-1">
          <div onClick={() => updateNote(props.id)} className="cursor-pointer">
            <FaPen />
          </div>
          <div onClick={() => deleteNode(props.id)} className="cursor-pointer">
            <FaTrash color="#EF3F3F" />
          </div>
        </div>
      </div>
    )
}
export default Card;