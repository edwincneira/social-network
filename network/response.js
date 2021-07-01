function success(req, res, message, status){
    let statusCode = status || 200;
    let statusMessage = message || '';

    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: statusMessage,
    })

}

function error(req, res, message, status){
    let statusCode = status || 500;
    let statusMessage = message || 'Error';

    res.status(statusCode).send({
        error: false,
        status: statusCode,
        body: statusMessage,
    })

}

export {
    success,
    error,
}