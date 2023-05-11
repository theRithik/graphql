const express = require('express')
const app = express()
const port = 7000
const {CreateHandler} = require('graphql-http/lib/use/express')
const Schema = require('./schema/schema')

app.use('/graphql',CreateHandler({Schema}))

app.listen(port,()=>{
    console.log('in port 7000')
})