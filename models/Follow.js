import { Schema, model } from "mongoose"

const followSchema = new Schema({
    follower: { type: String, required: true },
    follow: { type: String, required: true }
})

export default model("Follow", followSchema)