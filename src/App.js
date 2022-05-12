
import React from 'react'
import Display from './Display'
import Controls from './Controls'

//importing in all images
import img1 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/images/fish_room.jpeg'
import img2 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/images/no_turning_back.jpeg'
import img3 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/images/waterfall.jpeg'

//importing in all audios
import audio1 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/music/Fish Room - Verified Picasso.mp3'
import audio2 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/music/No Turning Back (Clean) - NEFFEX.mp3'
import audio3 from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/music/Waterfall - Aakash Gandhi.mp3'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      songs:[     // songs data
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
      images:[img1,img2,img3],         //passing it off into state, so that its accessible as props
      audios:[audio1,audio2,audio3],

      //this variable helpsin playing song, and also somewhat in MENU clicks
      currentSongIndex:null,
      //page is the variable used to indicate the component which is highlighted at the moment
      page:0,
      //after the page is selected, we set the component to this page, and change display accordingly
      component:-1,
      //boolean for the song
      isPlaying:true
    }
  }
  
  //FUNCTIONALITIES

  selectPage=(c)=>{
    if(this.state.component===1){  //when we're inside the music component
      var p=(this.state.page+c)%3 //for changing p since theres 3 songs
      this.setState({
        page:p,
      }) 
    }
    else{                            //when were at homepage component
      var m=(this.state.page+c)%4    //there are 4 pages
      this.setState({
        page:m 
    }) 
    } 
  }

  go=()=>{   //is called after we click on the center button
    if(this.state.component===1){      //when we're inside the music component
      this.music_goto()
    }
    else{                             //else
      this.goto_Page()
    }
  }

  goto_Page=()=>{      //now that the page is set, we also set the component, to move to that component
    this.setState({
      component:this.state.page
    },()=>{          //callback to make page default so that in the next component, we start from top
      if(this.state.component===1){
        this.setState({
          page:0
        })
      }
    })
  }

  music_goto=()=>{   //specifically for playlist component
    this.setState({
      currentSongIndex:this.state.page //here we set current song index ->thats what we use in player
    })
  }

  
  go_Back=()=>{      //functionality for the back button
    if(this.state.currentSongIndex!=null){     //when were coming out of player
      this.setState({
        component:1,
        currentSongIndex:null,
        isPlaying:true
      })
    }
    else{               //when were coming out of any component into homepage
      this.setState({
        component:-1
      })

    }
  }

  player_function=()=>{        //functionality for play/pause
    this.setState({
      isPlaying:!(this.state.isPlaying)
    })
  }

  forward=()=>{               //functionality for forward
    var c;
    if(this.state.currentSongIndex+1===this.state.songs.length){
      c=0;
    }
    else{
      c=this.state.currentSongIndex+1
    }
    this.setState({
      currentSongIndex:c,
      isPlaying:true
    })
  }
  backward=()=>{               //functionality for backward
    var c;
    if(this.state.currentSongIndex===0){
      c=this.state.songs.length-1;
    }
    else{
      c=this.state.currentSongIndex-1
    }
    this.setState({
      currentSongIndex:c,
      isPlaying:true
    })
  }

  //RENDER

  render(){
    const {page,
      component,
      songs,
      images,
      currentSongIndex,
      isPlaying,
      audios
      }=this.state            //destructuring all state variables
    return (
      <div className='app'>
        <Display 
        page={page} 
        component={component} 
        songs={songs}
        images={images}
        currentSongIndex={currentSongIndex}
        isPlaying={isPlaying}
        audios={audios}
        />

        <Controls 
        selectPage={this.selectPage}
        go_Back={this.go_Back}
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




