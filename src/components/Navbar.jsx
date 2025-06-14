import { Link } from "react-router-dom";
import Logo from "./Logo";
const Navbar=()=>{
    return(
        <div className="flex flex-row justify-between items-center pt-2 w-screen mb-5 pr-4">
            <Link to="/"><Logo  width={70} height={50}/></Link>
             <div className="w-[212px] h-[35px] lg:w-[412px] lg:h-[69px] font-Inter text-xs lg:text-2xl flex flex-row justify-center items-center gap-4 font-semibold">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/to-do"><div className="border-[3px] border-black rounded-full w-[80px] lg:w-[150px]"><p className="text-xs text-center lg:text-xl">Get Started</p></div></Link>
            </div>
        </div>
    )
}
export default Navbar;