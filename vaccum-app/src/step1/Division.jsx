import Button from "./Button";


let Division = () => {

    
        let division_click = () => {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            alert(num1 / num2);
        }
    return(
        <>
        <Button label="Division" fn={division_click} />  
        </>
    )

}

export default Division;