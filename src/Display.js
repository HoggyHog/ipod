import React from 'react'
import HomePage from './Pages/Homepage'
import Music from './Pages/Music'
import Coverflow from './Pages/Coverflow'
import Settings from './Pages/Settings'
import Games from './Pages/Games'

class Display extends React.Component{
    render(){
        return (
        <HomePage page={this.props.page} />
        //<Music page={this.props.page}/>
        //<Coverflow />
        //<Settings />
        //<Games />
      )

    }
}

export default Display