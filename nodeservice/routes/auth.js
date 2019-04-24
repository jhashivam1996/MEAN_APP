var mongoose=require('mongoose');
var detail=require('./integration.js')
var patient=require('../DBschema/patientdetails');
var doctor=require('../DBschema/doctordetails');
var admin=require('../DBschema/admindetails');

var bcrypt = require('bcryptjs');
var jwt = require('jwt-simple');


var auth ={
    //patient login
    patientlogin: function(req,res){
         
              if((req.body.email!="")&& (req.body.password != "")){
                  patient.findOne({
                      'email': req.body.email
                  },function(err,user)
                  {
                      if(err)
                      {
                        res.json({
                            message: "failed",
                            status:false,
                            token:""
                        });
                      }
                      else{
                          if (user &&  bcrypt.compareSync(req.body.password,user.password)){
                            user.password="";
                            var token = genToken(user);              
                            res.json(user);      
                        } else {
                            // authentication failed
                            res.json({
            
                                message: "failed once",
                                status:false,
                                token:""
                            });
                        }

                      }
                  }
                )
             }
        else{
            res.json({
            
                message: "failed again",
                status:false,
                token:""
            });
        }
        },
    

        //doctor login
doctorlogin: function(req,res){
         
            if((req.body.email!= "")&& (req.body.password!= "")){
                doctor.findOne({
                    'email': req.body.email
                },function(err,user)
                {
                    if(err)
                    {
                      res.json({
                          message: "failed",
                          status:false,
                          token:""
                      });
                    }
                    else{
                        if (user &&  bcrypt.compareSync(req.body.password,user.password)){
                          user.password="";
                          var token = genToken(user);              
                          res.json(user);      
                      } else {
                          // authentication failed
                          res.json({
          
                              message: "failed once",
                              status:false,
                              token:""
                          });
                      }

                    }
                }
              )
           }
      else{
          res.json({
          
              message: "failed again",
              status:false,
              token:""
          });
      }
      },
      
adminlogin: function(req,res){
         console.log(req.body.email);
         console.log(req.body.password);
        if((req.body.email != "")&& (req.body.password != "")){
            admin.findOne({
                'email': req.body.email
            },function(err,user)
            {
                if(err)
                {
                  res.json({
                      message: "failed",
                      status:false,
                      token:""
                  });
                }
                else{

                    if (user &&  bcrypt.compareSync(req.body.password,user.password)){
                      user.password="";
                      var token = genToken(user);              
                      res.json(user);     

                  } else {
                      // authentication failed
                      res.json({
      
                          message: "failed once",
                          status:false,
                          token:""
                      });
                  }

                }
            }
          )
       }
  else{
      res.json({
      
          message: "failed again",
          status:false,
          token:""
      });
  }
  },

    
}











module.exports=auth;
// private method
function genToken(user) {

    var expires = expiresIn(1); // 7 days
    var token = jwt.encode({
        exp: expires
    }, require('../config/secret')());
    return {
        
        user: user
    };
}

function expiresIn(numDays) {
    var dateObj = new Date();
    return dateObj.setDate(dateObj.getDate() + numDays);
}