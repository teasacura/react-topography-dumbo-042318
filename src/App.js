import React, { Component } from 'react';
import './App.css';

class App extends Component {

  state = {
    backgroundColor: ''
  }

  invertColor(color) {
    // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color#35970186
    var r = parseInt(color.slice(0, 2), 16),
      g = parseInt(color.slice(2, 4), 16),
      b = parseInt(color.slice(4, 6), 16);

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }

  handleKeyPress = (e) => {
    e.persist()
    console.log(e.target.value.length)
    if (e.target.value.length === 6) {
      this.setState({
        backgroundColor: "#" + e.target.value
      })
    } else {
      const charAllow = 'abcdefABCDEF0123456789'
      // const regex = /([a-f0-9])+/gi;
      if (charAllow.includes(e.key) === false)
      {
        e.preventDefault();
        e.stopPropagation();
      }
      // console.log(e.target.value)
      // let string = e.target.value
      // let matchString = string.match(regex)
    }
  }

  render() {
    return (
      <main
        style={{
          backgroundColor: this.state.backgroundColor}}
      >
        <input
          placeholder="000000"
          style={{color: this.invertColor(this.state.backgroundColor) }}
          onKeyPress={this.handleKeyPress}
          maxLength={7}
        />
      </main>
    );
  }
}

// invertColor(this.state.backgroundColor)

export default App;
