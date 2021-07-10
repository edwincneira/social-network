import { success, error } from "../../network/response"
import control from "./index"

export function list(req, res) {
    control.list()
        .then(list => {
            success(req, res, list, 200)
        })
        .catch(err => {
            error(req, res, err.message, 500)
        })
}

export function get(req, res) {
    control.get(req.params.id)
        .then(user => {
            success(req, res, user, 200)
        })
        .catch(err => {
            error(req, res, err.message, 500)
        })
}

export function upsert(req, res) {
    control.upsert(req.body)
        .then(user => {
            success(req, res, user, 201)
        })
        .catch(err => {
            error(req, res, err.message, 500)
        })
}