const express = require('express');
const bodyParse = require('body-parser');

const dishRouter = express.Router();
dishRouter.use(bodyParse.json())

dishRouter.route('/')
.all((req,res, next) => {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get((req,res, next)=>{
    res.end('Will send all the dishes to you');
})
.post((req,res,next)=>{
    res.end("Will add the dish : "+req.body.name + " with details " + req.body.description); 
})
.put( (req,res,next)=>{
    res.statusCode = 403;
    res.end("Put operation not supported for dishes");
})
.delete((req,res,next)=>{
    res.end("Deleting all the dishes "); 
});

dishRouter.route('/:dishId')
.all((req,res, next) => {    
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    next();
})
.get( (req,res, next)=>{
    res.end('Will send details of the dish ' + req.params.dishId);
})
.post( (req,res,next)=>{
    res.statusCode = 403;
    res.end("POST operation not supported for dishId");
})
.put((req,res,next)=>{   
    res.write('Updating the dish : ' + req.params.dishId);
    res.end('Will update the dish '  + req.params.dishId + ' with body description ' + req.body.description);
})
.delete((req,res,next)=>{
    res.end("Deleting the dishe " + req.params.dishId); 
});

module.exports = dishRouter;