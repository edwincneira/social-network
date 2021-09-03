import { Schema, model } from "mongoose";

const Post = new Schema({
    title: { type: String, required: true },
    content: { type: String, required: false }
})

export default model("Post", Post)