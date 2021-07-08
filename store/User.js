const db = {
    "user": [
        { id: 1, name: "Edwin" },
        { id: 2, name: "Andres"}
    ]
}

async function list(table) {
    return db[table];
}

async function get(tabla, id) {
    let col = await list(tabla)
    return col.filter(item => item.id == id)[0] || null;
}

async function upsert(tabla, data) {
    db[collection].push(data)
}

async function remove(tabla, id) {
    return true;
}

export default {
    list,
    get,
    upsert,
    remove,
}
