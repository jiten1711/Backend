import mongoose from "mongoose"

const doctorSchema = new mongoose.model({

    name: {
        type: String, 
        required: true
    },
    salary: {
        type: Number,
        required: true
    },
    qualification: {
        type: String,
        required: true
    },
    experience: {
        type: Number,
        default: 0
    },
    worksInHospital: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Hospital"
        }
    ]
}, { timeStamp: true })


export const Doctor = mongoose.model("Doctor", doctorSchema) 