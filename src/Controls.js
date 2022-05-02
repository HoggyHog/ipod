import React from 'react'
import zingtouch from 'zingtouch'

class Controls extends React.Component{

  constructor(){
    super()
    this.state={
      counter:null,
      angle:0,
    
      p:null
    }
  }
  
  render(){
    
    return (
      <div className='controls' id="controls" >
          <div className='row1' id="row1" onClick={this.props.go_Back}>MENU</div>
          <div className='row2' id="row2">
            
            <i className="fa-solid fa-backward-fast fa-2x"></i>
            <div className='select' onClick={this.props.go}>
              
            </div>
            <i className="fa-solid fa-forward-fast fa-2x" ></i>
            
          </div>
          <div className='row3' id="row3">
            <i className="fa-solid fa-play fa-2x"></i>
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

      if(s-this.state.angle>60){
        this.setState({
          angle:s.toFixed(2),
          p:1
        })
        this.props.selectPage(this.state.p)
        console.log(this.state.p)
      }

      if(this.state.angle-s>60){
        this.setState({
          angle:s.toFixed(2),
          p:-1
        })
        this.props.selectPage(this.state.p)
        console.log(this.state.p)
      }  

    })
  }
}


  




export default Controls