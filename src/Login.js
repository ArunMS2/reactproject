import React, { Component } from 'react';
import Logo from './ALLEGRO 1.png'


import './Login.css';

function Login(){
       
    return(
            <div className='main-login'>
             <div className='login-contain' >
               
            <img class='image-login' src={Logo}></img>
            <div className="a-login">
                     
                </div>
                
            <div className='left-side-login'>
                <label id='label-login' for="email">Email</label>
                    
                    <input type="email" placeholder="Enter your email..."  id="input-login"/>
                <label id='label-login' for="password">Password</label>
                    
                    <input type="password" placeholder="Enter password" id="input-login"/>
                    
                <div>
                 <p className="forget-login">
                    <a href="/forgot">Forgot Password?</a>
                 </p>
                </div>
                <button className='hbutton-login' onClick={()=>{window.location.pathname='/home'}}>Login</button>
                    <br></br>
            <div style={{ borderTop: "2px solid gray ", marginLeft: 20, marginRight: 20 ,marginTop:30}}></div>
                    <div className="s-login">Don't have an Account ?</div>
                    <div className="x-login">Create your Allegro Account</div>
                    <div className="create-login">
                 
                <button classname="button-login" onClick={()=>{window.location.pathname='/create'}} className="btn-login">Register now</button>
                </div>
            </div>
                
                 
                
            </div>
        </div >
        ) 
    
}


export default Login;