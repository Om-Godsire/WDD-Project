import Button from "./Button";


let Subtraction=()=>{
    let subtraction_click = (num1,num2) => {

            alert(num1 - num2);
        }
    return(
        <>
        <Button label="Subtraction" fn={subtraction_click} />
        </>
    )
    }


export default Subtraction;