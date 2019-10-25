const express =require('express')
const app =express()
const morgan =require('morgan')
const mongoose =require('mongoose')
const PORT =process.env.PORT || 6004
const path = require("path")
require("dotenv").config()

app.use(express.json())
app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "client", "build")))

mongoose.connect(process.env.MONGODB_URI ||'mongodb://localhost: 27017/pawsomedb',
    {
        useNewUrlParser: true,
        useFindAndModify: true,
        useCreateIndex: false,
        useUnifiedTopology: true

    }, () => console.log('connected to DB'))

app.use('/cats', require('./routes/catRoute.js')) 
app.use('/dogs', require('./routes/dogRoute.js')) 


app.use((err,req,res,next)=>{
    console.log(err)
    return res.send({errMsg: err.message})
})

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});


app.listen(PORT, () =>{
    console.log(6004)
})
