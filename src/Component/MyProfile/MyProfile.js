import React from "react";
import './MyProfile.css'

const MyProfile=()=>{
    return(
        <div className="My-Profile" id="My-Profile">
            <div className="Container">
                <div className="content">
                   
                    <div className="part1">
                        <h1> Some<span>Skills</span></h1>
                        <p>These are some of the skills I can do.</p>
                        <h5>Html<span>100%</span></h5>
                        <span className="firstspan"></span>
                        <h5>Css3<span className="second">90%</span></h5>
                        <span className="secondspan"></span>
                        <h5>JavaScript<span>80%</span></h5>
                        <span className="thirdspan"></span>
                        <h5>React<span>85%</span></h5>
                        <span className="forth"></span>
                        <h5>Bootstrap<span>70%</span></h5>
                        <span className="fifth"></span>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default MyProfile