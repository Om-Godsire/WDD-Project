import Button from "./Button";


let Subtraction=()=>{
    let subtraction_click = () => {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            alert(num1 - num2);
        }
    return(
        <>
        <Button label="Subtraction" fn={subtraction_click} />
        </>
    )
    }


export default Subtraction;