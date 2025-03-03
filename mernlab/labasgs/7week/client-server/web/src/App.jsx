import { useState, useEffect } from 'react'
import axios from 'axios'
import { BE_URL } from './Constants'
import './App.css'
import StudentCard from './components/StudentCard';

function App() {
  const [loading, setLoading] = useState(true);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    axios.get(`${BE_URL}/students`)
      .then((data) => {
        setStudents(data.data.payload.students);
      })
      .then(() => {
        setLoading(false);
      })
      .catch((err) => {
        setLoading(true)
        console.error(err);
      })
  }, []);

  useEffect(() => {
    console.log(students)
  }, [students]);

  if (loading) {
    return (
      <h1>Loading ...</h1>
    )
  }

  return (
    <>
    <div className='flex flex-col items-center w-screen min-h-screen'>
      <div className='flex flex-col mx-0 md:mx-auto  md:w-1/2'>
        <h1 className={`text-2xl`}>Users</h1>
        <div className='flex flex-col flex-wrap gap-2'>
          {
            !loading &&
            students.map((student) => {
              return <StudentCard student={student} />
            })
          }
        </div>
      </div>
    </div>
    </>
  )
}

export default App