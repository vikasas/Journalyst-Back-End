const express = require("express");
const routes= express.Router();
const { syncTrade } = require("../Services/TradesData");
const { refreshToken } = require("../Services/TokenGenerate");

routes.get("/info/:userId" , (req , res) => {
    try{
        const userId = req.params.userId;
        const result = syncTrade(userId);
        res.json(result);
    }catch(e){
        res.status(402).json({
            message : e.message
        })
    }
})

routes.post("/token/refresh/:userId" , (req ,res) =>{
    try{
        const userId = req.params.userId;
        const token = refreshToken(userId);
        res.json({
            token : token
        })
    }catch(e){
        res.status(402).json({
            message : e.message
        })
    }
})

module.exports = routes;
