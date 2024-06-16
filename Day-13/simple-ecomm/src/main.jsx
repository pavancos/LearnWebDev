import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import UserLoginStore from './contexts/UserLoginStore.jsx'
ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
  <UserLoginStore>
    <App />
  </UserLoginStore>,
  // </React.StrictMode>,
)
