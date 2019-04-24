var db =require('../config/dbconfig');
const mongoose = require ('mongoose');
var bcrypt = require('bcryptjs');
 

var PatientSchema = db.Schema({

firstname:{type:String,required:true},
lastname:{type:String,required:true},
mob_no:{type:String,required:false},
DOB:{type:String,required:false},
gender:{type:String,required:false},
city:{type:String,required:false}, 
adhar_no:{type:String,required:false},
email:{type:String,required:false},
password:{type:String,required:false}, 
hospital:{type:String,required:false},
description:{type:String,required:false},
patientimage:{type:String,required:false}
});

PatientSchema.statics.generateHash=function generateHash(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}
 
module.exports= db.model('patientdetails',PatientSchema,'patientdetails');