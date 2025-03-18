import React from "react";
import "./Form.css"

const Form=()=>{
    return(
        <>
            <div className="main-container-form">
                <h3 className="form-h3">SUBSCRIBE TO OUR NEWSLETTER</h3>
                <h2 className="form-h2">Get weekly updates</h2>
                <form className="form-fields">
                    <h4 className="form-h4">Fill in your details to join the party!</h4>
                        <input type="text" placeholder="Your name" className="form-input"/>
                        <input type="email" placeholder="Email address" className="form-input"/>
                    <button className="form-btn" type="submit">SUBMIT</button>
                </form>
            </div>
        </>
    );
}

export default Form;