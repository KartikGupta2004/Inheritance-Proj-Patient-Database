const connectToMongo=require('./db')
const express = require('express')
const morgan=require('morgan')
const app = express()
const port = 5000
app.use(morgan('combined'))
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/notes',require('./routes/notes'))
app.use('/api/record',require('./routes/record'))
app.use('/api/medical_visits',require('./routes/visits'))
app.use('/api/blood_glucose',require('./routes/blood_glucose'))


app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectToMongo();
