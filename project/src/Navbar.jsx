
// import React from 'react';
// // import { useState } from 'react';
// import { Link } from 'react-router-dom/cjs/react-router-dom.min';

// // import { SidebarData } from './SidebarData';





// const Navbar = () => {

//   // const [sidebar, setSidebar] = useState(false)



//   // const showSidebar = () => setSidebar(!sidebar)


//   return (
//       <>
      

//       <div className="navbar">
//         <Link to="#" className="menu-bars">
//      {/* <button onClick={showSidebar}> click</button> */}
//      EDU LOGO

//         </Link>
//         </div>

//           {/* <div  className={ sidebar ? "nav-menu active" : "nav-menu"}>
//         <ul className='nav-menu-items'> 
//         <li className='navbar-toggle'>
//           <Link to="#" className="menu-bar">
//                 <p><h1>+</h1></p>
//           </Link>
//         </li>

//         {SidebarData.map((item, index) => {
//           return(

//             <li key={index} className={item.cName}>
//               <Link to={item.Link}>
//                 icon
//                 <span>{ item.title}</span>
//               </Link>
            
//             </li>
//           )
           
          
//         })}


        
//         </ul>
//         </div>
//          */}


//           <div className='index'>

//             <ul>

//               <li>
//                 <link to ="#"> Dashboard</link>
//                 <link to ="#"> Catogorie</link>
//                 <link to ="#"> Conatct</link>
//                 <link to ="#"> AboutUs</link>
//               </li>
//             </ul>
//           </div>
          


         
        
        
        

   
      
//       </>
    

//   )
// };

// export default Navbar;


// IoSettings



import React from 'react'
import { Link } from 'react-router-dom';
import { GoDashboard } from "react-icons/go";
import { AiFillSetting} from "react-icons/ai"
import {MdAdminPanelSettings, MdContacts} from "react-icons/md"
import {FaList} from "react-icons/fa"
import img1 from "./Image/ramos.jpg";
import img2 from "./Image/logos.png"


const Navbar = () => {
  return (
    <>

   

    

    <div className="fullbar">

   
    

          

    <div className="navbar">

  <div className="topper">

  <div className='logo-top'>
          <Link className='link-underline' exact activeClassName="activee_class"   to="#"  >
            
          <img src={img2}  alt="/"  className="logo-png"/>
             </Link>
         
          
        </div>



      
    <div className='admin-top'>
          <Link className='link-underline' exact activeClassName="activee_class"   to="#"  >
            
          <div className='admin-icon'>
           <MdAdminPanelSettings/> <div className='display'> <i>admin  </i></div>
            </div> 
            </Link>
         
          
        </div>

        </div>
    
   


     
    
     
     <div className="extra">

     
     
        <li className='lli'>
          <Link  className='content' to="/Dashbord"  >
             <div className='react-icon'>
             <GoDashboard/>
            </div> 
            Dashbord</Link>
         
          
        </li>
        <li className='lli'>
        <Link  className='content' to="/Cateogory"  >
        <div className='react-icon'>
          <FaList/>
          </div>
           Cateogory</Link>

        </li>

        <li className='lli'>
        <Link   className='content' to="#" >
        <div className='react-icon'>
          <MdContacts/> 
          
          </div>
         Subject
         
          </Link>
         
        </li>

        <li className='lli'>
        <Link  className='content' to="/Cateogory"  >
        <div className='react-icon'>
          <FaList/>
          </div>
           Unit</Link>

        </li>


        <li className='lli'>
        <Link  className='content' to="/Cateogory"  >
        <div className='react-icon'>
          <FaList/>
          </div>
          Sub Unit</Link>

        </li>




        </div>

        <div className="setting">
        <li className='lli'>
        <Link exact activeClassName="activee_class" className='content' to="/Cateogory"  >
        <div className='react-icon'>
          <AiFillSetting/>
          </div>
          Setting   </Link>

        </li>


        </div>
       
     
    </div>
    </div>
    
    </>
   
  )
};

export default Navbar;

