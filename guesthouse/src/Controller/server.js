const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express()
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

const uri = process.env.Guest_House;
mongoose.connect(uri);
const connection = mongoose.connection;

connection.once('open', () => {
    console.log("MongoDB database connected");
})

//routes
const employeeRouter = require('./routes/employee');

app.use('/employee', employeeRouter);

app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});