import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const UserList = () => {
    let [usersList, setUsersList] = React.useState([])
    async function fetchData() {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        setUsersList(data)
        console.log(data)
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <Router>
            <div>
                <h1>User List</h1>
                <ul>
                    {usersList.map((user) => (
                        <li><Link key={user.id} to={`/user/${user.id}`}>{user.name}</Link></li>
                    ))}
                </ul>
            </div>
        </Router>
    )
}

export default UserList