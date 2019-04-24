var db=require('mongoose');
db.Promise=global.Promise;

var Promise=db.connect('mongodb://sawan123:sawan123@cluster0-shard-00-00-9gjiz.mongodb.net:27017,cluster0-shard-00-01-9gjiz.mongodb.net:27017,cluster0-shard-00-02-9gjiz.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true').catch((error) => { console.log(error); });
 

db.connection.on('connected',()=>{
 console.log('Connected to database mongodb @ 27017');
     }) ;

Promise.then(function(db){
});
module.exports=db;