import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/header/Header'
import Main from './components/main/Main'
import Footer from './components/footer/Footer'
import Home from './components/home/Home'
import Signup from './components/signup/Signup'
import Login from './components/Login/Login'
import RegUsers from './components/regusers/RegUsers'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Users from './components/users/Users'
import RootLayout from './RootLayout'
function App({ children }) {
  //create a browser router object
  const browserRouter = createBrowserRouter([
    {
      path: '',
      element: <RootLayout />,
      children:[
        {
          path:'',
          element:<Home />
        },
        {
          path:'login',
          element:<Login />
        },
        {
          path:'signup',
          element:<Signup />
        },
        {
          path:'users',
          element:<Users />
        },
        {
          path:"regusers",
          element:<RegUsers />
        }
      ]
    },
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
