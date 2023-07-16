const express = require('express');
const mongoose = require('mongoose');
const Routes = require("./routes/Routers");

const app = express();
app.use(express.json());

mongoose.connect("mongodb://localhost:27017/User",{
    
}).then((result)=> app.listen(9000))
.catch((err)=>{
    console.log(err);
})


app.use('/users' , require('./routes/userRoutes'))
app.use(Routes)