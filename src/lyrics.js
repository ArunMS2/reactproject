import React from "react";
import { Component } from "react";
import arr from './left.png';
import './lyrics.css';

class Lyrics extends Component{
    render()
    {
        return(
        <div>
  
  <header className="lyrics-head">
  <div className="lyrics-navbar" >
            <img src={arr} className="lyrics-arrow" onClick={()=>{window.location.pathname='/home'}}></img>
           </div>
    <div className="lyrics-main">
    
<h1>RANJITHAME</h1>
  
    </div>

   <div className="lyrics-box">
   <div className="lyrics-lines" >
Kattu malli katti vachaa<br/>
Vatta karuppu pottu vachaa<br/>
Chandhiranil rendu vacha<br/>
Saara paambu iduppa vacha<br/>
Natchathira thotti vachaa<br/>
Karumbu kodu nethi vachaa<br/>
Inji vetti kannam vachaa<br/>
Immathundu vetkam vachaa<br/>
Nethi pottil enna thooki<br/>
Pottu pola vachavalae<br/>
Suththu pattu oore paakka<br/>
Kannu pattu vandhavalae<br/>
Thethu pallu orathula<br/>
Uchu kottum nerathula<br/>
Pattunu pathiyae<br/>
Uchcha kattam thottavale<br/>
Hey ranjithamae…hey ranjithamae<br/>
Hey ranjithamae…ranjithamae<br/>
Manasa kalaikum mandhiramae<br/>
Ranjithamae ranjithamae<br/>
Unna udhadu valikka konjanumae<br/>
Adi…ranjithamae ranjithamae<br/>
Manasa kalaikum mandhiramae<br/>
Ranjithamae ranjithamae<br/>
Unna udhadu valikka konjanumae<br/>
Nee vandhadhum<br/>
Vandhadhum vandhadhum<br/>
Manasu sathiramae sathirame<br/>
Aada vandhalae<br/>
 Hey ranjithamae<br/>
Hey ranjithamae<br/>
Hey ranjithamae<br/>
Hey ranjithamae……<br/>
Hey ranjithamae<br/>

</div>
         
      </div>
    
  </header>
  </div>

        )
    }
  }
  export default Lyrics;

