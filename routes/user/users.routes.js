import { Router } from "express"
import { list, get, upsert } from "./users.routes.ctrl"

const router = Router()

router.get("/user", list)
router.get("/:id", get)
router.post("/user", upsert)
router.put("/user", upsert)

export default router;