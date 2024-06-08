import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
const RegUsers = () => {
    let [regUsers, setRegUsers] = useState([])
    useEffect(() => {
      fetch('http://localhost:3000/users')
        .then(response => response.json())
        .then(data => setRegUsers(data))
        .then(data => console.log(data));
    }, []);
  return (
    <div>
        <h2>Registered Users</h2>
        <table>
          <thead>
            <tr>
              <th>Username</th><th>Email</th>
            </tr>
          </thead>
          <tbody>
            {regUsers.map((user, index) => (
              <tr key={index}>
                <td>{user.username}</td>
                <td>{user.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  )
}
export default RegUsers