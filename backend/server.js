const express = require('express')
const app = express()
require('dotenv').config()
const mongoose = require('mongoose')
const cors = require('cors')
const api=require('./routes/api')
//db connnection

const url=process.env.MONGO_URI
mongoose.connect(url,{useNewUrlParser:true,useCreateIndex:true,useUnifiedTopology:true,useFindAndModify:true})
const connection= mongoose.connection;
connection.once('open',()=>{
    console.log('Database connected..')
}).catch(err=>{
    console.log('Db connection failed...')
})


app.use(express.json())
app.use(express.json())

//routes
app.use('/api',api)

const PORT = process.env.PORT || 5000

app.listen(PORT,()=>{
    console.log(`App is litsening on port ${PORT}`)
})
