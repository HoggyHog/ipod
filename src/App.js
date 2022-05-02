
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
    },()=>{
      console.log("component",this.state.component)
    console.log("page",this.state.page)
    })
  }
  music_goto=()=>{
    var c=10+this.state.page
    this.setState({
      component:c
    },()=>{
      console.log('ismee')
      console.log("component",this.state.component)
    console.log("page",this.state.page)
    })
  }
  go=()=>{
    console.log("component",this.state.component)
    console.log("page",this.state.page)
    if(this.state.component==1){
      this.music_goto()
    }
    else{
      this.goto_Page()
    }
  }

  
  go_Back=()=>{
    if(this.state.component>=10){
      this.setState({
        component:1
      })
    }
    else{
      this.setState({
        component:-1
      })

    }
  }

  render(){
    const {page,component}=this.state
    return (
      <div className='app'>
        <Display page={page} component={component}/>
        <Controls 
        selectPage={this.selectPage}
        goto_Page={this.goto_Page} 
        go_Back={this.go_Back}
        music_goto={this.music_goto}
        go={this.go}/>
      </div>
    )
  } 
}



export default App




