import React, { useEffect ,useRef} from 'react'

function Player(props) {
  const {images,
      songs,
      isPlaying,
      audios,
      currentSongIndex
      }=props        //props destructuring

  const AudioEl=useRef(null)
      // so we make this AudioEl to access the audio element in the return

  useEffect(()=>{
    if(isPlaying){
      AudioEl.current.play()   //using functionality onto the selected element
    }
    else{
      AudioEl.current.pause()
    }
  })

  return (
    <div className="big-display player">
        {/* sending in all the data through the images, songs and audios array */}
        <img src={images.at(currentSongIndex)} alt="song bg"></img>
        <audio src={audios.at(currentSongIndex)} ref={AudioEl}></audio>  {/* giving the audio into the src */}
        <div>{songs.at(currentSongIndex).title}</div>
        <div>{songs.at(currentSongIndex).artist}</div>
    </div>
  )
}

export default Player