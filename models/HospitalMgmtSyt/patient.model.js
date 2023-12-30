import mongoose from "mongoose";

const patientSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    diagnosedWith: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    bloodGroup: {
        type: String,
        enum: ["A_Positive", "B_Positive", "O_Positive", "AB_Positive", "A_Negative", "B_Negative", "O_Negative", "AB_Negative"]
    },
    gender: {
        type: String, 
        enum: ["Male", "Female", "Others"],
        required: true
    },
    admittedIn: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Hospital"
    }
}, {timestamps: true})


export const Patient = mongoose.model("Patient", patientSchema)