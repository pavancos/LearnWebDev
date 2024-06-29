const express = require('express')
const app = express()

//test data
let userList=[
  {
    id:1, name:'vigesh'
  },
  {
    id:2, name:'pavan'
  }
]


app.get('/users', (req, res) => {
  res.send({message:'usersList',
    payload:userList
  })
})

app.get('/users/:id', (req, res) => {
  let id = req.params.id
  let user = userList.find(user => user.id == id)
  res.send({message:'userDetails',
    payload:user
  })
})

app.post('/users', (req, res) => {
  res.send('Post request')
})

app.put('/users', (req, res) => {
  res.send('Put request')
})

app.delete('/users', (req, res) => {
  res.send('Delete request')
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
