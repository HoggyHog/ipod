import React, { useEffect ,useRef} from 'react'


function Player(props) {
  const {images,page,songs,isPlaying,audios}=props

  const AudioEl=useRef(null)

  useEffect(()=>{
    if(isPlaying){
      AudioEl.current.play()
    }
    else{
      AudioEl.current.pause()
    }
  })
  const {currentSongIndex}=props
  return (
    <div className="big-display player">
        <img src={images.at(currentSongIndex)}></img>
        <audio src={audios.at(currentSongIndex)} ref={AudioEl}></audio>
        <div>{songs.at(currentSongIndex).title}</div>
        <div>{songs.at(currentSongIndex).artist}</div>
    </div>
  )
}

export default Player