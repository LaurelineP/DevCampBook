const express = require('express');
const dotenv = require('dotenv');


// Route files
const main = require('./router/main-router');


// Loads env vars
dotenv.config({ path: "./config/config.env" });

const app = express();
const PORT = process.env.PORT || 5000;
const API_URL = process.env.API_URL;


// Mount routers ( middleware )
app.use(API_URL, main);

app.get('/', (req, res) => {
    res.write('<h1 style="text-align: center; font-family: Arial">Welcome</h1>');
})

app.listen(PORT, () => {
    console.log('\n\n------------------------------------------------\n');
    console.log(`       ${process.env.NODE_ENV.toUpperCase()}: http://localhost:${PORT}`);
    console.log('\n\n------------------------------------------------');
})

