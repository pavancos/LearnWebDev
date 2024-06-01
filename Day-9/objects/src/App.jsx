import { useState } from 'react'
import './App.css'
function App() {
  const[person, setPerson] = useState({ name: 'pavan', age: 19, pid: 1234 });
  const changeName = () => {
	  if ( person.name === 'pavan'){
		  setPerson({ ...person, name: 'vignesh' });
	  }
	  else {
		  setPerson({ ...person, name: 'pavan' });
	  }
    
  }
  return (
    <div>
      <h2>{person.name}</h2>
      <h2>{person.age}</h2>
      <h2>{person.pid}</h2>
      <button onClick={changeName}>CHANGE NAME</button>
    </div>
  )
}
export default App