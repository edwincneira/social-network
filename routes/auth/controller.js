import { sign } from "../../auth/index"
import bcrypt from "bcrypt"

const TABLA = "auth"

export default function (inStore) {
    let store = inStore;
    if (!store) {
        store = require("../../store/User")
    }

    async function upsert(data) {
        const authData = {
            id: data.id
        }
        if (data.username) {
            authData.username = data.username;
        }
        console.log("first", data.password)
        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 7);
        }

        console.log(authData)

        return store.upsert(TABLA, authData)
    }

    async function login(username, password) {
        const data = await store.query(TABLA, { username: username })

        return bcrypt.compare(password, data.password)
            .then(equal => {
                if (equal) {
                    return sign(data)
                } else {
                    throw new Error("F");
                }
            });
    }

    return {
        upsert,
        login,
    }
}