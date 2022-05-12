import React from 'react'
//importing in an important library for the scroll functionality
import zingtouch from 'zingtouch'

class Controls extends React.Component{

  constructor(){
    super()
    this.state={
      angle:0,
      c:false,
      p:null
    }
  }
  
  render(){
    const {isPlaying,currentSongIndex}=this.props  //props destructuring
    return (
      <div className='controls' id="controls" >
        <div className='row1' id="row1" onClick={this.props.go_Back}>MENU</div>    {/* menu button */}
        <div className='row2' id="row2">
            
          <i className="fa-solid fa-backward-fast fa-2x" onClick={this.props.backward}></i>   {/* forward button */}
          <div className='select' onClick={this.props.go}></div>   {/* select button */}
          <i className="fa-solid fa-forward-fast fa-2x" onClick={this.props.forward}></i>   {/* backward button */}
            
        </div>
        <div className='row3' id="row3">
          <i className={`fa-solid fa-${isPlaying&&(currentSongIndex!=null)?"pause":"play"} fa-2x `} onClick={this.props.player_function}></i>    {/* play-pause button */}
          {/*  notice that we can do this template string only inside `` and since its a js expression,
          we put the whole thing inside {} */}
        </div>
      </div>
    )
  }
  

  componentDidMount(){
    var s=0

    //some initialization into the zing stuff
    var Elem=document.getElementById('controls')
    var reg= new zingtouch.Region(Elem)
    var obj=reg.bind(Elem)

    //we use the rotate function and the play with the angle and distanceFromLast property of the e object
    obj.rotate((e)=>{
      s+=e.detail.distanceFromLast //to add on the angle moved

      //this c state variable is false only at the first touch, and is then true, so this doesnt run
      if(this.state.c===false){
        this.setState({
          angle:s.toFixed(2),  //setting into the state so that it can be used later
          c:true
        })
      }

      //setting p=1 whenever we move clockwise (changes happen after 60 degree)
      if(s-this.state.angle>60&&this.state.c===true){
        this.setState({
          angle:s.toFixed(2),  //same as above
          p:1
        },()=>{
          this.props.selectPage(this.state.p) //we send this is a callback, so that this runs only after setstate is done
        })  
      }

      //setting p=-1 whenever we move anticlockwise (changes happen after 60 degrees)
      if(this.state.angle-s>60&&this.state.c===true){
        this.setState({
          angle:s.toFixed(2),  //same as above
          p:-1
        },()=>{
          this.props.selectPage(this.state.p)  // same as above
        })  
      }    
    })
  }
}

export default Controls