import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import Profiles from './components/Profiles/Profiles';
import Footer from './components/footer/Footer';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <Profiles></Profiles>
    </div>
  )
}

export default App
