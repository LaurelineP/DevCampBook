const requestStatus = {
    success: false,
    data: { id: 1 }
}

// -------------- GET ---------------
/**
 * @desc        GET all bootcamps
 * @route       GET /api/v1/bootcamp
 * @access      Public
 */
exports.getBootcamps = (req, res, next) => {
    let _requestStatus = { ...requestStatus, success: true, msg: 'Show all bootcamps' };
    res.status(200).json(_requestStatus);
    next();
}

/**
 * @desc        GET a single bootcamps
 * @route       GET /api/v1/bootcamp/<id>
 * @access      Public
 */
exports.getBootcampById = (req, res, next) => {
    let _requestStatus = { ...requestStatus, success: true, msg: `Show bootcamp id: ${req.params.id}` };
    res.status(200).json(_requestStatus);
    next();

}



// -------------- CREATE ---------------
/**
 * @desc        CREATE all bootcamps
 * @route       POST /api/v1/bootcamp
 * @access      Public
 */
exports.createBootcampById = (req, res, next) => {
    let _requestStatus = { ...requestStatus, success: true, msg: 'Create new bootcamp' };
    res.status(201).json(_requestStatus);
    next();
}



// -------------- UPDATE ---------------
/**
 * @desc        UPDATE a bootcamp
 * @route       PUT /api/v1/bootcamp/<id>
 * @access      Public
 */
exports.updateBootcampById = (req, res, next) => {
    let _requestStatus = { ...requestStatus, success: true, msg: `Update new bootcamp id: ${req.params.id}` };
    res.status(200).json(_requestStatus);
    next();
}


// -------------- DELETE ---------------
/**
 * @desc        DELETE a bootcamp
 * @route       DELETE /api/v1/bootcamp/<id>
 * @access      Public
 */
exports.deleteBootcampById = (req, res, next) => {
    let _requestStatus = { ...requestStatus, success: true, msg: `Delete new bootcamp id: ${req.params.id}` };
    res.status(200).json(_requestStatus);
    next();
}