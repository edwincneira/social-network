function success(req, res, dir, message){
    let directory = dir || "";
    let statusMessage = message || "";

    res.render(directory, statusMessage)
}

function error(req, res, message, status){
    let statusCode = status || 500;
    let statusMessage = message || 'Error';
    console.error(statusMessage)
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