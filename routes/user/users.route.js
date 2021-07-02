import { Router } from "express"
import { success, error } from "../../network/response"
import control from "./index"

const routeUsers = Router()

routeUsers.get("/", (req, res) => {
    // console.log("control", control())
    const lista = control()
    success(req, res, lista, 200)
})

export default routeUsers;