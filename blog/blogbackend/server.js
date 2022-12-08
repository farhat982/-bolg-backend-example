const express = require('express')
const app = express()
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const routesUrl = require('./routes/routes')
const cors = require('cors')


dotenv.config()

mongoose.connect(process.env.REACT_APP_DATABASE_KEY, () => console.log('Database connected'))


app.use(express.json())
app.use(cors())
app.use('/api', routesUrl)
app.listen(5000, () => console.log('server is up and running'));

