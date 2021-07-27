import { Router } from "express"
import { list, get, upsert } from "./users.routes.ctrl"
import secure from "./secure"

const router = Router()

router.get("/user", list)
router.get("/:id", get)
router.post("/user", upsert)
router.put("/user", secure("update"), upsert)

export default router;