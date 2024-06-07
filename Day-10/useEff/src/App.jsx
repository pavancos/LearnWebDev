import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import RootLayout from './RootLayout'
function App({children}) {
  //create a browser router object
  const browserRouter=createBrowserRouter([
    {
      path: '',
      element: <RootLayout/>
    },
    {
      path:'/main',
      element: <RootLayout children={Main}/>
    }
  ]);
  return (
    <>
      <RouterProvider router={browserRouter}>
        {children}
      </RouterProvider>
    </>
  )
}

export default App
