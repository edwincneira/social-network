const TABLA = "auth"

export default function (inStore) {
    let store = inStore;
    if (!store) {
        store = require("../store/User")
    }

    function upsert(data) {
        const authData = {
            id: data.id
        }
        if (data.username) {
            authData.username = data.username;
        }

        if (data.password) {
            authData.password = data.password;
        }
        return store.upsert(TABLA, authData)
    }

    async function login(username, password) {
        const data = await store.query(TABLA, { username: username })
        return data;
    }

    return {
        upsert,
        login,
    }
}