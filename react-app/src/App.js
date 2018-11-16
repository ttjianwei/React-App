import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return React.createElement('div',{className:'App'},'Hi,I\'m a React app');//(Parent,javascript object, children...)
    //   <div className="App">
    //     <h1>This is a React App</h1>
    //   </div>
    // );
  }
}

export default App;
