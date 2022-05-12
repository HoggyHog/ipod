import React from 'react'
import HomePage from './Homepage'
import Coverflow from './Pages/Coverflow'
import Settings from './Pages/Settings'
import Games from './Pages/Games'
import Playlist from './Pages/Playlist'
import Player from './Pages/Player'

function Display(props) {

  //based on the component of the state, we set up the component to be returned
  if(props.component===-1){
    return(<HomePage page={props.page} />)  
  }
  if(props.component===0){
    return(<Coverflow />)  
  }
  if(props.component===1){    //when we select into music
    if(props.currentSongIndex===null){      //when we havent selected a song yet
        return(<Playlist 
          page={props.page} 
          component={props.component}
          songs={props.songs}
          images={props.images}
          />)  

    }
    else{
      return(<Player
        songs={props.songs}
        images={props.images}
        currentSongIndex={props.currentSongIndex}        
        isPlaying={props.isPlaying}
        audios={props.audios}
      />)
    }
  }
  
  if(props.component===2){
    return(<Games />)  
  }
  if(props.component===3){
    return(<Settings />)  
  }
}


export default Display