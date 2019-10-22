const express = require('express');
const router = express.Router();

const {
    getBootcamps,
    getBootcampById,
    createBootcampById,
    updateBootcampById,
    deleteBootcampById
} = require('../controllers/bootcamps-requests');

router
    .route('/')
    .get(getBootcamps)
    .post(createBootcampById);

router
    .route('/:id')
    .get(getBootcampById)
    .put(updateBootcampById)
    .delete(deleteBootcampById);


module.exports = router;