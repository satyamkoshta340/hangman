import React, { useState } from 'react';
import Layout from './layout';


const MAX_LIVES = 6;
const Game = ()=>{
    // const [actualWord, setActualWord] = useState("");
    // const [keyHistory, setKeyHistory] = useState([]);

    // const word_set = new Set([...actualWord]);
    // const played_set = new Set([...keyHistory]);

    // const wrong_letters = keyHistory.filter((letter)=>{
    //     return !word_set.has(letter);
    // })

    // const lives = MAX_LIVES - wrong_letters.length;
    // const isRunning = actualWord;

    // const isWon = isRunning && lives && [...word_set].reduce((acc, curr)=>{
    //     if(!played_set.has(curr)) return false;
    //     return acc;
    // }, true);

    // const [session, setSession] = useState(null);
    // const isRunning = !!session;

    // const guess =  async (letter) =>{
    //     // setKeyHistory((prev)=> [...prev, letter])

    //     const newSession = await api.playInSession(session.id, letter);
    //     setSession(newSession);
    // }
    
    // const start =async (name) =>{
    //     // setActualWord("ponder");
    //     // setKeyHistory([]);

    //     const newSession =  await api.createSession(name);
    //     console.log(newSession);
    //     setSession(newSession);
        
    // }
    return(
        <>
        <Layout 
            // lives = {lives}
            // actualWord = {actualWord}
            // played_set = {played_set}
            // guess = {guess}
            // start = {start}
            // isWon = {isWon}
            // isRunning = {isRunning}

            
        />
        </>
    )
}

export default Game;