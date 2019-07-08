import React, { Component } from 'react';
import './App.css';
import { Alert } from 'reactstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Roke Muna Art
          </p>
          <Alert color="primary">
            This is a primary aleffffffft — check it out!
          </Alert>

        </header>
      </div>
    );
  }
}

export default App;
