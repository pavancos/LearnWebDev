import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar/Navbar';
import User from './components/user/User';
import Footer from './components/footer/Footer';
function App() {

  return (
    <div className="App">
      <Navbar></Navbar>
      <User></User>
      <Footer></Footer>
    </div>
  )
}

export default App
