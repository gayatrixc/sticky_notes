import { Link } from "react-router-dom";
import { FaInstagram,FaGithub,FaTwitter,FaFacebookF,FaLinkedinIn } from "react-icons/fa";
import Logo from "./Logo";
const Footer=()=>{
    return(
        <div className="z-10 bg-[#F7CE21] flex flex-col justify-center items-center lg:pt-6 gap-3 w-screen h-[150px] lg:h-auto relative bottom-0">
        <div className="flex flex-row justify-between items-start gap-1 font-Inter text-xs lg:text-lg w-full">
          <Logo className="w-16 sm:w-20 md:w-24 lg:w-28" height={50} />
          <div className="flex flex-col justify-start items-start gap-1 m-auto">
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/to-do">Get Started</Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-1 m-auto">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <Link to="/terms-condition">Terms and Condition</Link>
          </div>
          <div className="flex flex-col justify-start items-start gap-1 m-auto">
            <p>Contact Us</p>
            <a href="mailto:care@note.fi">E-mail: care@note.fi</a>
            <p>Ph:1800-616-350</p>
          </div>
        </div>
        <div className="relative bottom-0 flex flex-row justify-center items-center text-xl text-black gap-8">
          <FaInstagram />
          <FaFacebookF />
          <FaTwitter />
          <FaLinkedinIn />
          <FaGithub />
        </div>
      </div>
    )
}
export default Footer;