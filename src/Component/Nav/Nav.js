import React,{useState} from "react";
import './Nav.css'
import image from './Image/open.png'
import { Link} from "react-router-dom";

const Nav=()=>{
    const[open,close]=useState(false);
return(


<div className="Nav">
    <div className="container">
        <div className="nav-content">
         <h1>My Portfolio</h1>
          <ul className="ul" style={{right:open? '0':'-300px'}}>
                  <li> <Link to="/" onClick={()=>{open?close(false):close(true)}}>Home</Link></li>
                  <li> <a href="#work" onClick={()=>{open?close(false):close(true)}}>Work</a></li>
                  <li> <a href="#Portfolio" onClick={()=>{open?close(false):close(true)}}>Protofolio</a></li>
                  <li> <a href="/" onClick={()=>{open?close(false):close(true)}}>Resume</a></li>
                  <li> <a href="#About" onClick={()=>{open?close(false):close(true)}}>About</a></li>
                   <li><Link to="/Contact" onClick={()=>{open?close(false):close(true)}}>Contact</Link></li>
            </ul>
       

            <div className="image" onClick={()=>{open?close(false):close(true)}} ><img src={image} alt></img> </div>
        
        </div>
        
      

    </div>
    
    




</div>

)

}
export default Nav