import React, { useState, useEffect } from 'react'
import UserCount from '../usercount/UserCount'

const Users = () => {
    let [user, setUser] = React.useState([])

    let [count, setCount] = useState(0)

    async function getUsers() {
        let response = await fetch('https://jsonplaceholder.typicode.com/users')
        let data = await response.json()
        data = data.slice(0, 4)
        setUser(data)
    }

    useEffect(() => {
        getUsers()
    }, [])


    // "id": 1,
    // "name": "Leanne Graham",
    // "username": "Bret",
    // "email": "Sincere@april.biz",
    // "address": {
    //   "street": "Kulas Light",
    //   "suite": "Apt. 556",
    //   "city": "Gwenborough",
    //   "zipcode": "92998-3874",
    //   "geo": {
    //     "lat": "-37.3159",
    //     "lng": "81.1496"
    //   }
    // },
    // "phone": "1-770-736-8031 x56442",
    // "website": "hildegard.org",
    // "company": {
    //   "name": "Romaguera-Crona",
    //   "catchPhrase": "Multi-layered client-server neural-net",
    //   "bs": "harness real-time e-markets"

    return (
        <div className='d-flex flex-column align-content-center h-100'>
            <UserCount Counter={{ count, setCount }} ></UserCount>
            <div className="row px-5">
                {user.map((user) => (
                    <div className="col" key={user.id}>
                        <div className="card">
                            <div className="card-header">
                                <h5 className="card-title">{user.name}</h5>
                                <p className='blackquote-footer'>{user.username}</p>
                            </div>
                            <div className="card-body">

                                <h6 className="card-subtitle mb-2 text-muted">{user.email}</h6>
                                <p className="card-text">{user.address.city}</p>
                                <p className="card-text">{user.address.zipcode}</p>
                                
                                <p className="card-text">{user.phone}</p>
                                <a href="#" className="card-link">{user.website}</a>
                                <h6 className="card-text">{user.company.name}</h6>
                            </div>
                            <div class="card-footer text-body-secondary"><button className="btn btn-primary" onClick={() => {
                                    setCount(count + 1)
                                }}>Add User</button>
                                </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Users