const express = require('express');
const dotenv = require('dotenv');
const {chats} = require('./data/data');
const connectDB = require('./config/db');
const colors = require('colors');
const userRoutes = require ('./routes/userRoutes');
const { notFound, errorHandler } = require('./middleware/errorMiddleware');

const app = express();
dotenv.config();
connectDB();

app.use(express.json()); //to accept JSON Dat 

app.get('/', (req,res) => {
    res.send("API is running successfully ")

});

app.use('/api/user',userRoutes)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 5000

app.listen(5000,console.log(`Server is running on PORT ${PORT}`.yellow.bold))