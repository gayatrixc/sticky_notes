import Error404 from '../assets/images/404.png'
const Error=()=>{
    const styles={
        backgroundImage:`url(${Error404})`,
        backgroundSize:'contain',
        backgroundPosition:'center',
        backgroundRepeat:'no-repeat'
    }
    return(
        <div className='text-center flex flex-col justify-center items-center'>
            <h1 className='font-Inter text-2xl lg:text-2xl font-bold'>Oops!</h1>
            <h2 className='font-Inter text-xl lg:text-3xl'>Page Not Found</h2>
            <div style={styles} className=" w-[300px] h-[300px] lg:w-[450px] lg:h-[450px]"></div>
        </div>
    )
}
export default Error;