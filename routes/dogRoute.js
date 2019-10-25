const express =require('express')
const dogRouter =express.Router()
const Dog= require('../models/dogSchema.js')

dogRouter.get('/', (req, res, next) =>{
    Dog.find((err, dogs) =>{
        if(err) {
            res.status(500)
            return next
        }
        return res.status(200).send(dogs)
    })
})

dogRouter.get('/:_id', (req, res, next)=>{
    Dog.findOne({_id: req.params._id}, (err, dog) =>{
        if(err){
            res.status(500)
            return next(err)
        }else if(!dog){
            res.status(404)
            return next(new Error('dog not found'))
        }
        return res.status(201).send(dog)

    })
})

dogRouter.post('/', (req, res, next)=>{
    const newDog = new Dog(req.body)
    newDog.save((err, newDog)=>{
        if(err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newDog)
    })
    
})

dogRouter.put('/:_id',(req,res,next)=>[
    Dog.findOneAndUpdate(
        {_id: req.params._id},
        req.body,
        {new: true},
        (err,dog) =>{
        if(err){
            res.status(500)
            return next(err)
        }
        return res.status(201).send(dog)    
        })    
])
dogRouter.delete('/:_id', (req, res, next) =>{
    Dog.findByIdAndDelete(req.params._id, (err, dog) =>{
        if(err){
            res.status(500)
        }
        return res.status(200).send('sucessfully deleted ')
    })
})




module.exports = dogRouter
