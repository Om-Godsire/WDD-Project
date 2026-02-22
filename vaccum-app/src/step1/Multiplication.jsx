let Multiplication = () => {

    
        let additon_click = () => {
            let num1 = parseFloat(document.getElementById("num1").value);
            let num2 = parseFloat(document.getElementById("num2").value);
            alert(num1 * num2);
        }
    return(
        <>
            <button className="border-1 bg-green-900 hover:bg-blue-900 shadow-md text-2xl m-2 p-2 text-white mx-auto" onClick={()=>additon_click()}>Multiplication</button>   
        </>
    )

}

export default Multiplication;