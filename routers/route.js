const express = require('express');
const task = require('../models/task');
const Route = express.Router();

Route.post('/tasks',  (req, res) => {
    console.log('Request received');
    const { titre, description, statue } = req.body;
        const newTask = new task({
            titre,
            description,
            statue
        });
        const saveTask =  newTask.save();
        console.log("Task saved: ", saveTask); 
        res.status(201).json(savedTask);
});
Route.get('/tasks',(req,res)=>{
    task.find({}) .then(resultat=>{
       res.send(resultat)})
   })
   Route.delete('/tasks/:id', async (req, res) => {
       await task.findByIdAndDelete(req.params.id);
           
            res.send( "La tâche a été supprimée avec succès");
       
    });
    Route.put('/tasks/:id', async (req, res) => {
       
       const updatedTask = await task.findByIdAndUpdate(
           req.params.id, 
           { titre: req.body.titre },
           { new: true } )
       if (!updatedTask) {
           return res.status(404).send({ message: "La tâche n'a pas été trouvée" });
       }
       res.send("Mise à jour effectuée avec succès");
   
   });
module.exports = Route; 


