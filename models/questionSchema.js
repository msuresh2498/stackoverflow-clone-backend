import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
    questionTitle: {
        type: String,
        require: true
    },
    questionBody: {
        type: String,
        require: true
    },
    questionTags: {
        type: [String],
        require: true
    },
    noOfAnswers: {
        type: Number,
        default: 0
    },
    upVote: {
        type: Number,
        default: 0
    },
    downVote: {
        type: Number,
        default: 0
    },
    userPosted: {
        type: String,
        require: true
    },
    userId: {
        type: String
    },
    askedOn: {
        type: Date,
        default: Date.now
    },
    views: {
        type: Number,
        default: 0,
    },
    answer: [
        {
            answerBody: String,
            userAnswered: String,
            userId: String,
            answeredOn: {
                type: Date,
                default: Date.now
            },
        },
    ],
});
export const Questions = new mongoose.model("Question", questionSchema);
