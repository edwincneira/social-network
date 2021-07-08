import { Router } from "express"
import { success, error } from "../../network/response"
import control from "./index"

const routeUsers = Router()

routeUsers.get("/", (req, res) => {
    // console.log("control", control())
    control.list()
        .then(list => {
            success(req, res, list, 200)
        })
        .catch(err => {
            error(req, res, err.message, 500)
        })
})

routeUsers.get("/:id", (req, res) => {
    control.get(req.params.id)
        .then(user => {
            success(req, res, user, 200)
        })
        .catch(err => {
            error(req, res, err.message, 500)
        })
})

export default routeUsers;