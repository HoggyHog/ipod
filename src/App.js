
import React from 'react'
import Display from './Display'
import Controls from './Controls'

import img1 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/images/fish_room.jpeg'
import img2 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/images/no_turning_back.jpeg'
import img3 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/images/waterfall.jpeg'

import audio1 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/music/Fish Room - Verified Picasso.mp3'
import audio2 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/music/No Turning Back (Clean) - NEFFEX.mp3'
import audio3 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/music/Waterfall - Aakash Gandhi.mp3'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      songs:[
        {
          title:"Fish Room",
          artist:"Verified Picasso",
          img_src:"src/images/fish_room.jpeg",
          song_src:"src/music/Fish Room - Verified Picasso.mp3"
        },
        {
          title:"No Turning Back",
          artist:"NEFFEX",
          img_src:"src/images/no_turning_back.jpeg",
          song_src:"src/music/No Turning Back (Clean) - NEFFEX.mp3"
        },
        {
          title:"Waterfall",
          artist:"Aakash Gandhi",
          img_src:"src/images/waterfall.jpeg",
          song_src:"src/music/Waterfall - Aakash Gandhi.mp3"
        }
      ],
      images:[img1,img2,img3],
      audios:[audio1,audio2,audio3],
      currentSongIndex:null,
      nextSongIndex:0,
      page:0,
      component:-1,
      isPlaying:true
    }
  }

  updateNextSongIndex=()=>{
    if (this.state.currentSongIndex+1>this.state.songs.length-1){
      this.setState({
        nextSongIndex:0
      })
    }
    else{
      this.setState({
        nextSongIndex:this.currentSongIndex+1
      })
    }
  }

  

  selectPage=(c)=>{
    if(this.state.component==1){
      var p=(this.state.page+c)%3
      this.setState({
        page:p,
      }) 
    }
    else{
      var p=(this.state.page+c)%4
      this.setState({
        page:p
    }) 
    }
    
  }

  goto_Page=()=>{
    this.setState({
      component:this.state.page
    },()=>{
      if(this.state.component==1){
        this.setState({
          page:0
        })
      }
      console.log("component",this.state.component)
      console.log("page",this.state.page)
      console.log("song",this.state.currentSongIndex)
    })
  }

  music_goto=()=>{  
    this.setState({
      currentSongIndex:this.state.page
    },()=>{
      
      console.log("component",this.state.component)
    console.log("page",this.state.page)
    console.log("song",this.state.currentSongIndex)
      
    })
  }
  go=()=>{
    console.log("component",this.state.component)
    console.log("page",this.state.page)
    if(this.state.component==1){
      this.music_goto()
    }
    else{
      this.goto_Page()
    }
  }

  
  go_Back=()=>{
    if(this.state.currentSongIndex!=null){
      this.setState({
        component:1,
        currentSongIndex:null
      })
    }
    else{
      this.setState({
        component:-1
      })

    }
  }

  player_function=()=>{
    this.setState({
      isPlaying:!(this.state.isPlaying)
    })
  }

  forward=()=>{
    var c;
    if(this.state.currentSongIndex+1==this.state.songs.length){
      c=0;
    }
    else{
      c=this.state.currentSongIndex+=1
    }
    this.setState({
      currentSongIndex:c
    })
  }
  backward=()=>{
    var c;
    if(this.state.currentSongIndex==0){
      c=this.state.songs.length-1;
    }
    else{
      c=this.state.currentSongIndex-=1
    }
    this.setState({
      currentSongIndex:c
    })
  }

  render(){
    const {page,
      component,
      songs,
      images,
      currentSongIndex,
      nextSongIndex,
      updateNextSongIndex,
      isPlaying,
      audios
      }=this.state
    return (
      <div className='app'>
        <Display 
        page={page} 
        component={component} 
        songs={songs}
        images={images}
        currentSongIndex={currentSongIndex}
        nextSongIndex={nextSongIndex}
        updateNextSongIndex={updateNextSongIndex}
        isPlaying={isPlaying}
        audios={audios}
        />
        <Controls 
        selectPage={this.selectPage}
        goto_Page={this.goto_Page} 
        go_Back={this.go_Back}
        music_goto={this.music_goto}
        go={this.go}
        player_function={this.player_function}
        forward={this.forward}
        backward={this.backward}
        isPlaying={isPlaying}
        currentSongIndex={currentSongIndex}
        />
      </div>
    )
  } 
}



export default App




