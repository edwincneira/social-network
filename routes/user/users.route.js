import { Router } from "express"
import { list, get, upsert } from "./users.routes.ctrl"

const routeUsers = Router()

routeUsers.get("/", list)
routeUsers.get("/:id", get)
routeUsers.post("/", upsert)
routeUsers.put("/", upsert)

export default routeUsers;