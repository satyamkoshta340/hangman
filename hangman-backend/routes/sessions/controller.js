const { Sequelize } = require("sequelize");
const { Word, GameSession } = require("../../models");
const serializeGameSession = require("../../serializer/gameSession");
const gameSessionServices = require("../../services/game_session_service")

async function CreateSession(req, res){
    // console.log(req.body.name);
    console.log("creating session....")
    const name = req.body.name;
    const word = await Word.findOne({
        order: Sequelize.fn("RANDOM")
    });
    const gameSession = await GameSession.create({
        playerName: name,
        playedLetters:"",
        wordId: word.id,
        startedAt: new Date(),

    })
    res.json(await serializeGameSession(gameSession));

}

async function PlaySession(req, res){
    const gameId = req.params.id;
    const letter = req.body.letter;
    const gameSession = await GameSession.findByPk(gameId);

    await gameSessionServices.playWordInGameSession(gameSession, letter);
    res.json(await serializeGameSession(gameSession));
    // res.json({
    //     id: "123",
    //     livesLeft: 5,
    //     result: false,
    //     maskedWord: ["_", "_"]
    // })
}

module.exports = {
    PlaySession,
    CreateSession
}