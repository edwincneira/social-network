import { Router } from "express";
import { success } from "../../network/response-test"

const router = Router()

router.get("/test", (req, res) => {
    success(req, res, "post/add-post")
})

export default router