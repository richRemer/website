const express = require("express");
const sass = require("node-sass-middleware");

var app = express();

app.use(express.static("srv"));
app.use(express.static("dist"));
app.use("/lib", express.static("lib"));
app.use("/src", express.static("src"));

app.use(sass({
    src: __dirname + "/res",
    dest: __dirname + "/dist"
}));

app.listen(3579);
