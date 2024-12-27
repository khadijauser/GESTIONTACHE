const mongoose = require('mongoose');
const taskSchema = new mongoose.Schema({
    titre: { type: String, 
    required: true, },
    description: { type: String,
    required: true, },  
    statue: { type: String ,},
});
const task = mongoose.model('Task', taskSchema);
module.exports = task;  


