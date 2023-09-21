import logo from './logo.svg';
import './App.css';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
import {routes} from './routes';
import { useEffect } from 'react';

function App() {
  var location = useLocation();
  var navigate = useNavigate();


  function verifyLogin(){

    if(location.state && location.state.redirect)
    return;
    
    var loginData = localStorage.getItem("login");
    if(loginData=="null"){

      navigate('/login?redirect=true',{state:{redirect:true}})
    }
  }


  useEffect(()=>{

    verifyLogin();

  },[location])


  return (
    <div className="App">

      {!location.pathname.includes('login')? <Sidebar /> : null }
      <div className='page-sect'>
      {!location.pathname.includes('login')?  <Navbar /> : null }
      
      
        <Routes>
          {routes.map(val=>(
            <Route path={val.path} element={val.element} />
          ))}
        </Routes>

      </div>
    </div>
  );
}

export default App;
