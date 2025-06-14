import Hero from '../../assets/images/Hero-desktop.png'
import HeroMobile from '../../assets/images/Hero-mobile.png'
import { FaArrowRight,FaWindowClose,FaRegMinusSquare,FaRegWindowRestore } from "react-icons/fa";
import { Link } from 'react-router-dom';
import About1 from '../../assets/images/About-1.png'
import About2 from '../../assets/images/About-2.png'
import About3 from '../../assets/images/About-3.png'
import './Home.css'
const Home=()=>{
    return (
        <div className="slide-in-fwd-center flex flex-col justify-center items-center gap-3 w-screen h-auto p-2 lg:bg-white bg-[#88CFE8]">
            <div className='font-Karla flex flex-col justify-center items-center gap-6'>
                <p className='text-focus-in text-3xl lg:text-[64px] font-bold text-center'>We're glad you're here!</p>
                <Link to="/to-do">
                <button className='relative m-auto rounded-full bg-[#F7CE21] border-[3px] border-black text-3xl px-6 flex flex-row justify-center items-center gap-1'>Get Started <FaArrowRight /></button>
                </Link>
                </div>
                <img src={Hero} alt="Hero" className='m-auto w-1/2' />
            <div className='flex flex-row w-full justify-center items-center gap-2 p-2'>
                <div className=' border-[3px] border-black p-3 relative'>
                    <img src={About1} alt="About" width={300} height={250} />
                    <p className='font-Karla font-medium text-xl w-1/2'>Take a note down quickly</p>
                    <div className="text-lg flex flex-row justify-start items-center gap-1 absolute top-0 right-1">
                <FaRegMinusSquare/>
                <FaRegWindowRestore/>
                <FaWindowClose color='#EF3F3F'/>
            </div>
                </div>
                <div className=' border-[3px] border-black p-3 relative'>
                    <img src={About2} alt="About" width={350} height={350} />
                    <p className='font-Karla font-medium text-xl w-1/2'>Store important converstions</p>
                    <div className="text-lg flex flex-row justify-start items-center gap-1 absolute top-0 right-1">
                <FaRegMinusSquare/>
                <FaRegWindowRestore/>
                <FaWindowClose color='#EF3F3F'/>
                </div>
                </div>
                <div className=' border-[3px] border-black p-3 relative'>
                    <img src={About3} alt="About" width={300} height={250} />
                    <p className='font-Karla font-medium text-xl w-1/2'>Always stay on the go</p>
                    <div className="text-lg flex flex-row justify-start items-center gap-1 absolute top-0 right-1">
                <FaRegMinusSquare/>
                <FaRegWindowRestore/>
                <FaWindowClose color='#EF3F3F'/>
                </div>
                </div>
            </div>
        </div>
    )    
}
export default Home;