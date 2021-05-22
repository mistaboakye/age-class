import logo from './logo.svg';
import './App.css';
import { Component, useState } from 'react';

class App extends Component {
  constructor() {
    super();
    this.state = { number: 20 };
  }

  handleClickup = () => {
    let newNumber = this.state.number + 1;
    this.setState({ number: newNumber });
  };
  handleClickdown = () => {
    let newNumber1 = this.state.number - 1;
    this.setState({ number: newNumber1 });
  };

  render() {
    return (
      <div>
        <h1>
          I am {this.state.number} years old
          <button onClick={this.handleClickup}>Increase</button>
          <button onClick={this.handleClickdown}>Increase</button>
        </h1>
      </div>
    );
  }
}

export default App;
