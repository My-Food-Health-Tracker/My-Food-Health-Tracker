const express = require('express');
const router = express.Router();

const Day = require('../models/Day');


//add symptom to a day (create day if that day doesn't exists)
router.post('/user/:id/day/:date',(req,res,next)=>{
  Day.findOne({$and:[{owner: req.params.id},{date: req.params.date}]})
    .then(day=>{

      const newSymptom={
        name:req.body.name,
        startTime:req.body.startTime, 
        intensity: req.body.intensity,
        notes: req.body.notes
      }

      if(day!==null){
        Day.findByIdAndUpdate(day._id,{$push:{symptoms:newSymptom}},{new:true})
          .then(updatedDay=>{
            console.log('day updated:',updatedDay);
            res.status(204).json(updatedDay);
          })
          .catch(err=>{
            console.log('there was an error updating symptoms:',err);
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
          exercises: [],
          sleep: [],
          symptoms:[newSymptom],
          energy:null,
          owner:req.params.id
        }
        Day.create(newDay)
          .then(dbDay=>{
            console.log('day created:',dbDay)
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
      console.log('this symptom i want to erase',req.body)
      Day.findByIdAndUpdate(day._id,
        {$pull:
          {symptoms:
            { 
              name: req.body.name, 
              startTime: req.body.startTime,
              intensity:req.body.intensity
            }}},{new:true})
        .then(updatedDay=>{
          console.log(req.params, updatedDay);
          res.status(204).json(updatedDay);
        })
        .catch(err=>{
          console.log('there was an error deleting the symptom',err);
          res.json(err);
        })
    })
    .catch(err=>{
      console.log('there was an error finding the day',err);
      res.json(err);
    })
})


module.exports = router;