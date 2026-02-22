let Addition= () => {

        let additon_click = () => {

            alert(num1 + num2);
        }
    return(
        <>
            <button className="border-1 bg-green-900 hover:bg-blue-900 shadow-md text-2xl m-2 p-2 text-white mx-auto" onClick={()=>additon_click()}>Addition</button>   
        </>
    )
    }


export default Addition;