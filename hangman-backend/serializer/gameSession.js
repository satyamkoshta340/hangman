const MAX_LIVES = 6;

async function serializeGameSession(gameSession){

    const gameSessionWord = await gameSession.getWord();
    const actualWord = gameSessionWord.title;
    const playedLetters = gameSession.playedLetters.split("");

    const word_set = new Set([...actualWord]);
    const played_set = new Set([...playedLetters]);

    const wrong_letters = playedLetters.filter((letter)=>{
        return !word_set.has(letter);
    })

    const lives = MAX_LIVES - wrong_letters.length;
    const maskedWord = [...actualWord].map(letter => played_set.has(letter) ? letter: "_")

    return{
        id: gameSession.id,
        livesLeft: lives,
        result: !!gameSession.endedAt,
        maskedWord: maskedWord
    }
}

module.exports = serializeGameSession;