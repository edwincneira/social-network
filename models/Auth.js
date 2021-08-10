import { Schema, model } from "mongoose";

const Auth = new Schema({
    _id: { type: String, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true },
})

export default model("Auth", Auth)