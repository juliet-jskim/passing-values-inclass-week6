import { useState } from "react"
import Start from "./Start"



export default function Survey () {

    const [name, setName] = useState(""); //this is to store someone's name
    const [isActiveOne, setIsActiveOne] = useState(true); //value is showing (input present)
    const [isActiveTwo, setIsActiveTwo] = useState(false); //value is not showing (no input)

    const passName = (event) => {
        if (event.key === "Enter") {
            console.log("enter")
            setIsActiveOne(false);
            setIsActiveTwo(true);
        } 
    }

    return(
        <div>
            <div style={{display: isActiveOne ? 'block' : 'none'}}>
                <h1>What is your name?</h1>
                <input 
                    value={name}
                    onChange={event => setName(event.target.value)}
                    placeholder="Enter your name"
                    onKeyDown={passName} //onKeyDown = any interaction with your keyboard, while passName is the function that will be called
                    type="text"
                />
            </div> 
            <div style={{display: isActiveTwo ? 'block' : 'none'}}> 
                <Start passName={name}/>
            </div>
            

        </div>
    )
}
//display block is showing the name that is passed, but display non shows nothing if "false"