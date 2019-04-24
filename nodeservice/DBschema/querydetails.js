var db =require('../config/dbconfig');
 

var querydetails = db.Schema({

from:{type:String,required:true},
fromid:{type:String,required:true},
to:{type:String,required:true},
queries:{type:String,required:true},
date:{type:String,required:true},


});


 
module.exports= db.model('querydetails',querydetails,'querydetails');