import User from "../models/User"
import Auth from "../models/Auth"

async function list() {

    const data = await User.find({})
    const filtrado = data.map(obj => {
        return {
            _id: obj._id,
            username: obj.username,
        }
    })
    // console.log(filtrado)
    // await User.updateOne({ name: "Anny" }, { name: "Lorena" } )
    // console.log(data)
    return { dir: "users/signin", document: filtrado } || [];
}

async function get(id) {
    // let col = await list()
    let col = []
    return col.filter(item => String(item._id) === id) || null;
}

async function upsert(collection, data) {
    if (collection === "auth") {
        await new Auth({
            username: data.username,
            password: data.password,
        })
    } else {
        await new User({
            name: data.name,
            username: data.username,
            password: data.password,
        })
    }
}

async function remove(id) {
    try {
        await User.findByIdAndDelete(id);
        return true;
    } catch (err) {
        throw new Error("Cannot delete the document");
    }
}

async function query(collection, q) {

    let search;
    if (collection === "auth") {
        search = await Auth.findOne(q);
    } else {
        search = await User.findOne(q);
    }

    return search;
}

export default {
    list,
    get,
    upsert,
    remove,
    query,
}
