const express = require('express')
const app = express()
//body parser
app.use(express.json())

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
  // res.send({message:'userDetails',
  //   payload:user
  // })
  if(user){
    res.send({message:'userDetails',
      payload:user
    })
  }
  else{
    res.send({message:'user not found'})
  }
})

app.post('/user', (req, res) => {
  // res.send('Post request')
  let user = req.body
  userList.push(user)
  res.send({message:'user added successfully',
    payload:userList
  })
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
