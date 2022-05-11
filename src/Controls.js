import React from 'react'
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
    const {isPlaying,currentSongIndex}=this.props
    return (
      <div className='controls' id="controls" >
          <div className='row1' id="row1" onClick={this.props.go_Back}>MENU</div>
          <div className='row2' id="row2">
            
            <i className="fa-solid fa-backward-fast fa-2x" onClick={this.props.backward}></i>
            <div className='select' onClick={this.props.go}>
              
            </div>
            <i className="fa-solid fa-forward-fast fa-2x" onClick={this.props.forward}></i>
            
          </div>
          <div className='row3' id="row3">
            <i className={`fa-solid fa-${isPlaying&&(currentSongIndex!=null)?"pause":"play"} fa-2x `} onClick={this.props.player_function}></i>
          </div>
          
        </div>
    )
  }
  

  componentDidMount(){
    var s=0
    var Elem=document.getElementById('controls')
    var reg= new zingtouch.Region(Elem)
    var obj=reg.bind(Elem)

    obj.rotate((e)=>{
      s+=e.detail.distanceFromLast

      if(this.state.c==false){
        this.setState({
          angle:s.toFixed(2),
          c:true
        })
      }

      if(s-this.state.angle>60&&this.state.c==true){
        this.setState({
          angle:s.toFixed(2),
          p:1
        },()=>{
          this.props.selectPage(this.state.p) //we send this is a callback, so that this runs only after setstate is done
        })  
      }

      if(this.state.angle-s>60&&this.state.c==true){
        this.setState({
          angle:s.toFixed(2),
          p:-1
        },()=>{
          this.props.selectPage(this.state.p)  // same as above
        })  
      }    
    })
  }
}


  




export default Controls