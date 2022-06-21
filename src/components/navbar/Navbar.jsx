import React from "react";
import '../../App.css'
const Navbar = () => {
    return (
      <nav className='nav'>
         <div>
           <a>Profile</a> 
              <a><div>Messages</div></a>
              <a><div>News</div></a>
              <a><div>Music</div></a>
              <a><div>Settings</div></a>
         </div>
      </nav>
    )
}

export default Navbar