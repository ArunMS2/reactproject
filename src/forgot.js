import React from "react";
import { Component } from "react";
import './forgot.css';

class Forgot extends Component{
    render()
    {
        return(
          <body className="forgot-body">
            <div class="forgot-signupFrm">
    <div action="" class="forgot-form">
      <h1 class="forgot-title">FORGOT PASSWORD</h1><br/><br/>

      <div class="forgot-inputContainer">
        <input type="text" class="forgot-input" placeholder="a"/><br/>
        <label for="" class="forgot-label" >Email</label>
      </div>

      <div class="forgot-inputContainer">
        <input type="text" class="forgot-input" placeholder="a"/><br/>
        <label for="" class="forgot-label" >Reset Password</label>
      </div>

      <div class="forgot-inputContainer">
        <input type="text" class="forgot-input" placeholder="a"/>
        <label for="" class="forgot-label">Confirm Password</label>
      </div>

     <button class="forgot-button" onClick={()=>window.location.pathname='/login'}>Submit</button>
    </div>
  </div>
  </body>
        )
    }
}

export default Forgot;