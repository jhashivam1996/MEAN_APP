var db =require('../config/dbconfig');
 

var prescriptiondetails = db.Schema({

from:{type:String ,required:true},
fromid:{type:String ,required:true},
to:{type:String,required:true },
queries:{type:String,required:true},
prescription:{type:String ,required:true},
date:{type:String ,required:true},


});


 
module.exports= db.model('prescription',prescriptiondetails,'prescription');