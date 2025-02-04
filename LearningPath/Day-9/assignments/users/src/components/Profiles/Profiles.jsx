import React from 'react'
import Profile from '../Profile/Profile'
import './Profiles.css' 
const User = () => {
    //8 DC Superhero data
    const users = [
      {
        title:"News App using ReactJS (Parsing XML RSS feed to JSON)",
        desc:"News App using ReactJS (Parsing XML RSS feed to JSON) Photo by Christina Morillo from PexelsLive Demo:",
        auth:"Mehul Kothari",
        date:"Aug 12, 2020 4:32",
        dp:"./first.webp"
      },{
        title:"Medium like Blogging App Using Angular 9 and Firebase",
        desc:"Creating Medium like Blogging App Using Angular 9 and Firebase Photo by Miguei A.Padrinian from PexelsLive Demo:",
        auth:"Mehul Kothari",
        date:"Jul 10, 2020 10:59",
        dp:"./second.webp"
      },{
        title:"Covid 19 Tracker (Statistics) app Using Angular",
        desc:"Covid 19 Tracker (Statistics) app Using Angular Dark Mode Demonstration: Everyone is aware",
        auth:"Mehul Kothari",
        date:"Apr 04, 2020 08:46",
        dp:"./third.png"
      },
    ];
  return (
    <main>
        {users.map(user => (
            <Profile key={user.id} user={user} />
        ))}    
    </main>
  )
}

export default User
