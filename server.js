const express = require('express')
const cors = require('cors');
const dotenv = require('dotenv').config()
const { errorHandler } = require('./middleware/errorMiddleware')
const connectDB = require('./config/db')
const PORT = process.env.PORT || 5000;

connectDB()
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors({origin:['http://localhost:3000', 'https://support-desk-app.onrender.com']}));
app.use('/api/users', require('./routes/userRoutes'))
app.use('/api/tickets', require('./routes/ticketRoutes'))

app.get('/', (req, res)=>{
  res.json({message: 'Welcome to support desk api'})
})

app.use(errorHandler)


app.listen(PORT, () => { console.log(`Server is running at ${PORT}`) })