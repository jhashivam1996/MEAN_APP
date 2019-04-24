var mongoose=require('mongoose'); 
var patientdetails =require('../DBschema/patientdetails');
var doctordetails =require('../DBschema/doctordetails');
var admindetails=require('../DBschema/admindetails');
var querydetails=require('../DBschema/querydetails');
var prescriptiondetails=require('../DBschema/prescription');


var integration={
getallpatient: function(req,res){
      patientdetails.find(function(err,result){
           res.json(result);
})
},

allqueriesforme: function(req,res){
    querydetails.find({
     'to':req.params.to
    }, function(err,result){
         res.json(result);
})
},

allprescriptionforme: function(req,res){
    prescriptiondetails.find({
     'to':req.params.to
    }, function(err,result){
         res.json(result);
})
},

singlequeryforme: function(req,res){
    querydetails.find({
     '_id':req.params.id
    }, function(err,result){
         res.json(result);
})
},
singleprescriptionforme: function(req,res){
    prescriptiondetails.find({
     '_id':req.params.id
    }, function(err,result){
         res.json(result);
})
},

getalldoctor: function(req,res){
    doctordetails.find(function(err,result){
         res.json(result);
})
},


getpatientbyid:function(req,res){
    patientdetails.find({_id:req.params.id},function(err,result){
            res.json(result);
    })    
  
  },
  getpatientbymobilenumber:function(req,res){
    
    patientdetails.find({mob_no:req.params.mob_no},function(err,result){
            res.json(result);
    })    
  
  },
  
getdoctorbyid:function(req,res){
    doctordetails.find({_id:req.params.id},function(err,result){
            res.json(result);
    })    
  
  },

  
registerpatient: function(req,res){
      
    let newdetails = new patientdetails({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    mob_no:req.body.mob_no,
    password:patientdetails.generateHash(req.body.password),
    gender:req.body.gender,
    city:req.body.city, 
    adhar_no:req.body.adhar_no,
    email:req.body.email,
    hospital:req.body.hospital,
    reg_no:req.body.reg_no,
    description:req.body.description,
    DOB:req.body.DOB ,
    patientimage:req.file.path,


    })

 newdetails.save((err,result)=>{

    if(err){
        res.json({msg:'error in saving data'});
    }
    else{
        res.json({msg:'saved successfully'});
    }
 })

},
 
registerdoctor: function(req,res){
      
    let newdetails = new doctordetails({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    mob_no:req.body.mob_no,
    DOB:req.body.DOB ,
    password:doctordetails.generateHash(req.body.password),
    gender:req.body.gender,
    experience:req.body.experience,
    education:req.body.education,
    work_for:req.body.work_for,
    speciality:req.body.speciality,
    city:req.body.city, 
    adhar_no:req.body.adhar_no,
    email:req.body.email,
    certification:req.body.certification,
    doctorimage:req.file.path,
   

    })

 newdetails.save((err,result)=>{

    if(err){
        res.json({msg:'error in saving data'});
    }
    else{
        res.json({msg:'saved successfully'});
    }
 })

},
updatedoctor: function(req,res,next){
    
    doctordetails.findByIdAndUpdate(req.params.id, {

        firstname:req.body.firstname,
        lastname:req.body.lastname,
        mob_no:req.body.mob_no,
        DOB:req.body.DOB ,
        gender:req.body.gender,
        experience:req.body.experience,
        education:req.body.education,
        work_for:req.body.work_for,
        speciality:req.body.speciality,
        city:req.body.city, 
        adhar_no:req.body.adhar_no,
        email:req.body.email,
        certification:req.body.certification,
    }, {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
 
    

},


changepassword:function(req,res){
    doctordetails.updateOne({
        'password':req.body.password
    }
    , {new: true})
    .then(note => {
        if(!note) {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });
        }
        res.send(note);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Note not found with id " + req.params.noteId
            });                
        }
        return res.status(500).send({
            message: "Error updating note with id " + req.params.noteId
        });
    });
},

registeradmin: function(req,res){
      
    let newdetails = new admindetails({
    firstname:req.body.firstname,
    lastname:req.body.lastname,
    password:admindetails.generateHash(req.body.password),
    email:req.body.email,
     
    })

 newdetails.save((err,result)=>{

    if(err){
        res.json({msg:'error in saving data'});
    }
    else{
        res.json({msg:'saved successfully'});
    }
 })

},

deletepatientbyid: function(req,res,next){

    patientdetails.remove({_id:req.params.id},function(err,result){
        if(err)
{
    res.json(err);
}
else
{
    res.json(result);
}
    })
},

sendquery:function(req,res)
{
    let newdetails = new querydetails({
        from:req.body.from,
        fromid:req.body.fromid,
        to:req.body.to,
        queries:req.body.queries,
        date: new Date().toString(),
        
        })
    
     newdetails.save((err,result)=>{
    
        if(err){
            res.json({msg:'error in saving data'});
        }
        else{
            res.json({msg:'saved successfully'});
        }
     })
},

 
sendprescription:function(req,res)
{
    let newdetails = new prescriptiondetails({
        from:req.body.from,
        fromid:req.body.fromid,
        to:req.body.to,
        queries:req.body.queries,
        prescription:req.body.prescription,
        date: new Date().toISOString(),
        
        })
    
     newdetails.save((err,result)=>{
    
        if(err){
            res.json({msg:'error in saving data'});
        }
        else{
            res.json({msg:'saved successfully'});
        }
     })
},




deletedoctorbyid: function(req,res,next){

    doctordetails.remove({_id:req.params.id},function(err,result){
        if(err)
{
    res.json(err);
}
else
{
    res.json(result);
}
    })
},

 

}


module.exports=integration;