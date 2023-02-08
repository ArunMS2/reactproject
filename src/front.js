import React from 'react';
import {Component} from 'react';
import './front.css';



class Front extends Component{
    render()
    {
        return(
            <body className='front-body'>
    <background className='front-bg' >
    <header className='front-header'>
      <h1>Lyrics Search</h1>

      <form className="front-form">
        <input className='front-input'
          type="text"
          id="search"
          placeholder="Enter artist or song name..."
        />
        <button className='front-button'><a href="/search">Search</a></button>
      </form>
    </header>

    
    <div id="more" class="front-container front-centered"></div>
   
    </background>
  </body>
        )
    }
}
export default Front;