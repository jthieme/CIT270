const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = 3000;

app.use(bodyParser.json());

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});

app.get('/', (req, res) => {
    res.send("Node Server is here");
});

app.post('/login', (req, res) => {
    const loginBody = req.body;
    const userName = loginBody.userName;
    const password = loginBody.password;

    if (password === "Orange20!") {
        res.send(`Welcome, ${userName}!`);
    } else {
        res.status(401);
        res.send("Incorrect password.");
    }
});