import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import CommentBox from './components/CommentBox';

class App extends Component {
  render() {
    return (
      <div className="App">
        <CommentBox />
      </div>
    );
  }
}

export default App;