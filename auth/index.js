import jwt from "jsonwebtoken"
import config from "../config"

const { JWT_PATRON } = config;

export function sign(data) {
    return jwt.sign(data, JWT_PATRON)
}

function verify(token) {
    return jwt.verify(token, JWT_PATRON)
}

const check = {
    own: function(req, owner) {
        const decoded = decodeHeader(req);
        console.log(decoded);
    },
}

function getToken(auth) {
    if (!auth) {
        throw new Error('No viene token');
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato invalido');
    }

    let token = auth.replace('Bearer ', '');
    return token;
}

function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;
    
    return decoded;
}