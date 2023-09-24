import React from "react";
import Imageso1 from '../Social/Image-Social/Capture3.PNG'
import Imageso2 from '../Social/Image-Social/Capture6.PNG'
import Imageso3 from '../Social/Image-Social/Capture7.PNG'
import './Social.css'

const Social = () => {
    return (
        <div className="social">
            <div className="ppp">
                
                    <div className="parent">
                       <div className="image-social"><a href="" ><img src={Imageso1} alt="ddd" /></a></div>
                        <div>
                            <span className="span1">Follow Me</span>
                            <span className="span2.">On Facebook</span>
                        </div>
                    </div>
                    <div className="parent">
                       <div className="image-social"><a href="" ><img src={Imageso2} alt="ddd" /></a></div>
                        <div>
                            <span className="span1">follow me</span>
                            <span className="span2.">On Github</span>
                        </div>
                    </div>
                    <div className="parent">
                       <div className="image-social"><a href="" ><img src={Imageso3} alt="ddd" /></a></div>
                        <div>
                            <span className="span1">follow me</span>
                            <span className="span2.">LinkedIN</span>
                        </div>
                    </div>


            
            </div>
        </div>
    )
}
export default Social