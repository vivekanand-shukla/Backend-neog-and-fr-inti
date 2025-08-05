const mongoose = require("mongoose");
const employeeSchema =  new mongoose.Schema({
        name:{
            type:String,
         },
        role :{
            type:String
        },
        idNo :String,
        dob: Date,
        mail:String,
        TelNo:String,
        address:String,



        

})
const Employee = mongoose.model("Employee" , employeeSchema);
module.exports = Employee;