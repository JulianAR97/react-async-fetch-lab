// create your App component here
import React, { Component } from 'react';

class App extends Component {
  
  componentDidMount() {
    fetch('http://api.open-notify.org/astros.json')
  }
  
  render() {
    return(
      <p>'hello world'</p>
    )
  }
}

export default App