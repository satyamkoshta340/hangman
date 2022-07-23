const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './database.sqlite'
}); // this is the connection

class GameSession extends Model{}
GameSession.init({
    playerName: DataTypes.STRING,
    playedLetters: DataTypes.STRING,
    startedAt: DataTypes.DATE,
    endedAt: DataTypes.DATE
}, {sequelize, modelName: 'game_sessions'});

class Word extends Model{}
Word.init({
   title: DataTypes.STRING,
}, {sequelize, modelName: 'words'});

GameSession.Word = GameSession.belongsTo(Word);
module.exports={
    Word,
    GameSession,
    sequelize
}