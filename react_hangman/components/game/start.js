import React, {useState} from "react";

const Start =({onStart, isRunning, name, setName})=>{
    
    return (
        <div className={`flex-container start-container`}>
            <div className={`title ${isRunning && 'display-none'}`}>
                HangMan
            </div>
            
            <input type="text" className={`input-name ${isRunning && 'display-none'}`}  onChange={(e) =>{
                
                console.log(e.target.value);
                setName(e.target.value);
                name = {name}
            }}></input>

            <div
                onClick={()=>onStart(name)}
                className={`start-button ${isRunning && 'display-none'}`}
            >Start</div>
        </div>
    )
}

export default Start;
