import Card from "../components/Card"
import loginImg from '../assets/login.svg'
import { Button, Col, Input, Label,Row } from "reactstrap"
import { useState } from "react";
import { useNavigate } from "react-router-dom";

  import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
export default function Login(){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    
    const notify = () => toast.error("Login Failed!");
    const navigate = useNavigate();

 async function login(){
  try{
    var dataRes = await axios.post('http://localhost:3013/api/users/admin/login',{email,password},{ headers: {
      'Content-Type': 'application/json;charset=UTF-8',
      "Access-Control-Allow-Origin": "*",
  }})
    if(dataRes.data){
    localStorage.setItem("login",dataRes.data.token)
    
    navigate('/');
    }
  }catch(e){
    console.log(e)
    notify();

  }
  }

  


    return (
        <div className={"page-sect-card "+"login-page"} >
            <Row className={"page-sect-card "+"login-page"} >
        <Col className="login-col1" md="6" style={{minWidth:"500px",alignItems:"center",display:"flex"}}>
          <img src={loginImg} width="500"/>
        </Col>
        <Col md="6" className="login-col2">
          
          <div className="login-form" style={{justifyContent:"center",display:"flex",height:"100%",flexDirection:"column",padding:"0px 38px"}}>
          <div style={{width:"100%"}}>
          <hr style={{float:"left"}} />

          </div>
          <h2>Admin Login</h2>
          <Label className="login-form-label">E-mail</Label>
          <Input onChange={(e)=>setEmail(e.target.value)} placeholder="eg:abc@mail.com"/>
          <Label className="login-form-label">Password</Label>
          <Input onChange={(e)=>setPassword(e.target.value)} placeholder="Enter Password" />  

          <Button onClick={login} color="" className="btn-login btn-font-large">Login</Button>

          <div style={{marginTop:"30px"}}>
            <span style={{margin:"20px",paddingBottom:"20px"}}><b>Forgot Password</b></span><br/><br/>
            <span style={{margin:"20px"}}>Already have an account?</span>
          </div>
          </div>  
        </Col>
        </Row>
        <ToastContainer />

        </div>
    )
}