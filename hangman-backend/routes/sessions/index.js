const { Router } = require('express');
const Controller = require('./controller');

const router = Router();

router.get("/sessions", (req, res)=>{
    res.send("hello sessions")
})

router.post("/sessions", Controller.CreateSession);
router.post("/sessions/:id/play", Controller.PlaySession);

module.exports = router;