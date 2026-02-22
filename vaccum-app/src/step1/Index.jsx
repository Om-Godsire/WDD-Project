import Multiplication from "./Multiplication";

let Calculator=()=>{
    return(
        <div className="center flex items-center justify-center">
            <h1 className="text-2xl rounded-xl bg-blue-900 text-white p-3 b-3 w-1/4 center">Calculator</h1>
            <Multiplication />
        </div>
    )
}

export default Calculator;