//no depender de la misma base de datos

const TABLA = "user"

export default function (inStore) {
    let store = inStore;
    console.log(store)
    if (!store) {
        store = require("../store/User")
    }
    // console.log(store.list(TABLA))
    function list() {
        return store.list(TABLA);
    }
    // console.log(list())
    return list;
}
