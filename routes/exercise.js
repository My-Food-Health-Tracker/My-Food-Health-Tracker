const express = require('express');
const router = express.Router();

const Day = require('../models/Day');


//add exercise to a day (create day if that day doesn't exists)
router.post('/user/:id/day/:date',(req,res,next)=>{
  Day.findOne({$and:[{owner: req.params.id},{date: req.params.date}]})
    .then(day=>{
      const newExercise={
        startTime:req.body.startTime,
        description:req.body.description,
        intensityLevel:req.body.intensityLevel,
        duration:req.body.duration
      };
      if(day!==null){
        Day.findByIdAndUpdate(day._id,{exercise:newExercise},{new:true})
          .then(updatedDay=>{
            console.log('day updated with:',{
              startTime:req.body.startTime,
              description:req.body.description,
              intensityLevel:req.body.intensityLevel,
              duration:req.body.duration});
            res.status(204).json(updatedDay);
          })
          .catch(err=>{
            console.log('there was an error updating the energy:',err);
            res.json(err);
          })
      }
      else{
        const newDay={
          date:req.body.startDate,
          foods:[],
          drinks: [],
          supplements: [],
          medications: [],
          exercises: [newExercise],
          sleep: [],
          symptoms:[],
          energy: null,
          owner:req.params.id
        }
        Day.create(newDay)
          .then(dbDay=>{
            console.log('day created:',newDay)
            res.status(201).json(dbDay)
          })
          .catch(err=>{
            console.log(err)
            res.json(err)
          })
      }
    })
    .catch(err=>{
      res.json(err);
    })
})

//delete energy level to a day
router.delete('/user/:id/day/:date',(req,res,next)=>{
  Day.findOne({$and:[{owner: req.params.id},{date: req.params.date}]})
    .then(day=>{

      console.log(req.data)
      const deleteIndex=day.exercises.indexOf(req.data);
      const newExerciseArr=day.exercises.splice(deleteIndex,1);
      
      Day.findByIdAndUpdate(day._id,{exercise:newExerciseArr},{new:true})
        .then(updatedDay=>{
          console.log(req.params, updatedDay);
          res.status(204).json(updatedDay);
        })
        .catch(err=>{
          console.log('there was an error deleting the energy',err);
          res.json(err);
        })
    })
    .catch(err=>{
      console.log('there was an error finding the day',err);
      res.json(err);
    })
})


module.exports = router;