import React from 'react'
//importing in the background image
import img from '/Users/karthikeyanjaganathan/Desktop/CODING NINJAS/ipod/src/images/ipod-bg.jpeg'

class HomePage extends React.Component{
  
  select=(n)=>{
    
    //getting all the elements and putting them into an array for easy manipulation
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

    //code to change the styles of the highlighted page
    for(var i of pages){
      i.style.setProperty('--bg','rgb(255,255,255)')
      i.style.setProperty('--font','black')
    }
    for(var j of arrows){
      j.style.setProperty('--visible','hidden')
    }

    //.at(n) was super useful, coz we can use it even for negative or even when the index goes out of 
    // the length of the array ->goes in a cyclic way, just what the project needs
    pages.at(n).style.setProperty('--bg','rgb(0, 150, 255)')
    pages.at(n).style.setProperty('--font','white')
    arrows.at(n).style.setProperty('--visible','none')
     
  }
  componentDidMount(){              //to highlight the cover flow as soon as we get in
    this.select(this.props.page)
  }

  componentDidUpdate(){             //to highlight the diff sections as we scroll
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
              <span className='heading2'>Cover Flow</span><span className="a1">{'>'}</span>
            </div>
            <div className='page2'>
              <span className='heading2'>Music</span><span className="a2">{'>'}</span>
            </div>
            <div className='page3'>
              <span className='heading2'>Games</span><span className="a3">{'>'}</span>
            </div>
            <div className='page4'>
              <span className='heading2'>Settings</span><span className="a4">{'>'}</span>
            </div>
          </div>
        </div>
        <div className="right-half">
          <img src={img} alt="ipod-bg"></img>
        </div>
      </div>
    ) 
  }
}

export default HomePage