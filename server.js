const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: "./config/config.env" });
const app = express();
const PORT = process.env.PORT || 5000;
const requestStatus = {
    success: 404,
    data: { id: 1 }
}

app.get('/', (req, res) => {
    res.send(requestStatus)
})

app.listen(PORT, () => {
    console.log('\n\n------------------------------------------------\n');
    console.log(`       ${process.env.NODE_ENV.toUpperCase()}: http://localhost:${PORT}`);
    console.log('\n\n------------------------------------------------');
})

