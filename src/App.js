import Sidebar from './Components/Upbar/upbar'
import './App.css'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import Midleimage from './Components/MidleImage/midleimage';




function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Sidebar></Sidebar>
        <midleimage></midleimage>
        <div id="container">
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;