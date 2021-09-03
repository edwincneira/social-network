import { Schema, model } from "mongoose";

const User = new Schema({
    name: { type: String, required: false },
    username: { type: String, required: true },
    password: { type: String, required: true },
    posts: { type: Array, required: false },
    followers: { type: Array, required: false },
    follows: { type: Array, required: false }
});

export default model("User", User);