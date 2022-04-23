import React from 'react'


class Controls extends React.Component{

  
  render(){

    return (
      <div className='controls' id="controls" >
          <div className='row1' id="row1">MENU</div>
          <div className='row2' id="row2">
            
            <i className="fa-solid fa-backward-fast fa-2x"></i>
            <div className='select'>
              <div className='center'></div>
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
    controls.addEventListener('mouseover',mouse)
    
    
    }
}

//center 0.5,0.6
const mouse=(e)=>{
  var w=(e.clientY/window.innerHeight)-0.6
  var h=(e.clientX/window.innerWidth)-0.5
  if(w>=0&&h>0){
    console.log('c2')
  }
  if(w<0&&h>=0){
    console.log('c1')
  }
  if(w<=0&&h<0){
    console.log('c4')
  }
  if(w>0&&h<=0){
    console.log('c3')
  }
}





export default Controls