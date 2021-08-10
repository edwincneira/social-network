import mongoose from "mongoose"
import config from "./config"

const { MONGO_URL, NAME_DB } = config;

(async function () {
    try {
        const db = await mongoose.connect(MONGO_URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true,
            useFindAndModify: false
        });
        console.log("Mongodb connected to", NAME_DB)
    } catch (error) {
        console.log("db failed ", error)
    }
})();
