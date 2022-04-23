
import React from 'react'
import Display from './Display'
import Controls from './Controls'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      page:1
    }
  }

  selectPage=(c)=>{
    this.setState({
      page:c
    })

    
  }

  render(){
    const {page}=this.state
    return (
      <div className='app'>
        <Display page={page}/>
        <Controls selectPage={this.selectPage}/>
      </div>
    )
  } 
}



export default App




