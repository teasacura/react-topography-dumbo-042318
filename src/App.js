import React, { Component } from 'react';
import './App.css';

class App extends Component {
  invertColor(color) {
    // https://stackoverflow.com/questions/35969656/how-can-i-generate-the-opposite-color-according-to-current-color#35970186
    var r = parseInt(color.slice(0, 2), 16),
      g = parseInt(color.slice(2, 4), 16),
      b = parseInt(color.slice(4, 6), 16);

    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? '#000000' : '#FFFFFF';
  }

  render() {
    return (
      <main
        style={{
          backgroundColor: '#ffffff' /* Your code here */
        }}
      >
        <input
          placeholder="000000"
          style={{ color: '#000000' /* Your code here */ }}
        />
      </main>
    );
  }
}

export default App;
