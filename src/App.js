import React from 'react';
import './App.css';
import ColorPicker from './ColorPicker';

function App() {
  const colors = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'lightblue',
    'darkblue',
    'brown',
    'gray',
  ];


  return (
    <div className="app-container">
      <h1>Color Picker</h1>
      <ColorPicker colors={colors} />
    </div>
  );
}

export default App;