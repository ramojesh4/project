import './App.css';
import React from 'react';
import { Switch, Route } from "react-router-dom";
import Navbar from './Navbar';
import Dashbord from './Dashbord';
import Cateogory from './Cateogory';
import Api from './Api';
import Header from './Header';
import axios from "axios";



const App = () =>{

  return(
 <>
 <div className='App'>

  <Header/>
 <Navbar/>
   <Switch>
     
   
   
  

   <Route exact path="/" component={Dashbord}/>
   <Route exact path="/Cateogory" component={Cateogory}/>
   {/* <Route path="/" element={<Catogorie/>}/>
   <Route path="/" element={<Contact/>}/>
   <Route path="/" element={<AboutUs/>}/> */}
   

   </Switch>

  
 </div>

 {/* <Cateogory/> */}
 {/* <Cateogory/> */}
 </>
        
 
  );
};

export default App;




// https://jsonplaceholder.typicode.com/posts
