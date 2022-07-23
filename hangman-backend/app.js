const Express = require('express');
const Sessions = require("./routes/sessions");
const { sequelize, Word } = require('./models');
// const res = require('express/lib/response');

async function initialize(){
    const app = Express();

    app.use(Express.json());
    // setting the html header to get rid of CORS
    // Cors happens at browser not at backend or frontend
    app.use((req, res, next)=>{
        res.set("Access-Control-Allow-Origin", "http://127.0.0.1:5500")
        res.set("Access-Control-Allow-Headers", "Content-type")
        next();
    })

    app.use("/api", Sessions );

    app.get("/", (req, res)=>{
        res.status(202).send("Hello world");
    })

    // sync the database before starting the server
    await sequelize.sync();
    await Word.bulkCreate([
        {
            title: "PONDER"
        },
        {
            title: "MUSE"
        },
        {
            title: "CRIMSON"
        },
        {
            title: "SHOOK"
        },
        {
            title: "BALD"
        },
        {
            title: "GAGE"
        }
    ])
    app.listen(8000, ()=>{
        console.log("running server on port 8000!")
    })
}

initialize();
// https://www.anthonydesigner.com/