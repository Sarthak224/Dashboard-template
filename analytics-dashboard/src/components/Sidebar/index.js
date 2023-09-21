import { useState } from 'react';
import reactLogo from '../../logo.svg'
import Dashboard from '../SidebarComponents/Dashboard';
import EcommerceSidebarSect from '../SidebarComponents/Ecommerce';
import { sidebar_navigation } from '../../routes';
import SidebarRoutes from '../SidebarComponents';
export default function Sidebar(){
    
    const [hideClass,setHideClass] = useState(false);
    
    return(
       <div className={hideClass?"sidebar-main sidebar-hide":"sidebar-main"}>
       <div className="sidebar-main-top-header">
        <img src={reactLogo} width="70" height="70"></img>
        <h3 style={{fontWeight:"normal",marginBottom:"-3px"}}> <b>React Dashboard</b></h3>
        <i  className={hideClass?"fas fa-bars sidebar-icons":"fas fa-times sidebar-icons"} style={{marginLeft:"auto",marginRight:"22px",cursor:"pointer",marginBottom:"-3px"}}  onClick={()=>setHideClass(!hideClass)}></i>  
        </div>
         <div className='dashboard-sidebar-routes'>
            {sidebar_navigation.map(val=>{
                return (
                    <SidebarRoutes title={val.title} subroutes={val.subroutes} />
                )
            })}
         </div>
       </div>
    );
}