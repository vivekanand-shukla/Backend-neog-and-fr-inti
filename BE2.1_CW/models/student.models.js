const mongoose = require("mongoose")
const studentSchema = new mongoose.Schema({
    studentRegestationNumber:String,
    studentId :String,
    studentName: String,
    fatherGuardianName :String,
    class:String,
    emergencyContact:Number,
    studentProfileImageUrl:String
})

const Student  = mongoose.model("Student" ,studentSchema)
module.exports= Student