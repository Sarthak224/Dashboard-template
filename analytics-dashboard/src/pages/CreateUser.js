import React from 'react'
import { Input, Label,Button } from 'reactstrap'
import { useState,useEffect } from 'react';

import { useNavigate } from "react-router-dom";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";


function CreateUser() {

   
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [name,setName] = useState("");
    const [phone,setPhone] = useState("")
    
    const notify = () => toast.error("Failed Creating User!");
    const notifySuccess = () => toast.success("Created Successfully");

    const navigate = useNavigate();

 async function createUser(){
  try{
    var dataRes = await axios.post('http://localhost:3013/api/users/admin/createUser',{email,password,name,phone},{ headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }})
    if(dataRes.data){
    // localStorage.setItem("login",dataRes.data.token)
    
    notifySuccess();

    }
  }catch(e){
    console.log(e)
    notify();

  }
  }



  return (
    <div className='page-sect-card' >
<div style={{height:"00px"}}></div>
<h2 style={{padding:"13px 6px",background:"linear-gradient(to right,#2254eac9,#f1f1f1)",width:"100%",margin:"auto",fontSize:"16PX"}}>Create New User</h2>

<div style={{width:"100%",padding:"30px",margin:"auto",backgroundColor:"#fff",borderRadius:"6px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px"}}>
       
    <Label className="login-form-label">E-mail</Label>
          <Input onChange={(e)=>setEmail(e.target.value)} placeholder="eg:abc@mail.com"/>
          <Label className="login-form-label">Password</Label>
          <Input onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />  
          <Label className="login-form-label">Fullname</Label>
          <Input onChange={(e)=>setName(e.target.value)} placeholder="Enter Full name" />  
          <Label className="login-form-label">Phone number</Label>
          <Input onChange={(e)=>setPhone(e.target.value)} placeholder="Enter Phone no." />  
          <Button onClick={createUser} color="" className="btn-login btn-font-large">Create new User</Button>
         
          <ToastContainer />

    </div>
    </div>
  )
}

export default CreateUser