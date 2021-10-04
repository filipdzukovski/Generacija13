require("dotenv").config();
const express = require("express");
const jwt = require('jsonwebtoken');
var cors = require('cors');
const app = express();
app.use(cors())

app.use(express.json());

let refreshTokens = [];

app.post('/token',(req,res)=>{
    const refreshToken = req.body.token
    if(refreshToken==null) return res.sendStatus(401);
    if(!refreshTokens.includes(refreshToken)) return res.sendStatus(403);
    jwt.verify(refreshToken,process.env.REFRESH_TOKEN_SECRET,(err,user)=>{
        if(err)return res.sendStatus(403);
        const accessToken = generateAccessToken({name:user.name});
        res.json({accessToken:accessToken});
    })
})

app.delete("/logout",(req,res)=>{
    refreshTokens = refreshTokens.filter(token=> token!= req.body.token);
    res.sendStatus(204);
})

app.post('/login', (req, res) => {
    //Authenticate User
    console.log(req.body.email)
    if(req.body.email !== "Filip" || req.body.password !=="qwerty") return res.sendStatus(401);
    const username = req.body.email;
    const user = { name: username }
    const accessToken = generateAccessToken(user);
    const refreshToken = jwt.sign(user, process.env.REFRESH_TOKEN_SECRET);
    refreshTokens.push(refreshToken);
    res.json({ accessToken: accessToken,username:username })
})

function generateAccessToken(user) {

    return jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10m' })
}

app.listen(4000);