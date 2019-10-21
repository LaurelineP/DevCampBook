const express = require('express');
const router = express.Router();

const requestStatus = {
    success: false,
    data: { id: 1 }
}

router
    .get('/', (req, res) => {
        let _requestStatus = { ...requestStatus, success: true, msg: 'Show all bootcamps' };
        res.status(200).json(_requestStatus);
    })
    .get('/:id', (req, res) => {
        let _requestStatus = { ...requestStatus, success: true, msg: `Show bootcamps id: ${req.params.id}` };
        res.status(200).json(_requestStatus);
    })
    .post('/', (req, res) => {
        let _requestStatus = { ...requestStatus, success: true, msg: 'Create new bootcamp' };
        res.status(201).json(_requestStatus);
    })
    .put('/:id', (req, res) => {
        let _requestStatus = { ...requestStatus, success: true, msg: `Update new bootcamp id: ${req.params.id}` };
        res.status(200).json(_requestStatus);
    })
    .delete('/:id', (req, res) => {
        let _requestStatus = { ...requestStatus, success: true, msg: `Delete new bootcamp id: ${req.params.id}` };
        res.status(200).json(_requestStatus);
    })

module.exports = router;