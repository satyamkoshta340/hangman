import React from "react";
const ALL_ALPHABETS = [..."abcdefghijklmnopqrstuvwxyz"];

const Keyboard =({
    keyHistory, onSelect, isWon
})=>{
    return(
        <div className="keyboard">
            {ALL_ALPHABETS.map((alphabet)=>(
                <button 
                className="key-button"
                onClick = { ()=>{onSelect(alphabet)}}
                disabled = {keyHistory.has(alphabet) || isWon}
                key = {alphabet}>
                    {alphabet}
                </button>
            ))}
        </div>
    )
    
}

export default Keyboard;