const express = require("express");
const Course = require("../mongoose/models/courses");

//setting up the student router
const usersRouter = new express.Router();

//write your code here

usersRouter.get('/courses/get',(req,res,next)=>{
    
        Course.find().then(result=>{
                return res.status(200).send(JSON.stringify(result))
        })
       
    
})

module.exports = usersRouter;
