import './App.css';
import React from 'react'
import Welcome from './Welcome';
import Login from './Login';
import Forgot from './forgot';
import Home from './home'
import Create from './create'
import Search from './Search';
import Lyrics from './lyrics'
import Player from './player';

export default function App(){

return(<Route></Route>)
}
function Route(){
  if(window.location.pathname==='/home'){
    return (<Home></Home>)
   }
   else if(window.location.pathname=='/forgot'){
    return (<Forgot></Forgot>)
   }
   else if(window.location.pathname=='/create'){
    return(<Create></Create>)
   }
   else if(window.location.pathname=='/login'){
    return(<Login></Login>)
   }
   else if(window.location.pathname=='/search'){
    return(<Search></Search>)
   }
   else if(window.location.pathname=='/lyrics'){
    return (<Lyrics></Lyrics>)
   }
   else if(window.location.pathname=='/player'){
    return (<Player></Player>)
   }
   else if (window.location.pathname==='/'){
    return (<Welcome></Welcome>)
   }
}