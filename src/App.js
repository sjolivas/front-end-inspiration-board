import React, { useState } from 'react';
import './App.css';
import Board from './components/Board';
import SidePanel from './components/SidePanel'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Inspiration Board</h1>
      </header>
      <SidePanel />
    </div>
  );
}

export default App;
