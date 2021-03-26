const express = require('express')
const cors = require('cors')
const path = require('path')
const app = express()
const index_loc = path.join(__dirname , '/public/client/build/index.html')
const index = require('./routes/index_route.js')


app.use(cors())
app.use(express.static(path.join(__dirname , 'public/client/build/')))
app.use(express.urlencoded({extended : false}))


app.use('/test', index)

// console.log(bc.toString());


app.listen(9000, ()=>{console.log('listen port 5000')})