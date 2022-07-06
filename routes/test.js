import express from 'express';

const testRouter = express.Router();

testRouter.post("/test", (req, res) => {
    res.send('Teste Ok')
});

export default testRouter;