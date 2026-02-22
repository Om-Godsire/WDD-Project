import Button from "./Button";
let Addition= () => {

        let additon_click = () => {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            alert(num1 + num2);
        }
    return(
        <>
            <Button label="Addition" fn={additon_click} /> 
        </>
    )
    }


export default Addition;