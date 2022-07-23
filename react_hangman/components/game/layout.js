import React, {useState} from 'react';
import Keyboard from './keyboard';
import Start from './start';
import Word from './word';
import Lives from './lives';
import { createSession, playInSession } from '../../api/sessions';

const Layout = (
    // {lives, actualWord, played_set, guess, start, isWon, isRunning}
    {}
)=>{
    // console.log(isWon);
    const isWon = false;
    const played_set = new Set();
    const [session, setSession] = useState(null);
    const isRunning = !!session;
    const [name, setName] = useState("");
    const guess =  async (letter) =>{
        // setKeyHistory((prev)=> [...prev, letter])

        const newSession = await playInSession(session.id, letter);
        setSession(newSession);
    }
    
    const start =async (name) =>{
        // setActualWord("ponder");
        // setKeyHistory([]);

        const newSession =  await createSession(name);
        console.log(newSession);
        setSession(newSession);
        
        
    }


    return(
        <div className='game-wrapper'>
        {isRunning && <>
            <div className='left-pane'>
                <Lives livesLeft = {session.livesLeft} />
            </div>
            <div className='right-pane'>
                {/* <Word actualWord={actualWord} keyHistory={played_set} /> */}
                <Word actualWord={session.maskedWord} keyHistory={played_set} />
                <Keyboard keyHistory={played_set} onSelect={guess} isWon={isWon}/>
            </div>
            </>
        }
            <Start name={name} setName = {setName} onStart={start} isRunning={isRunning} />
        {isWon  && <>
            <div className='winner'>🎉You Won!🎉
            
            <div className='start-button restart-button' onClick={()=> start(name)}>Restart</div>
            </div>
        </>}

        {/* {(session.livesLeft==0)  && <>
            <div className='loser'>You Lose
            
            <div className='start-button restart-button' onClick={()=> start()}>Restart</div>
            </div>
        </>} */}

        </div>
    )
}

export default Layout;