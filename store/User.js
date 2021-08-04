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
    return filtrado || [];
}

async function get(id) {
    let col = await list()
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
        throw new Error("Cannot delete the document")
    }
}

async function query() {
    // if(collection === "auth") {
    //     const search = await User.findOne(q)
    //     console.log("search ", search)
    // }
    // console.log("perras")
    // let col = await list(tabla)
    // let keys = Object.keys(q);
    // let key = keys[0];

    // return col.filter(item => item[key] === q[key])[0] || null;

    return await User.find({})
}

export default {
    list,
    get,
    upsert,
    remove,
    query,
}
