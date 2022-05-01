
import React from 'react'
import Display from './Display'
import Controls from './Controls'

class App extends React.Component {
  constructor(){
    super()
    this.state={
      page:1,
      component:-1
    }
  }

  selectPage=(c)=>{
    var p=(this.state.page+c)%4
    
    
    this.setState({
      page:p
    }) 
  }

  goto_Page=()=>{
    this.setState({
      component:this.state.page
    })
  }

  go_Back=()=>{
    this.setState({
      component:-1
    })
  }

  render(){
    const {page,component}=this.state
    return (
      <div className='app'>
        <Display page={page} component={component}/>
        <Controls selectPage={this.selectPage} goto_Page={this.goto_Page} go_Back={this.go_Back}/>
      </div>
    )
  } 
}



export default App




