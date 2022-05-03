import React from 'react'

class Music extends React.Component{

  select=(n)=>{
    
    console.log(n)
    var p1=document.querySelector('.page1')
    var p2=document.querySelector('.page2')
    var p3=document.querySelector('.page3')
    

    var a1=document.querySelector('.a1')
    var a2=document.querySelector('.a2')
    var a3=document.querySelector('.a3')
    
    var pages=[p1,p2,p3]
    var arrows=[a1,a2,a3]
    for(var i of pages){
      i.style.setProperty('--bg','rgb(255,255,255)')
      i.style.setProperty('--font','black')
    }
    for(var i of arrows){
      i.style.setProperty('--visible','hidden')
    }
    pages.at(n).style.setProperty('--bg','rgb(0, 150, 255)')
    pages.at(n).style.setProperty('--font','white')
    arrows.at(n).style.setProperty('--visible','none')
     
     
  }
  componentDidMount(){
    console.log("component",this.props.component)
    this.select(this.props.page)
  }

  componentDidUpdate(){
    console.log("page",this.props.page)
    this.select(this.props.page)
  }

  render(){

    return (
      
      <div className='display'>
        <div className="left-half">
          <div>
            <span className='heading1'>Music</span>
          </div>
          <div className='pages'>
            <div className='page1'>
              <span className='heading3'>All songs</span><span className="a1">{'>'}</span>
            </div>
            <div className='page2'>
              <span className='heading3'>Artists</span><span className="a2">{'>'}</span>
            </div>
            <div className='page3'>
              <span className='heading3'>Albums</span><span className="a3">{'>'}</span>
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



export default Music