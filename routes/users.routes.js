import { Router } from "express"
import { success, error } from "../network/response"

const routeUsers = Router()

routeUsers.get("/", (req, res) => {
    success(req, res, "Ok!", 200)
})

export default routeUsers;