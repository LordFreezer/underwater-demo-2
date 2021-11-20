import logo from './logo.svg';
import './App.css';

import React from 'react'
import Wave from 'react-wavify'

function App() {
  return (
    <Wave fill='#2674A9'
      paused={false}
      options={{
        height: 60,
        amplitude: 20,
        speed: 0.15,
        points: 3

      }}
    />
  )
}

export default App;
