import { sign } from "../../auth/index"
import bcrypt from "bcrypt"
import { err } from "../../utils/error";

const COLLECTION = "auth"

export default function (inStore) {
    let store = inStore;
    if (!store) {
        store = require("../../store/Methods")
    }

    async function upsert(data) {

        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = await bcrypt.hash(data.password, 7);
        }

        return store.upsert(COLLECTION, authData)
    }

    async function login(username, password) {
        const data = await store.query(COLLECTION, { username: username })

        return bcrypt.compare(password, data.password)
            .then(equal => {
                if (equal) {
                    return sign(data)
                } else {
                    throw err("Password wrong", 406);
                }
            });
    }

    async function signup(username, password) {
        if (!password || !username) {
            console.log("Missing data")
            return false;
        } else {
            return store.signup(username, password)
        }
    }

    return {
        upsert,
        login,
        signup,
    }
}