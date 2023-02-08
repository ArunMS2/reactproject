import React from "react";
import { Component } from "react";
import './Welcome.css';



class Welcome extends Component{

    render() {
        return(
            <body className="welcome-main">
                    <div className="welcome-nav-item">
                        <a className="welcome-navbar-brand" href="/">Allegro</a>
                    </div>
                    <div className="welcome-main-row">
                        <div className="welcome-main-row-img">
                            <img className="welcome-head-phone-img" src="Headphones Icon-221493_thumb.png"></img>
                        </div>
                        <div className="welcome-main-row-text">
                            <h1>Music for everyone</h1>
                            <p>Without music, life would be a mistake</p>
                            <h2><a href="/login">START LISTENING</a></h2>
                        </div>
                    </div>
            </body>
        )
    }
}


export default Welcome;