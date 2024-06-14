import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
        <div>
            <h1>User List</h1>

            {usersList.map((user) => (
                <Link key={user.id}>{user.name}</Link>
            ))}

        </div>
    )
}

export default UserList