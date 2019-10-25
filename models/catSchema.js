const mongoose = require("mongoose")
const Schema = mongoose.Schema

const catSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        default: "unknown"
    },
    age: {
        type: String,
        default: "unknown",
        required: true
    },
    goodWithKids: {
        type: Boolean,
        default: false
    },
    goodWithPets: {
        type: Boolean,
        default: false
    },
    image: {
        type: String,
        required: true
    },
    furColor: {
        type: String,
        default: "unknown"
    },
    gender: {
        type: String,
        enum: ["Female", "Male"]
    }
})

module.exports = mongoose.model("Cat", catSchema)