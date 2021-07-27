import { check } from "../../auth"

export default function (action) {
    
    function middleware(req, res, next) {
        switch(action) {
            case 'update':
                const owner = req.body.id;
                check.own(req, owner);
                next()
                break;

            default:
                next()
        }
    }

    return middleware;
}