const express = require("express");
const bodyParser = require("body-parser");
const Redis = require("redis");
const {createHash} = require("crypto");
const app = express();
const port = 3000;
const fs = require("fs");
const https = require("https");

const redisClient = Redis.createClient({url:"redis://127.0.0.1:6379"});
const redisConnect = redisClient.connect();

app.use(bodyParser.json());

https.createServer({
    // key: fs.readFileSync('server.key'),
    // cert: fs.readFileSync('server.cert'),
    key: fs.readFileSync('privkey1.pem'),
    cert: fs.readFileSync('cert1.pem'),
    chain: fs.readFileSync('fullchain1.pem')
  }, app).listen(port, () => {
    redisConnect;

    // ternary expression to log if we are connected or not
    redisConnect ? 
        console.log(`You're connected to Redis!\nListening on port ${port}`)
    :   console.log("Sorry, you're not connected to Redis")
  })

app.get('/', (req, res) => {
    res.send("Node Server is here");
});

app.post('/login', async (req, res) => {
    const loginBody = req.body;
    const userName = loginBody.userName;
    const password = loginBody.password;

    const hashPassword = password === null ? null : createHash("sha3-256").update(password).digest("hex");
    const redisPassword = password === null ? null : await redisClient.hGet("hashedPasswords", userName);
    
    console.log(`password for ${userName}: ${redisPassword}`);

    if (redisPassword != null && hashPassword === redisPassword) {
        res.send(`Welcome, ${userName}!`);
    } else {
        res.status(401);
        res.send("Incorrect password.");
    }
});