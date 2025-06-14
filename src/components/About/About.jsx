import About1 from '../../assets/images/About-1.png'
import About2 from '../../assets/images/About-2.png'
import About3 from '../../assets/images/About-3.png'
import './About.css'
const About=()=>{
    return(
        <div className="slide-in-fwd-center flex flex-col justify-center items-center w-screen relative top-0 font-bold contain">
            <div className="font-Inter text-xs border-y-[4px] border-black lg:text-2xl tran bg-[#F9851C] w-full text-left h-[300px] bg-left bg-no-repeat bg-contain p-4" style={{backgroundImage:`url(${About1})`}}>
                <p className="w-1/2 float-right">At note.fi, we believe in helping our users to stay organized and on top of their daily tasks. We understand that life can be overwhelming, and it's easy to forget things or lose track of what you need to do. That's why we created note.fi, to make it easy for you to keep track of everything you need to do and all the information you need to remember.
                </p>
            </div>
            <div className="font-Inter text-xs lg:text-2xl border-b-[4px] border-black bg-[#EF3F3F] w-full text-left h-[300px] bg-right bg-no-repeat bg-contain p-4" style={{backgroundImage:`url(${About2})`}}>
                <p className="w-1/2 float-left">Our mission is to help you stay productive, reduce stress, and focus on what really matters. We believe that everyone should have access to an easy-to-use, intuitive tool that helps them manage their lives more effectively. That's why we created note.fi, a web app that's simple, yet powerful enough to keep up with your busy life.
                </p>
            </div>
            <div className="font-Inter text-xs  border-b-[4px] border-black lg:text-2xl bg-[#14AF6C] w-full text-left h-[300px] bg-left bg-no-repeat bg-contain p-4" style={{backgroundImage:`url(${About3})`}}>
                <p className="w-1/2 float-right">With note.fi, you can create unlimited to-do lists, set reminders, and even share your lists with others. Our app makes it easy to prioritize tasks, mark them as complete, and even set up recurring tasks so that you don't have to remember to do them over and over again.</p>
            </div>
            <div className='w-full bg-[#104FC1] border-b-[4px] border-black'>
                <p className='font-Karla text-center text-xl lg:text-2xl pt-6 font-semibold h-[100px]'>Thank you for choosing note.fi</p>
            </div>
        </div>
    )
}
export default About;