//no depender de la misma base de datos

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

    return {
        list,
        get,
    };
}
