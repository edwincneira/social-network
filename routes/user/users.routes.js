import { Router } from "express"
import { list, get, upsert, follow } from "./users.routes.ctrl"
import secure from "./secure"

import store from "../../store/User"

const router = Router()

router.get("/user", list)
router.get("/follow/:id", secure("follow"), follow)
router.get("/:id", get)
router.get("/query", (req, res) => {
    res.send("HOla Mundo")
})
router.post("/user", upsert)
router.put("/user", secure("update"), upsert)


export default router;