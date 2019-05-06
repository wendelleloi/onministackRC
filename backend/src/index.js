const express = require("express");

const mongoose= require("mongoose");

const cors = require("cors");

const app = express();

const server = require('http').Server(app);
const io = require('socket.io')(server);


mongoose.connect(
    "mongodb://goweek-wendell:12051999w@ds227255.mlab.com:27255/goweek-wendell",
{
    useNewUrlParser:true
});

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));

app.use((req, res, next)=>{
    req.io = io;

    return next();
});
app.use(cors());

app.use(express.json());

app.use(require("./routes"));

server.listen(3000,()=>{
    console.log("server started on port 3000");
});