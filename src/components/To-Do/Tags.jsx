const Tags=(props)=>{
    const styles={
        backgroundColor:props.active?'black':'transparent',
        color:props.active?'white':'black'
    }
    return(
        <button className="rounded-full w-[130px] h-[30px] border-[3px] border-black text-center" style={styles}>{props.tag}</button>
    )
}
export default Tags;