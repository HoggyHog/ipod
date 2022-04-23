import React from 'react'


class Controls extends React.Component{
  mouse=(e)=>{
    var w=(e.clientY/window.innerHeight)-0.6
    var h=(e.clientX/window.innerWidth)-0.5
    if(w>=0&&h>0){
      this.props.selectPage(2)
    }
    if(w<0&&h>=0){
      this.props.selectPage(1)
    }
    if(w<=0&&h<0){
      this.props.selectPage(4)
    }
    if(w>0&&h<=0){
      this.props.selectPage(3)
    }
  }
  
  render(){
    
    return (
      <div className='controls' id="controls" >
          <div className='row1' id="row1">MENU</div>
          <div className='row2' id="row2">
            
            <i className="fa-solid fa-backward-fast fa-2x"></i>
            <div className='select'>
              
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
    var controls=document.getElementById('controls')
    controls.addEventListener('mouseover',this.mouse)
    var row1=document.querySelector('.row1')
    row1.addEventListener('mouseover',this.mouse)
    var row2=document.querySelector('.row2')
    controls.addEventListener('mouseover',this.mouse)
    var row3=document.querySelector('.row3')
    controls.addEventListener('mouseover',this.mouse)
    
    
    }
}

//center 0.5,0.6






export default Controls