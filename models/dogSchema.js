const mongoose = require("mongoose")
const Schema = mongoose.Schema

const dogSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    breed: {
        type: String,
        default: "unknown"
    },
    size: {
        type: String,
        enum: ["Small", "Medium", "Large", "Extra-Large"]
    },
    age: {
        type: String,
        default: "unknown",
        required: true,
    },
    shed: {
        type: Boolean,
        default: true
    },
    goodWithKids: {
        type: Boolean,
        default: true
    },
    goodWithPets: {
        type: Boolean,
        default: true
    },
    image: {
        type: String,
        required: true,
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

module.exports = mongoose.model("Dog", dogSchema)