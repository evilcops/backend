const express = require('express')

const app = express()
const port = 5000
const connectDb = require('./db/connect')

//req router
const router = require('./routes/crud')

//Require dotenv
require('dotenv').config()

//middlewarer(cors)
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Origin', '*')

  if (req.method === 'OPTIONS') {
    res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
    return res.status(200).json({})
  }

  next()
})

//Route
app.use('/api/v1/crud', router)

//Connection
const start = async () => {
  try {
    await connectDb(process.env.MONGO_CONNECT)
    app.listen(port, (req, res) => {
      console.log('You are listening to port :', port)
    })
  } catch (error) {
    console.log(error)
  }
}

start()
