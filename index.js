const express = require('express')
const userModel = require('./usermodel')
const app = express()

app.get('/create', async (req, res) => {
  let createdUser = await userModel.create({
    name: 'ABR',
    email: 'abr@gmail.com',
    username: 'abr009'
  })

  res.send(createdUser);
})

app.get('/update', async(req, res) => {
  let updatedUser = await userModel.findOneAndUpdate(
    {username: 'abr009'},
    {name: 'Adithya B R', username: 'ABR'},
    {new: true}
  )

  res.send(updatedUser)
})

app.get('/read', async(req, res) => {
  let users = await userModel.find();
  let uname = '';

  // users.forEach(user => {
  //   uname = uname+'<br>'+user.name
  // });

  // res.send(uname);

  res.send(users)
})

app.get('/readone', async(req, res) => {
  let users = await userModel.findOne({username: 'abr009'});
  // let users = await userModel.find({username: 'ABR'});

  res.send(users)
})

app.get('/delete', async (req, res) => {
  let delUser = await userModel.findOneAndDelete({username: "ABR"});
  
  res.send(delUser)
})

app.listen(3000)