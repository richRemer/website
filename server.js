const express = require("express");
const sass = require("node-sass-middleware");

var app = express();

app.use(sass({
    src: __dirname + "/res",
    dest: __dirname + "/dist"
}));

app.use(express.static("srv"));
app.use("/dist", express.static("dist"));
app.use("/lib", express.static("lib"));
app.use("/src", express.static("src"));

app.listen(3579);
