import { useState } from 'react'
import './App.css'
import Parent from './components/parent/Parent'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
function App({ children }) {
  return (
    <>
      <Parent></Parent>
    </>
  )
}

export default App
