//no depender de la misma base de datos
import { nanoid } from "nanoid"
import auth from "../auth";

export default function (inStore) {
    let store = inStore;
    if (!store) {
        store = require("../store/Methods")
    }

    function list() {
        return store.list();
    }

    function get(header) {
        return store.get(header)
    }

    function add() {
        return store.add();
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

    function remove(id){
        return store.remove(id)
    }

    // function follow(from, to) {
    //     return store.upsert(TABLA + "_follow", {
    //         user_from: from,
    //         user_to: to,
    //     })
    // }

    async function follow() {
        return store.query("auth", { username: "andrescneira" })
    }

    return {
        list,
        get,
        upsert,
        follow,
        remove,
    };
}