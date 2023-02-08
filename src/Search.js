import React from 'react';

import {Component} from "react";
import './search.css';

class Search extends Component{
    render()
    {
        return(
<body className='search-body'>
  <div className="search-container">
    <div>
      <div className="search-navbar">
      <input className="search-input" type="text" placeholder="Search your song..." />
        <ul>
          <li>
            <a href="/home">HOME</a>
          </li>
          <li>
            <a href="/search">SEARCH</a>
          </li>
          <li>
            <a href="/lyrics">LYRICS</a>
          </li>
          <li>
            <a href="/player">PLAYER</a>
          </li>
        </ul>
      </div>
      
    
    <div style={{ borderTop: "2px solid gray ", marginTop:25}}></div>
    <div className="search-sug"><h1>Recommended for you</h1></div><br/>
    <div className="search-sub1"><h2>Today's hits</h2></div>
    
      <img className="search-p1" src="vv.jpeg" alt="vv"></img>
      <img className="search-p2" src="var.jpeg" alt="varisu" onClick={()=>{window.location.pathname='/player'}}></img>
      <img className="search-p3" src="kt.jpg" alt="sid" ></img>
      <img className="search-p4" src="hri.jpeg" alt="hri" ></img>
      
    
    
    
    <div className="search-sub2"><h2>Recent Trending Albums</h2></div>
       
    <img className="search-p6" src="billie.jpg" alt="billie"></img>
      <img className="search-p7" src="bruno.jpg" alt="bruno" ></img>
      <img className="search-p8" src="dua.jpeg" alt="dua" ></img>
      <img className="search-p9" src="jons.jpg" alt="jons" ></img><br/>< br/>
    </div>
    </div>
    
  
    </body>
    
        )
    }
}
export default Search;
