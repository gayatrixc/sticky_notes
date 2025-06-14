import logo from '../assets/images/to-do-logo-2.png'
import { useState,useEffect } from 'react';
const Logo=(props)=>{
    const [isDesktop,setIsDesktop]=useState(window.innerWidth>=760)
    useEffect(()=>{
        if(window.innerWidth<=760){
            setIsDesktop(false)
        }
        else{
            setIsDesktop(true)
        }
    },[isDesktop])
    return(
        <div className='flex flex-row justify-center items-center'>
            <img src={logo} alt="logo" width={isDesktop?props.width:30} height={isDesktop?props.height:30} />
            <p className='font-Karla text-xl lg:text-4xl font-bold -mx-1 lg:-mx-0'>note.fi</p>
        </div>
    )
}
export default Logo;