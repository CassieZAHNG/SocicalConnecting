const express = require('express');
 
const application = express();
application.use(express.json());  
 
application.post('/', function(req, res){
   
  console.log(req.body);
 
  res.end();
});