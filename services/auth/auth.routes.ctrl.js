import { success, error } from "../../network/response"
import control from "./index"

export function login(req, res){
    control.login(req.body.username, req.body.password)
        .then(token => {
            success(req, res, token, 200);
        })
        .catch(err => {
            error(req, res, err, 400);
        })
}

export function signup(req, res) {
    control.signup(req.body.username, req.body.password)
        .then(ready => {
            success(req, res, ready, 201)
        })
        .catch(err => {
            error(req, res, err, 400)
        })
}