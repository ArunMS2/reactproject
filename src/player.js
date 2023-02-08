import React from "react";
import { Component } from "react";
import arr from './left.png';
import './player.css';
class Player extends Component{
    render()
    {
        return(
            <div className="player-main">
            <div className="player-body">
           <div className="player-navbar" >
            <img src={arr} className="player-arrow" onClick={()=>{window.location.pathname='/home'}}></img>
           </div>
         
   
    <div class="player-center">
    <audio src="music.mp3" type="audio/mp3" controls></audio>
</div>
<div className="player-container">
    <h2>Ranjithame(From "Varisu")</h2>
    </div>
        <button className="player-button" onClick={()=>{window.location.pathname='/lyrics'}}>Lyrics</button>
    </div>
    </div>
        )
    }
}


export default Player;