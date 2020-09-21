const express = require('express');
const bodyParse = require('body-parser');

const leaderRouter = express.Router();
leaderRouter.use(bodyParse.json())

leaderRouter.route('/')
.all((req,res, next) => {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res, next)=>{
    res.end('Will send all the leaders information to you');
})
.post((req,res,next)=>{
    res.end("Will add the leader : "+req.body.name + " with details " + req.body.description); 
})
.put( (req,res,next)=>{
    res.end("Put operation not supported for leader");
})
.delete((req,res,next)=>{
    res.end("Deleting all the leaders information "); 
});


leaderRouter.route('/:leaderId')
.all((req,res, next) => {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req,res, next)=>{
    res.end('Will send details of the leader ' + req.params.leaderId);
})
.post( (req,res,next)=>{
    res.statusCode = 403;
    res.end("POST operation not supported for leader");
})
.put((req,res,next)=>{   
    res.write('Updating the leader : ' + req.params.leaderId);
    res.end('Will update the leader '  + req.params.leaderId + ' with body description ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting the leader " + req.params.leaderId); 
});

module.exports = leaderRouter;