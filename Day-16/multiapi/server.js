const express = require('express')
const app = express()
//body parser
app.use(express.json())

const middleware = (req, res, next) => {
  console.log('Middleware')
  next()
  res.send('Middleware done')
}

//test data
let userList = [
  {
    id: 1, name: 'vigesh'
  },
  {
    id: 2, name: 'pavan'
  }
]


app.get('/users', middleware, (req, res) => {
  res.send({
    message: 'usersList',
    payload: userList
  })
})

app.get('/users/:id', (req, res) => {
  let id = req.params.id
  let user = userList.find(user => user.id == id)
  // res.send({message:'userDetails',
  //   payload:user
  // })
  if (user) {
    res.send({
      message: 'userDetails',
      payload: user
    })
  }
  else {
    res.send({ message: 'user not found' })
  }
})

app.post('/users', (req, res) => {
  // res.send('Post request')
  let user = req.body
  userList.push(user)
  res.send({
    message: 'user added successfully',
    payload: userList
  })
})


app.put('/user', (req, res) => {
  // res.send('Put request')
  let user = req.body
  let id = user.id
  let index = userList.findIndex(user => user.id == id)
  if (index == -1) {
    res.send({ message: 'user not found' })
  }
  else {
    userList[index] = user
    res.send({
      message: 'user updated successfully',
      payload: userList
    })
  }
})

app.delete('/users', (req, res) => {
  // res.send('Delete request')
  let user = req.body
  let id = user.id
  let index = userList.findIndex(user => user.id == id)
  if (index == -1) {
    res.send({ message: 'user not found' })
  }
  else {
    userList.splice(index, 1)
    res.send({
      message: 'user deleted successfully',
      payload: userList
    })
  }
})


app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})
