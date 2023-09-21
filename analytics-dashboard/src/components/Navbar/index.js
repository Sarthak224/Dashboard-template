import { useNavigate } from "react-router-dom";
import { DropdownItem, DropdownMenu, DropdownToggle, UncontrolledDropdown } from "reactstrap";

export default function Navbar(){
    const navigate = useNavigate();

    return (
        <div className="navbar-main">
        <div>

        </div>
        <div>
        <i class="fas fa-bell"></i>

        </div>
        <div>
        <UncontrolledDropdown>
        <DropdownToggle className="dropdown-toggle-cont">
        <i class="fas fa-user" style={{borderRadius:"50%",backgroundColor:"#cac8ee",fontSize:"13px",padding:"6px"}}></i>

        </DropdownToggle>


        <DropdownMenu>
            <DropdownItem onClick={()=>{localStorage.setItem("login",null);navigate('/login')}}>Logout</DropdownItem>
            <DropdownItem></DropdownItem>

        </DropdownMenu>

        </UncontrolledDropdown>

        </div>
        </div>
    )
}