import Addition from "./Addition";
import Division from "./Division";
import Multiplication from "./Multiplication";
import Subtraction from "./Subtraction";

let Calculator=()=>{
    return(
        <div className="flex flex-col item-center justify-center">
            <div className="flex item-center justify-center">
                <h1 className="text-2xl rounded-xl bg-blue-900 text-white p-3 b-3 m-4 w-1/4 item-center center flex justify-center">Calculator</h1>
            </div>
            <div className="flex flex-col md:flex-row item-center justify-center">
                <input id="num1" type="text" className="border-2 border-gray-300 rounded-lg p-2 m-3 w-1/4 center" placeholder="Enter a number"/>
                <input id="num2" type="text" className="border-2 border-gray-300 rounded-lg p-2 m-3 w-1/4 center" placeholder="Enter a number"/>
            </div>
            <Multiplication />
            <Subtraction />
            <Addition />
            <Division />
        </div>
        

        
    )
}

export default Calculator;