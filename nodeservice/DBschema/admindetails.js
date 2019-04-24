var db =require('../config/dbconfig');
const mongoose = require ('mongoose');
var bcrypt = require('bcryptjs');
 

var Admin = db.Schema({

firstname:{type:String,required:true},
lastname:{type:String,required:true},
email: {type:String,required:true},
password:{type:String,required:true}
});

Admin.statics.generateHash=function generateHash(password){
    return bcrypt.hashSync(password,bcrypt.genSaltSync(10));
}
 
module.exports= db.model('admindetails',Admin,'admindetails');