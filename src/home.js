import React from "react";
import { Component } from "react";
import mainLogo from "./logo.png"
import hits1 from "./hits1.jpg";
import hits2 from "./hitss2.jpg";
import hits3 from "./hits3.jpg";
import hits4 from "./hits4.jpg";
import art1 from "./arr.jpg";
import art2 from "./harris.jpg";
import art3 from "./u1.jpg";
import art4 from "./shreya.jpg";
import './home.css';


class Home extends Component{
    render()
    {
    return(
        <>
        <div class="home-container">
    <div class="home-navbar">
        <img src={mainLogo} class="home-logo"/>
        <ul>
            <li><a href="/home">HOME</a></li>
            <li><a href="/search">SEARCH</a></li>
            <li><a href="/lyrics">LYRICS</a></li>
            <li><a href="/player">PLAYER</a></li>
        </ul>
    </div>
    <div className="home-hits">
        <h1>Biggest Hits</h1><br/><br/>
        <img src={hits1} className="home-hit1" onClick={()=>{window.location.pathname='/player'}}/>
        <img src={hits2} className="home-hit2"/>
        <img src={hits3} className="home-hit3"/>
        <img src={hits4} className="home-hit4"/>
    </div>
    <div className="home-artists">
        <h1>Best of Artists</h1><br/><br/>
        <img src={art1} className="home-art1"/>
        <img src={art2} className="home-art2"/>
        <img src={art3} className="home-art3"/>
        <img src={art4} className="home-art4"/><br/><br/>
    </div>
</div>
</>
    )
    }
}
export default Home;