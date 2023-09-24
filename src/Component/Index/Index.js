
import React ,{Component} from 'react';

import About from '../About/About'
import Home from '../Home/Home';
import Work from '../Work/work';
import Portfolio from '../Portfolio/Portfolio';
import MyProfile from '../MyProfile/MyProfile';
import Social from '../Social/Social';
import Footer from '../Footer/Footer'





function Index() {
  return (
    
   
    <div className="Index">
   
      <Home/>
      <Work/>
      <Portfolio/>
      <MyProfile/>
      <About/>
      <Social/>
     <Footer/>
      
    </div>
   
    
    
  );
}

export default Index
