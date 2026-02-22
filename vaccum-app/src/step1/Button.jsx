let Button=({label, fn})=>{
    return(
        <button className="border-1 bg-green-900 hover:bg-blue-900 shadow-md text-2xl m-2 p-2 text-white mx-auto" onClick={()=>fn()}>{label}</button>
    )
    
}

export default Button;