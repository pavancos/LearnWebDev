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
      <div className='flex flex-col w-[100px]'>
        <h1 className={`text-2xl`}>Users</h1>
        <div className='flex flex-row w-screen flex-wrap gap-4'>

          {
            !loading &&
            students.map((student) => {
              return <StudentCard student={student} />
            })
          }
        </div>
      </div>
    </>
  )
}

export default App