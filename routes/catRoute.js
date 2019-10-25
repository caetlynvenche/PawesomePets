const express = require("express")
const catRouter = express.Router()
const Cat = require("../models/catSchema")

catRouter.get("/", (req, res, next) => {
    Cat.find((err, cats) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(cats)
    })
})

catRouter.get("/:_id", (req, res, next) => {
    Cat.findById(req.params._id, (err, cats) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(201).send(cats)
    })
})

catRouter.post("/", (req, res, next) => {
    const newCat = new Cat(req.body)
    newCat.save((err, newCat) => {
        if (err) {
            res.status(500)
            return next(err)
        }
        return res.status(200).send(newCat)
    })
})

catRouter.delete("/:_id", (req, res, next) => {
    Cat.findByIdAndRemove(req.params._id, (err, cats) => {
        if (err) {
            res.status(500)
            return next("Error Trying to Remove")
        }
        return res.status(201).send("successfully deleted")
    })
}) 
catRouter.put("/:_id", (req, res, next) => {
    Cat.findByIdAndUpdate(
        req.params._id,
        req.body,
        { new: true },
        (err, cats) => {
            if (err) {
                res.status(500)
                return next(err)
            }
            return res.status(201).send(cats)
        }
    )
})

module.exports = catRouter