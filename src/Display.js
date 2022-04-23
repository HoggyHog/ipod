import React from 'react'

function Display(props) {
  console.log('props ',props.page)
  return (
    <div className='display'>
      <div className="left-half">
        <div>
          <span className='heading1'>Ipod Js</span>
        </div>
        <div className='pages'>
          <div className='page1'>
            <span className='heading2'>Cover Flow</span>
          </div>
          <div className='page2'>
            <span className='heading2'>Music</span>
          </div>
          <div className='page3'>
            <span className='heading2'>Games</span>
          </div>
          <div className='page4'>
            <span className='heading2'>Settings</span>
          </div>
        </div>
      </div>
      <div className="right-half">
        <img src="https://images.unsplash.com/photo-1540508664702-7839b9d38075?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"></img>
      </div>
    </div>
  )
}

export default Display