import React from "react";
import './Contact.css'

const Contact=()=>{
    return(
        <div className="Contact" >
            <div className="Container">
                         <h1>Drop Me A line</h1>
                         <div>
                            <form>
                              <div className="firstin">
                                <input type="text" placeholder="Your name"/>
                               <input type="email" placeholder="Your email"/></div>
                              <div className="secondin"><input type="text" placeholder="your sobject"/></div>
                              <textarea placeholder="enter massage"></textarea>
                              <button>Send message</button>
                            </form>
                         </div>
            </div>
        </div>
    )
}
export default Contact