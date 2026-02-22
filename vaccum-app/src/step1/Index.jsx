import Addition from "./add";
import Multiplication from "./Multiplication";
import Subtraction from "./Subtraction";

let Calculator=()=>{
    return(
        <div className="center flex items-center justify-center">
            <h1 className="text-2xl rounded-xl bg-blue-900 text-white p-3 b-3 w-1/4 center">Calculator</h1>
            <Multiplication />
            <Subtraction />
            <Addition />
        </div>
    )
}

export default Calculator;