import { Schema, model } from "mongoose";

const User = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: false }
})

export default model("User", User)