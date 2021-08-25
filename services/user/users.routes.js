import { Router } from "express"
import { list, get, add, upsert, follow, remove } from "./users.routes.ctrl"
import secure from "./secure"
import store from "../../store/Methods"

const router = Router();

router.get("/posts", list);
router.post("/add", add)
// router.put("/edit")
// router.delete("/:id", remove)

// router.get("/follow/:id", secure("follow"), follow);
// router.get("/query", follow);
// router.get("/:id", get);
// router.post("/", upsert);
// router.put("/user", secure("update"), upsert);
// router.get("/profile/:username", (req, res) => {
//     console.log(req.params.username)
//     res.send("hola")
// })

export default router;