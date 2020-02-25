import React, { Component } from 'react';
import AppNavbar from './components/AppNavbar';
// import StarterKit from './components/StarterKit';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render () {
    return (
      <div className="App">
        <AppNavbar />
        {/* <StarterKit /> */}
      </div>
    );
  }
}
export default App;
