import React from 'react'

class Display extends React.Component{
  


  select=(n)=>{
    
    var p1=document.querySelector('.page1')
    var p2=document.querySelector('.page2')
    var p3=document.querySelector('.page3')
    var p4=document.querySelector('.page4')

    var a1=document.querySelector('.a1')
    var a2=document.querySelector('.a2')
    var a3=document.querySelector('.a3')
    var a4=document.querySelector('.a4')
    var pages=[p1,p2,p3,p4]
    var arrows=[a1,a2,a3,a4]
    for(var i of pages){
      i.style.setProperty('--bg','rgb(255,255,255)')
      i.style.setProperty('--font','black')
    }
    for(var i of arrows){
      i.style.setProperty('--visible','hidden')
    }
    pages[n-1].style.setProperty('--bg','rgb(0, 150, 255)')
    pages[n-1].style.setProperty('--font','white')
    arrows[n-1].style.setProperty('--visible','none')
     
  }

  componentDidUpdate(){
    this.select(this.props.page)
  }

  render(){

    return (
      
      <div className='display'>
        <div className="left-half">
          <div>
            <span className='heading1'>Ipod Js</span>
          </div>
          <div className='pages'>
            <div className='page1'>
              <span className='heading2'>Cover Flow</span><span className="a1">></span>
            </div>
            <div className='page2'>
              <span className='heading2'>Music</span><span className="a2">></span>
            </div>
            <div className='page3'>
              <span className='heading2'>Games</span><span className="a3">></span>
            </div>
            <div className='page4'>
              <span className='heading2'>Settings</span><span className="a4">></span>
            </div>
          </div>
        </div>
        <div className="right-half">
          <img src="https://images.unsplash.com/photo-1540508664702-7839b9d38075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"></img>
        </div>
      </div>
    )
    
  }
    

}



export default Display