import React, { useEffect, useState } from 'react'
import HomePage from './Pages/Homepage'

import Coverflow from './Pages/Coverflow'
import Settings from './Pages/Settings'
import Games from './Pages/Games'
import Playlist from './Pages/Playlist'
import Player from './Player'
import { renderIntoDocument } from 'react-dom/test-utils'


function Display(props) {


  if(props.component==-1){
    return(<HomePage page={props.page} />)  
  }
  if(props.component==0){
    return(<Coverflow />)  
  }
  if(props.component==1){
    if(props.currentSongIndex===null){
        return(<Playlist 
          page={props.page} 
          component={props.component}
          songs={props.songs}
          images={props.images}
          currentSongIndex={props.currentSongIndex}
          nextSongIndex={props.nextSongIndex}
          updateNextSongIndex={props.updateNextSongIndex}
          />)  

    }
    else{
      return(<Player
        page={props.page} 
        component={props.component}
        songs={props.songs}
        images={props.images}
        currentSongIndex={props.currentSongIndex}
        nextSongIndex={props.nextSongIndex}
        updateNextSongIndex={props.updateNextSongIndex}
        isPlaying={props.isPlaying}
        audios={props.audios}
      />)
    }


  }
  
  if(props.component==2){
    return(<Games />)  
  }
  if(props.component==3){
    return(<Settings />)  
  }
}





export default Display