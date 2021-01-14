const express = require("express");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
//scR0Y6xCAghbtD0q
const {MONGOURI} = require("./keys");


mongoose.connect(MONGOURI, {useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on("connected", () =>{
    console.log("Connected to MONGODB ATLAS!!!!!");
})

mongoose.connection.on("error", (err) =>{
    console.log("Trouble connecting to the DB", err);
})

const customMiddleware = (req, res, next) =>{
    console.log("MiddleWare");
    next();
};

//app.use(customMiddleware);

app.get('/',customMiddleware ,(req, res)=>{
    console.log("home");
    res.send("hello world");
});

app.get('/about', (req, res)=>{
    console.log("about");
    res.send("about page");
});

app.listen(PORT, ()=>{
    console.log(`Server is now listening on port: ${PORT}`)
})