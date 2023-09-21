import { useState } from "react";
import { Link } from "react-router-dom";

export default function SidebarRoutes(props){


    const [menuHidden,setMenuHidden] = useState("menu-hidden");

    return (
        <div className="sidebar-content-main">
            <h6 className={menuHidden==""?"menu-open":""} onClick={()=>{ if(menuHidden=="")setMenuHidden("menu-hidden");else setMenuHidden("")}} style={{padding:"3px 0px"}}>{props.title} {menuHidden!=""?<i class="fas fa-chevron-down" style={{float:"right",marginRight:"60px",fontSize:"13px"}}></i>:<i class="fas fa-chevron-up" style={{float:"right",marginRight:"60px",fontSize:"13px"}}></i>}</h6>
            <div className={"dashboard-sidebar-routes "+menuHidden}>
                {props.subroutes.map(val=>(
                <Link to={""+val.url} style={{textDecoration:"none"}}><p style={{paddingLeft:"20px"}}><i className={val.icon+" sidebar-icons"}></i> {val.title}</p></Link>

                ))}
                {/* <p style={{paddingLeft:"20px"}}><i className="fas fa-file sidebar-icons"></i> Orders </p> */}

            </div>
        </div>
    )
}