const express = require("express");
const app = express();
const mongoose = require('mongoose')
const cors = require('cors');
const dotenv = require('dotenv');
const userRouter = require("./routes/userRoute");
const companyRoute = require("./routes/companyDataRoute");

dotenv.config();

var allowedOrigins = ['http://localhost:3000',
                      'http://192.168.29.141:3000'
                    ];



app.use(cors({
  origin: "*",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "preflightContinue": false,
  "optionsSuccessStatus": 204,
  
}))

mongoose.connect("mongodb://localhost:27017/analytics-dashboard", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  family: 4,
}).then(()=>{console.log("Successful")}).catch((err)=>{console.log(err)});

// app.use(cors());
app.use(express.json());

app.use('/api/users',userRouter)
app.use('/api/company',companyRoute)



app.use((err, req, res, next) =>{
  console.error("err.stack")
  res.status(500).send({data:{message:err.message}})
})

app.listen(3013,()=>{
  console.log('Running at 3013');
})
