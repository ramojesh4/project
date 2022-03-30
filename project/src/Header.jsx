
import React from 'react'
import img1 from "./Image/ramos.jpg";
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="head">

<Link  exact activeClassName="activee_class"   to="#"  >
      
    <div className="profile">

<div className="profile-name">
    <p> Profile</p>
    </div>
    
  <div className="user-photo">
<img src={img1}  alt="/"  className="photo"/>

  </div>
</div>

</Link>

    </div>
  )
}

export default Header;