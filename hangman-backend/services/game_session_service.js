const MAX_LIVES = 6;
async function markGameCompleted(gameSession) {

    const gameSessionWord = await gameSession.getWord();
    const actualWord = gameSessionWord.title;
    const playedLetters = gameSession.playedLetters.split("");
    const word_set = new Set([...actualWord]);
    const played_set = new Set([...playedLetters]);

    const wrong_letters = playedLetters.filter((letter)=>{
        return !word_set.has(letter);
    })

    const lives = MAX_LIVES - wrong_letters.length;

    const isWon = [...word_set].reduce((acc, curr)=>{
        if(!played_set.has(curr)) return false;
        return true;
    }, true)
    if (lives == 0 || isWon){
        gameSession.endedAt = new Date();
        await gameSession.save();
    }
}

async function playWordInGameSession(gameSession, letter){

    const playedLetters = gameSession.playedLetters.split("");
    const playedSet = new Set([...playedLetters]);

    if(playedSet.has(letter)){
        return;
    }
    playedLetters.push(letter);
    gameSession.playedLetters = playedLetters.join("");
    await gameSession.save();
    await markGameCompleted(gameSession);
}

module.exports ={
    playWordInGameSession
}