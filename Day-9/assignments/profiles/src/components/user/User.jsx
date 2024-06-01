import React from 'react'
import Userlist from '../userlist/Userlist'
import './User.css' 
const User = () => {
    //8 DC Superhero data
    const users = [
        { id: 1, name: 'Superman', realName: 'Clark Kent', power: 'Super strength' },
        { id: 2, name: 'Batman', realName: 'Bruce Wayne', power: 'Genius-level intellect' },
        { id: 3, name: 'Wonder Woman', realName: 'Diana Prince', power: 'Super strength' },
        { id: 4, name: 'Flash', realName: 'Barry Allen', power: 'Super speed' },
        { id: 5, name: 'Green Lantern', realName: 'Hal Jordan', power: 'Power ring' },
        { id: 6, name: 'Aquaman', realName: 'Arthur Curry', power: 'Underwater breathing' },
        { id: 7, name: 'Cyborg', realName: 'Victor Stone', power: 'Technopathy' },
        { id: 8, name: 'Martian Manhunter', realName: 'J\'onn J\'onzz', power: 'Shape-shifting' }
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
