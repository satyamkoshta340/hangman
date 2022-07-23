import React from "react";

const Lives = ({livesLeft}) =>{
    const lives = [...Array(livesLeft).keys()]
    return(
        
        <div className="hangman-container">
            <div className="pole"></div>
            <div className={`hangman hangman-${6-livesLeft}`}>
                <div className="hangman__element"></div>
                <div className="hangman__element"></div>
                <div className="hangman__element"></div>
                <div className="hangman__element"></div>
                <div className="hangman__element"></div>
                <div className="hangman__element"></div>
            </div>
            <div className="lives flex-container">
                {
                    lives.map((live)=>( 
                        <div key={live}>💓</div>
                    ))
                } 
            </div>
        </div>
    )
}

export default Lives;