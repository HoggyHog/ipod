import React from 'react'
import HomePage from './Pages/Homepage'
import Music from './Pages/Music'
import Coverflow from './Pages/Coverflow'
import Settings from './Pages/Settings'
import Games from './Pages/Games'



function Display(props) {

  if(props.component==-1){
    return(<HomePage page={props.page} />)  
  }
  if(props.component==0){
    return(<Coverflow />)  
  }
  if(props.component==1){
    return(<Music page={props.page}/>)  
  }
  if(props.component==2){
    return(<Games />)  
  }
  if(props.component==3){
    return(<Settings />)  
  }

}



export default Display