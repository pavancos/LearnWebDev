import React from 'react'
import Userlist from '../userlist/Userlist'
import './User.css' 
const User = () => {
    //8 DC Superhero data
    const users = [
        { id: 1, name: 'Superman', realName: 'Clark Kent', power: 'Super strength', dp:'./superman.jpg' },
        { id: 2, name: 'Batman', realName: 'Bruce Wayne', power: 'Genius-level intellect', dp:'./batmanSquare.jpg' },
        { id: 3, name: 'Wonder Woman', realName: 'Diana Prince', power: 'Super strength', dp:'./wonderwoman.jpg' },

    ];
  return (
    <main>
        {users.map(user => (
            <Userlist key={user.id} user={user} />
        ))}    
    </main>
  )
}

export default User
