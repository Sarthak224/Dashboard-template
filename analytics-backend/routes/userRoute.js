const express = require('express');
const Admins = require('../models/Admins')
const mongoose = require('mongoose')

const jwt = require('jsonwebtoken');
var userRouter = express.Router();


//Create img path

function generateAccessToken(userData) {
  return jwt.sign(userData, process.env.TOKEN_SECRET, { expiresIn: '1d' });
}


function authenticateToken(req, res, next) {
  const authHeader = req.headers['authorization']
  const token = authHeader && authHeader.split(' ')[1]

  if (token == null) return res.sendStatus(401)

  jwt.verify(token, process.env.TOKEN_SECRET, (err, user) => {
    console.log(err)

    if (err) return res.sendStatus(403)

    console.log(user);
    req.user = user

    next()
  })
}

const expressAsyncHandler = require('express-async-handler');


userRouter.post('/admin/login', expressAsyncHandler(async (req, res, next) => {

try{
   
   
   var loginDetails = req.body;
   console.log(req.body)
   console.log(loginDetails)
   var data = await Admins.findOne({email:loginDetails.email,password:loginDetails.password});
   
   if(data){
    const token = generateAccessToken({email:loginDetails.email,password:loginDetails.password});
     res.json({message:"Login Successfully",token})
   }else{
     res.status(401).json({message:"Login Failed"})
   }


}catch(e){
    console.log(e)
    res.status(500).send({e});

}

}))




userRouter.post('/admin/verifyLogin',authenticateToken, expressAsyncHandler(async (req, res, next) => {

  try{
   
    res.json({msg:"Already Logged n user"})
     
  
  }catch(e){
      
      res.status(500).send(e);
  
  }
  
  }))

  userRouter.post('/admin/createUser', expressAsyncHandler(async (req, res, next) => {

    try{

      var newUserData = req.body;
      var checkUser = await Admins.find({email:newUserData.email});
      console.log(checkUser)
      if(checkUser.length==0){
         var data = await Admins.create(newUserData,{
          new:true
         })
         res.json(data);
         return;
      }
      else{
        res.sendStatus(401)
      }
    }
    catch(e){
      res.sendStatus(500).json(e);
    }
  
  }))




module.exports = userRouter;
