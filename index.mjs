import express from 'express'
const app = express()

const port = 3000
// http://localhost:3000/profile
app.get('/', (req, res) => {
  res.send('Hello World!',new Date());
  console.log("this is in my server point ",new Date())
})
app.get('/profile', (req, res) => {
  res.send('this is a profile part!',new Date());
  console.log("this is profiel part ",new Date())
})

app.listen(port, () => {
  console.log(`this  runnning in my laptop listening on port ${port}`)
})