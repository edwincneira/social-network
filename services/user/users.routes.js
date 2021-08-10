import { Router } from "express"
import { list, get, upsert, follow } from "./users.routes.ctrl"
import secure from "./secure"
import store from "../../store/Methods"

const router = Router();

router.get("/posts", list);
router.get("/follow/:id", secure("follow"), follow);
router.get("/query", follow);
router.get("/:id", get);
router.post("/user", upsert);
router.put("/user", secure("update"), upsert);

export default router;