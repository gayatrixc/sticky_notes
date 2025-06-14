import Tags from "./Tags";
import Card from "./Card";
import {FaRegClock} from 'react-icons/fa'
import { useEffect, useState } from "react";
import {useData} from '../Context/Context'
import App from "./App";
const Home=()=>{
    const [clicked,setClicked]=useState(false)
    const {data,setData}=useData()
    const [dataCard,setDataCard]=useState()
    const [currentNoteId,setCurrentNoteId]=useState(data[0]?data[0].id:"")
    useEffect(()=>{
        setDataCard(data.map((note,idx)=><Card key={note.id} id={note.id} title={note.title}  color={note.currentColor} body={note.body} date={note.date} currentNoteId={setCurrentNoteId} change={setClicked}/>))
    },[data])
    return(
        <div className="z-[1] p-6 w-screen h-full bg-[#CFB5E2] relative">
  <div style={{ filter: clicked ? 'blur(8px)' : 'none' }}>
    <p className="font-Inter font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px]">
      Hi, what's on your mind?
    </p>
    <div className="flex flex-col sm:flex-row justify-between w-full items-center gap-3">
      <div className="flex flex-row justify-center items-center gap-2">
        <button
        className="rounded-full w-[130px] h-[30px] border-[3px] border-black text-center text-white bg-black"
        onClick={() => setClicked(true)}
      >
        Create
      </button>
      <button
        className="rounded-full w-[130px] h-[30px] border-[3px] border-black text-center text-white bg-black"
        onClick={() => {
          localStorage.clear();
          setData([]);
        }}
      >
        Clear
      </button>
      </div>
    </div>
    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-2 w-full min-h-[200px]">
        {data[0] ? dataCard : <p>Create a new Note</p>}
    </div>
  </div>
  <App Clicked={clicked} change={setClicked} currentNoteId={currentNoteId} />
</div>
    )
}
export default Home;
