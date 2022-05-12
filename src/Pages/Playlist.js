import React from 'react'

class Playlist extends React.Component{

  select=(n)=>{
    
    //storing the elements into an array for easier accessing, just like in Homepage.js
    var p1=document.querySelector('.page1')
    var p2=document.querySelector('.page2')
    var p3=document.querySelector('.page3')
    
    var a1=document.querySelector('.a1')
    var a2=document.querySelector('.a2')
    var a3=document.querySelector('.a3')
    
    var pages=[p1,p2,p3]
    var arrows=[a1,a2,a3]

    //setting the style for the highlighted page
    for(var i of pages){
      i.style.setProperty('--bg','rgb(255,255,255)')
      i.style.setProperty('--font','black')
    }
    for(var j of arrows){
      j.style.setProperty('--visible','hidden')
    }
    //using .at(n) goes in a cyclic way, so even applicable for negative and above bound values
    pages.at(n).style.setProperty('--bg','rgb(0, 150, 255)')
    pages.at(n).style.setProperty('--font','white')
    arrows.at(n).style.setProperty('--visible','none')
     
  }

  componentDidMount(){              //setting up first time
    console.log("component",this.props.component)
    this.select(this.props.page)
  }

  componentDidUpdate(){             //everytime it updates
    console.log("page",this.props.page)
    this.select(this.props.page)
  }

  render(){
    const {songs,page,images}=this.props     // props destructuring 
    return (
      <div className='display'>
        <div className="left-half-playlist">
          <div>
            <span className='heading1'>Music</span>
          </div>
          <div className='pages'>
            <div className='page1'>
              <span className='heading3'>Fish Room</span><span className="a1">{'>'}</span>
            </div>
            <div className='page2'>
              <span className='heading3'>No Turning Back</span><span className="a2">{'>'}</span>
            </div>
            <div className='page3'>
              <span className='heading3'>Waterfall</span><span className="a3">{'>'}</span>
            </div>
            
          </div>
        </div>

        {/* here the right side shows the data regarding the song */}
        <div className="right-half-playlist">
          <img src={images.at(page)} alt="song bg"/>
          <div>{songs.at(page).title}</div>
          <div>{songs.at(page).artist}</div>
        </div>
      </div>
    ) 
  }
}

export default Playlist