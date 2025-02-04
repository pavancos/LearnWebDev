import { useState } from 'react'
import UserList from './components/userslist/UserList'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <UserList></UserList>
    </>
  )
}

export default App
