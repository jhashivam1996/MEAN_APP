var express=require('express');
var router=express.Router();
var integration = require('./integration.js');
var auth=require('./auth.js')

const multer=require('multer');
const storage=multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'./uploads/');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
});
const upload=multer({storage:storage,limits:{
    fileSize:1024*1024*5
}});


router.get('/api/fetchallpatient',integration.getallpatient);
router.get('/api/fetchalldoctor',integration.getalldoctor);
router.post('/api/patientreg',upload.single('patientimage'),integration.registerpatient);
router.delete('/api/deletepatientbyid/:id',integration.deletepatientbyid);
router.delete('/api/deletedoctorbyid/:id',integration.deletedoctorbyid);
router.get('/api/getpatientbyid/:id',integration.getpatientbyid);
router.get('/api/getpatientbymobilenumber/:mob_no',integration.getpatientbymobilenumber);
router.get('/api/getdoctorbyid/:id',integration.getdoctorbyid);
router.post('/api/doctorreg',upload.single('doctorimage'),integration.registerdoctor);
router.put('/api/updatedoctorbyid/:id',integration.updatedoctor);
router.post('/api/admin',integration.registeradmin);
router.post('/api/sendquery',integration.sendquery);
router.post('/api/sendprescription',integration.sendprescription);
router.get('/api/fetchallqueries/:to',integration.allqueriesforme);
router.get('/api/fetchsinglequery/:id',integration.singlequeryforme);
router.get('/api/fetchallprescription/:to',integration.allprescriptionforme);
router.get('/api/fetchsingleprescription/:id',integration.singleprescriptionforme);
router.post('/patientlogin',auth.patientlogin);
router.post('/doctorlogin',auth.doctorlogin);
router.post('/adminlogin',auth.adminlogin);


module.exports=router;
