//no depender de la misma base de datos
import { nanoid } from "nanoid"
import auth from "../auth";

export default function (inStore) {
    let store = inStore;
    if (!store) {
        store = require("../store/User")
    }

    function list() {
        return store.list();
    }

    function get(id) {
        return store.get(id)
    }

    async function upsert(body) {
        const user = {
            name: body.name,
            username: body.username,
        }

        store.upsert(user)

        if (body.password || body.username) {
            await auth.upsert({
                username: user.username,
                password: body.password,
            })
        }
    }

    // function follow(from, to) {
    //     return store.upsert(TABLA + "_follow", {
    //         user_from: from,
    //         user_to: to,
    //     })
    // }

    async function follow() {
        return store.query()
    }

    return {
        list,
        get,
        upsert,
        follow,
    };
}