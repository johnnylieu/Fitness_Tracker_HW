const express = require("express");
const morgan = require("morgan");
const mongoose = require("mongoose");
const apiRoutes = require("./routes/apiRoutes");
const htmlRoutes = require("./routes/htmlRoutes");
const dotenv = require("dotenv").config();
// const { MONGODB_URI } = process.env;

const app = express();
const PORT = process.env.PORT || 8080;

app.use(morgan("dev"));

app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use(express.static("public"));

var MONGODB_URI = process.env.MONGODB_URI || "mongodb://localhost/workout";
mongoose.connect(MONGODB_URI, {
    useNewUrlParser: true,
    useFindAndModify: false
});

app.use(apiRoutes);
app.use(htmlRoutes);

app.listen(PORT, function(){
    console.log(`Listening on port ${PORT}`)
});