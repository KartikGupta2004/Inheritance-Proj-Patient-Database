const connectToMongo=require('./db')
const express = require('express')
const morgan=require('morgan')
const cors=require('cors')
const app = express()
const port = 5000
app.use(morgan('combined'))
app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
// app.use('/api/notes',require('./routes/notes'))
app.use('/api/record',require('./routes/record'))
app.use('/api/medical_visits',require('./routes/visits'))
app.use('/api/blood_glucose',require('./routes/blood'))
app.use('/api/blood_pressure',require('./routes/blood_pressure'))
app.use('/api/examination',require('./routes/examination'))
app.use('/api/lab_test',require('./routes/labtest'))
app.use('/api/oxygen_saturation',require('./routes/oxygen'))
app.use('/api/family_history',require('./routes/family'))
app.use('/api/allergy',require('./routes/allergy'))
app.use('/api/vaccine',require('./routes/vaccine'))


app.get('/', (req, res) => { 
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
connectToMongo();
