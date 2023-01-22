const express = require('express');
const mongoose = require('mongoose');
const app = express();

const cors = require('cors');

require('dotenv').config();

// Cors Middleware
app.use(cors({ origin: true, credentials: true }));

mongoose.connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
    console.log("Connected successfully");
});

// Tester
app.get('/', (req, res) => {
    res.send("Data is moving accurately");
})

// Admin router requires
app.post('/admin', require('./Routers/admin'));

const port = process.env.PORT
app.listen(port, () => console.log(`Server is running on Port ${port}`));
