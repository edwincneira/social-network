//no depender de la misma base de datos
import { nanoid } from "nanoid"
import auth from "../auth";
const TABLA = "user"

export default function (inStore) {
    let store = inStore;
    if (!store) {
        store = require("../store/User")
    }

    function list() {
        return store.list(TABLA);
    }

    function get(id) {
        return store.get(TABLA, id)
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username,
        }

        if (body.id) {
            user.id = body.id;
        } else {
            user.id = nanoid()
        }

        if (body.password || body.username) {
            await auth.upsert({
                id: user.id,
                username: user.username,
                password: body.password,
            })
        }
        return store.upsert(TABLA, user)
    }

    return {
        list,
        get,
        upsert,
    };
}
