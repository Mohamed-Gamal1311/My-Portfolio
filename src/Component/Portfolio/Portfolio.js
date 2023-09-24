import React from "react";
import './portfolio.css'
import Image1 from '../Portfolio/Image-port/portfolio-img1.jpg'
import Image2 from '../Portfolio/Image-port/portfolio-img2.jpg'
import Image3 from '../Portfolio/Image-port/portfolio-img3.jpg'
import Image4 from '../Portfolio/Image-port/portfolio-img4.jpg'

import Image5 from '../Portfolio/Image-port/portfolio-img5.jpg'
import Image6 from '../Portfolio/Image-port/portfolio-img6.jpg'
import Image7 from '../Portfolio/Image-port/portfolio-img4.jpg'
import Image8 from '../Portfolio/Image-port/portfolio-img8.jpg'
const Portfolio=()=>{
    return(
    <div className="Portfolio" id="Portfolio">
            <h1>My Portfolio</h1>
        <div className="Content">
            <p className="first">All</p>
            <p>Html</p>
            <p>photoshop</p>
            <p>wordpress</p>
            <p>Mobile</p>
    </div>      
    <div className="card">
            
                <div className="state">
                      <img src={Image1}/>
                      <div className="button"><button>show image</button></div>
                </div>
                <div className="state">
                      <img src={Image2}/>
                      <div className="button"><button>show image</button></div>
                </div>
                <div className="state">
                      <img src={Image3}/>
                      <div className="button"><button>show image</button></div>
                </div>
                <div className="state">
                      <img src={Image4}/>
                      <div className="button"><button>show image</button></div>
                </div>
                <div className="state">
                      <img src={Image5}/>
                      <div className="button"><button>show image</button></div>
                </div>
                <div className="state">
                      <img src={Image6}/>
                      <div className="button"><button>show image</button></div>
                </div>
                <div className="state">
                      <img src={Image7}/>
                      <div className="button"><button>show image</button></div>
                </div>
                <div className="state">
                      <img src={Image8}/>
                      <div className="button"><button>show image</button></div>
                </div>
          
    </div>
            
        
        </div>
    )
}
export default Portfolio