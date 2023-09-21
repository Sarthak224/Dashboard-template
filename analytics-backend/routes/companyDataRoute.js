const express = require('express');
const CompanyModal = require('../models/CompanyModal')
const mongoose = require('mongoose')

var companyRoute = express.Router();


//Create img path


const expressAsyncHandler = require('express-async-handler');


companyRoute.get('/getData', expressAsyncHandler(async (req, res, next) => {

try{
   
   var company = req.query.company;
   var data;
   if(company == "flipkart"){
    data = await CompanyModal.find({ dataOfCompany : { $exists : false } })

   }
   else{
    // console.log("2")
    data = await CompanyModal.find({dataOfCompany:"linkedin"})
    // console.log(data)
    var maxFollowers=0,levelType={};
    data.map(val=>{
      // console.log(typeof val)
      // console.log(val.LinkedIn_Followers);
      // console.log(val.Involvement)
      // console.log(val)
         if(val["LinkedIn_Followers"]>maxFollowers){
          maxFollowers =  val["LinkedIn_Followers"]
         }
      

         if(levelType[""+val["Involvement"]]){
          levelType[""+val["Involvement"]]=           levelType[""+val["Involvement"]]+1

         }
         else{
          levelType[""+val["Involvement"]]=1

         }
        })
    

   }
   
   res.json({maxFollowers,dataList:data,levelType:levelType})


}catch(e){
    console.log(e)
    res.status(500).send({e});

}

}))








module.exports = companyRoute;
