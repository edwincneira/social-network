import { success, error } from "../../network/response"
import control from "./index"

export function list(req, res) {
    control.list()
        .then(list => {
            success(req, res, list, 200)
        })
        .catch(err => {
            error(req, res, err, 500)
        })
}

export function get(req, res) {
    control.get(req.header)
        .then(user => {
            success(req, res, user, 200)
        })
        .catch(err => {
            error(req, res, err, 500)
        })
}

export function add(req, res) {
    control.add()
        .then(stat => {
            success(req, res, stat, 201)
        })
        .catch(err => {
            error(req, res, err, 500)
        })
}

export function upsert(req, res) {
    control.upsert(req.body)
        .then(user => {
            success(req, res, user, 201)
        })
        .catch(err => {
            error(req, res, err, 500)
        })
}

export function remove(req, res) {
    control.remove(req.params.id)
        .then((data) => {
            success(req, res, data, 200)
        })
        .catch(err => {
            error(req, res, err, 500)
        })
}
// export function follow(req, res, next) {
//     control.follow(req.user.id, req.params.id)
//         .then(data => {
//             success(req, res, data, 201)
//         })
//         .catch(err => {
//             error(req, res, err.message, 500)
//         })
// }
export function follow(req, res, next) {
    control.follow()
        .then(data => {
            success(req, res, data, 201)
        })
        .catch(err => {
            error(req, res, err, 500)
        })
}