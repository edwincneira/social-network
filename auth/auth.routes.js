import { Router } from "express";
import { success, error } from "../network/response";
import control from "./index"

const router = Router()

router.post("/login", function(req, res){
    control.login(req.body.username, req.body.password)
        .then(token => {
            success(req, res, token, 200);
        })
        .catch(err => {
            error(req, res, err.message, 400);
        })
})

export default router;