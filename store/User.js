const db = {
    "user": [
        { id: 1, name: "Edwin" },
        { id: 2, name: "Andres" }
    ]
}

async function list(table) {
    return db[table] || [];
}

async function get(tabla, id) {
    let col = await list(tabla)
    return col.filter(item => item.id == id)[0] || null;
}

async function upsert(tabla, data) {
    if (!db[tabla]) {
        db[tabla] = [];
    }
    db[tabla].push(data)
    console.log(db)
}

async function remove(tabla, id) {
    return true;
}

async function query(tabla, q) {
    // console.log("tabla ", tabla)
    let col = await list(tabla)
    console.log(col)
    let keys = Object.keys(q);
    let key = keys[0];

    return col.filter(item => item[key] === q[key])[0] || null;
}

export default {
    list,
    get,
    upsert,
    remove,
    query,
}
