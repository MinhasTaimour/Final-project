require('dotenv').config()

const express = require("express");
const app = express()

var cors=require ("cors")
app.use(cors());

const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true})
const db = mongoose.connection                  
db.on('error', (error) => console.error(error))
db.once('open', () =>console.log('Conected to db'))

app.use(express.json())
// const token=require('crypto').randomBytes(64).toString('hex')
// console.log(token)

const subscriberRouter = require('./routers/userRouter')
app.use('/users',subscriberRouter)

const subRouter = require('./routers/vlRouter')
app.use('/vl',subRouter)

const productRouter = require('./routers/productRouter')
app.use('/product',productRouter)

app.listen(5000, () => {
    console.log('server at port 5000')
})

