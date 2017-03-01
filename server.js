const express = require("express");

var app = express();

app.use(express.static("srv"));
app.use("/lib", express.static("lib"));
app.use("/src", express.static("src"));

app.listen(3579);
