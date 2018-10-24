import React, { Component } from 'react';
import './App.css';
import Popchart from './components/PopChart';

class App extends Component {
  render() {
    return (
      <div className="container">
        <Popchart />
      </div>
    );
  }
}

export default App;
