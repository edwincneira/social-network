import { Schema, model } from "mongoose";

const User = new Schema({
    name: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: false },
    post: { type: String, required: false},
})

export default model("User", User)