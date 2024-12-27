const express = require('express');
const mongoose = require('mongoose');
const Route = require('./routers/route');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.json()); 
app.use('/api', Route);

const mongodbrl = 'mongodb://127.0.0.1:27017/BRIEF';
mongoose.connect(mongodbrl)
    .then(() => {
        console.log('Connected to MongoDB');
    })
    .catch((err) => {
        console.log('Error:', err.message);
    });

app.listen(3000, () => {
    console.log('Server running on port 3000');
}); 


