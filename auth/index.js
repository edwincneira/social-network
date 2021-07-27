import jwt from "jsonwebtoken"
import config from "../config"

const { JWT_PATRON } = config;

export function sign(data) {
    return jwt.sign(data, JWT_PATRON)
}

export function verify(token) {
    return jwt.verify(token, JWT_PATRON)
}

export const check = {
    own: function (req, owner) {
        const decoded = decodeHeader(req);
        console.log(decoded);
        if(decoded.id !== owner){
            console.log("decoded", decoded.id)
            console.log("owner", owner)
            throw new Error("You cannot edit")
        }
    },
}

export function getToken(auth) {
    if (!auth) {
        throw new Error('No viene token');
    }

    if (auth.indexOf('Bearer ') === -1) {
        throw new Error('Formato invalido');
    }
    console.log(auth)
    let token = auth.replace('Bearer ', '');
    return token;
}

export function decodeHeader(req) {
    const authorization = req.headers.authorization || '';
    const token = getToken(authorization);
    const decoded = verify(token);

    req.user = decoded;

    return decoded;
}