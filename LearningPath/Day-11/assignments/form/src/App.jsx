import React, {useState } from 'react'
import RegForm from './components/regform/RegForm'
import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App({ children }) {
  return (
    <div className="d-flex flex-column justify-content-center align-content-center flex-wrap bg-danger bg-gradient h-100">
      <RegForm></RegForm>
    </div>
  )
}

export default App
