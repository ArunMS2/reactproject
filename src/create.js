import React from "react";
import { Component } from "react";
import './create.css';

class Create extends Component{
    render()
    {
        return(
          <body className="create-body">
            <div class="create-signupFrm">
    <form action="" class="create-form">
      <h1 class="create-title">Create Account</h1>

      <div class="create-inputContainer">
        <input type="text" class="create-input" placeholder="a"/>
        <label for="" class="create-label">Email</label>
      </div>

      <div class="create-inputContainer">
        <input type="text" class="create-input" placeholder="a"/>
        <label for="" class="create-label">Username</label>
      </div>

      <div class="create-inputContainer">
        <input type="text" class="create-input" placeholder="a"/>
        <label for="" class="create-label">Password</label>
      </div>

      <div class="create-inputContainer">
        <input type="text" class="create-input" placeholder="a"/>
        <label for="" class="create-label">Confirm Password</label>
      </div>
    </form>
      <button class="create-button" onClick={()=>window.location.pathname='/home'}>Signup</button>
    <br/>
  </div>
  </body>
        )
    }
}

export default Create;