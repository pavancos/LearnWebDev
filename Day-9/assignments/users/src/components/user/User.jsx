import React from 'react'
import Userlist from '../userlist/Userlist'
import './User.css' 
const User = () => {
    //8 DC Superhero data
    const users = [
        { id: 1, name: 'Superman', realName: 'Clark Kent', power: 'Super strength', dp:'./superman.jpg' },
        { id: 2, name: 'Batman', realName: 'Bruce Wayne', power: 'Genius-level intellect', dp:'./batmanSquare.jpg' },
        { id: 3, name: 'Wonder Woman', realName: 'Diana Prince', power: 'Super strength', dp:'./wonderwoman.jpg' },
        { id: 4, name: 'Flash', realName: 'Barry Allen', power: 'Super speed', dp:'./flash.jpg' },
        { id: 5, name: 'Green Lantern', realName: 'Hal Jordan', power: 'Power ring', dp:'./greenlantern.jpg' },
        { id: 6, name: 'Aquaman', realName: 'Arthur Curry', power: 'Underwater breathing', dp:'./aquaman.jpg' },
        { id: 7, name: 'Cyborg', realName: 'Victor Stone', power: 'Technopathy', dp:'./cyborg.jpg' },
        { id: 8, name: 'Martian Manhunter', realName: 'J\'onn J\'onzz', power: 'Shape-shifting', dp:'./martian.jpg' }
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
