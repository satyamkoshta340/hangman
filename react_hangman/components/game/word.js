import React from "react";

const Word = ({actualWord, keyHistory})=>{
    return (
        <div className="flex-container justify-content-center">
            {/* {[...actualWord].map((letter)=>(
                <div key={letter}>
                    {keyHistory.has(letter) ? (
                        <div className="word">{letter}</div>
                    ) : (
                        <div className="word">&nbsp;_&nbsp;</div>
                    )}
                </div>
            ))} */}
            {
                [actualWord].map((letter) =>(<>
                <span key={letter}>&nbsp {letter} &nbsp</span></>))
            }

            
        </div>
    )
}
export default Word;
