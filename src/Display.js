import React from 'react'
import HomePage from './Pages/Homepage'
import Music from './Pages/MusicPages/Music'
import Coverflow from './Pages/Coverflow'
import Settings from './Pages/Settings'
import Games from './Pages/Games'
import AllSongs from './Pages/MusicPages/AllSongs'
import Albums from './Pages/MusicPages/Albums'
import Artists from './Pages/MusicPages/Artists'

function Display(props) {

  if(props.component==-1){
    return(<HomePage page={props.page} />)  
  }
  if(props.component==0){
    return(<Coverflow />)  
  }
  if(props.component==1){
    return(<Music page={props.page} component={props.component}/>)  
  }
  if(props.component==10){
    return(<AllSongs/>)  
  }
  if(props.component==11){
    return(<Artists/>)  
  }
  if(props.component==12){
    return(<Albums/>)  
  }
  
  if(props.component==2){
    return(<Games />)  
  }
  if(props.component==3){
    return(<Settings />)  
  }

}



export default Display