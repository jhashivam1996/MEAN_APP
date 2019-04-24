var db =require('../config/dbconfig');
const mongoose = require ('mongoose');
var bcrypt = require('bcryptjs');
 

var DoctorSchema = db.Schema({

firstname:{type:String,required:false},
lastname:{type:String,required:false},
mob_no:{type:String,required:false},
DOB:{type:String,required:false},
speciality:{type:String,required:false},
gender:{type:String,required:false},
city:{type:String,required:false}, 
adhar_no:{type:String,required:false},
education:{type:String,required:false},
experience:{type:String,required:false},
work_for:{type:String,required:false},
speciality:{type:String,required:false},
email:{type:String,required:false},
password:{type:String,required:false}, 
hospital:{type:String,required:false},
certification:{type:String,required:false},
doctorimage:{type:String,required:false}
});

DoctorSchema.statics.generateHash=function generateHash(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}
 
module.exports= db.model('doctordetails',DoctorSchema,'doctordetails');