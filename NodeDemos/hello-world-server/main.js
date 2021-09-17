const path = require('path');
const express = require('express');
const cors = require('cors');
const app = express();

// Configuration
const corsOptions = {
    origin: "*",
    methods: ["GET", "POST"],
    optionSuccessStatus: 200
};

// Middlewares
app.use(cors(corsOptions));

//Routes
app.get("/", (req, res) => {
    res.send("Hi there!");
});

const HTTP_PORT = 3100;

app.listen(HTTP_PORT, () => {
    console.log(`HTTP server listening at ${HTTP_PORT}`);
});