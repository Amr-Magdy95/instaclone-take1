const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
//scR0Y6xCAghbtD0q
const {
    MONGOURI
} = require("./keys");

require('./models/user');
const User = mongoose.model("User");
require('./models/post');
const Post = mongoose.model("Post");

app.use(express.json());
app.use(cors());
app.use(require('./routes/auth.js'));
app.use(require('./routes/post.js'));




mongoose.connect(MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
mongoose.connection.on("connected", () => {
    console.log("Connected to MONGODB ATLAS!!!!!");
})

mongoose.connection.on("error", (err) => {
    console.log("Trouble connecting to the DB", err);
})



app.listen(PORT, () => {
    console.log(`Server is now listening on port: ${PORT}`)
})