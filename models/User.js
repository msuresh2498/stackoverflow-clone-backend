import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    about: {
        type: String,
    },
    tags: {
        type: [String],
    },
    joinedON: {
        type: Date,
        default: Date.now
    },
    verifytoken: {
        type: String,
        require: true
    },
});
export const User = new mongoose.model("stackuser", userSchema);
