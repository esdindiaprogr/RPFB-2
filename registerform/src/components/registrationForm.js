import React, {useState} from 'react';
import {Button} from 'react-bootstrap';
import './style.css'
function RegistrationForm() {
    return(
      <div className="form">
          <div className="form-body">
              <div className="username">
                  <label className="form__label" for="firstName">Name </label>
                  <input className="form__input" type="text" id="firstName" placeholder="Your Name"/>
              </div>

              <div className="email">
                  <label className="form__label" for="email">Email </label>
                  <input  type="email" id="email" className="form__input" placeholder="Your Email"/>
              </div>
             
              <div className="contact-number">
                  <label className="form__label" for="confirmPassword">Contact Number </label>
                  <input className="form__input" type="contact" id="contactNumber" placeholder="Enter Your Number"/>
              </div>
          </div>
          <div class="footer">
              <button type="submit" class="btn">Register</button>
          </div>
         {/* <div>
             <Button
          className="text-capitalize"
          variant={theme ? theme : "secondary"}
        >
          {theme ? theme : "Default"}
        </Button>
        </div> */}
      </div>      
    )       
}
export default RegistrationForm;
