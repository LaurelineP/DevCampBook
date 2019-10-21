const express = require('express');
const dotenv = require('dotenv');

dotenv.config({ path: "./config/config.env" });
const app = express();
const PORT = process.env.PORT || 5000;
const API_URL = process.env.API_URL;
const requestStatus = {
    success: false,
    data: { id: 1 }
}

app
    .get('/', (req, res) => {
        res.write('<h1 style="text-align: center; font-family: Arial">Welcome</h1>');
    })
    .get(API_URL, (req, res) => {
        console.log(' get')
        let _requestStatus = { ...requestStatus, success: true, msg: 'Show all bootcamps' };
        res.status(200).json(_requestStatus);
    })
    .get(`${API_URL}/:id`, (req, res) => {
        console.log(' get')
        let _requestStatus = { ...requestStatus, success: true, msg: `Show bootcamps id: ${req.params.id}` };
        res.status(200).json(_requestStatus);
    })
    .post(API_URL, (req, res) => {
        console.log('post')
        let _requestStatus = { ...requestStatus, success: true, msg: 'Create new bootcamp' };
        res.status(201).json(_requestStatus);
    })
    .put(`${API_URL}/:id`, (req, res) => {
        console.log(('put'))
        let _requestStatus = { ...requestStatus, success: true, msg: `Update new bootcamp id: ${req.params.id}` };
        res.status(200).json(_requestStatus);
    })
    .delete(`${API_URL}/:id`, (req, res) => {
        let _requestStatus = { ...requestStatus, success: true, msg: `Delete new bootcamp id: ${req.params.id}` };
        res.status(200).json(_requestStatus);
    })


app.listen(PORT, () => {
    console.log('\n\n------------------------------------------------\n');
    console.log(`       ${process.env.NODE_ENV.toUpperCase()}: http://localhost:${PORT}`);
    console.log('\n\n------------------------------------------------');
})

