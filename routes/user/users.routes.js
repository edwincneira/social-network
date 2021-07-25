import { Router } from "express"
import { list, get, upsert } from "./users.routes.ctrl"

const router = Router()

router.get("/", list)
router.get("/:id", get)
router.post("/", upsert)
router.put("/", upsert)

export default router;