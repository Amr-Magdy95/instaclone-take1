const express = require("express");
var cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const PORT = 5000;
const { MONGOURI } = require("./keys");      //scR0Y6xCAghbtD0q

// Server Models
require("./models/user");
const User = mongoose.model("User");
require("./models/post");
const Post = mongoose.model("Post");

// Middleware to intercept requests and add certain details to them
app.use(express.json());
app.use(cors());
// Server Routes
app.use(require("./routes/auth.js"));
app.use(require("./routes/post.js"));

// Connection to the database
mongoose.connect(MONGOURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
mongoose.connection.on("connected", () => {
  console.log("Connected to MONGODB ATLAS!!!!!");
});

mongoose.connection.on("error", (err) => {
  console.log("Trouble connecting to the DB", err);
});

// Starting the server
app.listen(PORT, () => {
  console.log(`Server is now listening on port: ${PORT}`);
});


// Entry Point for the server
// A server as a black box is connected to a database and a myriad of front-ends
// A server's internal structure is built from routes -> controllers -> models
