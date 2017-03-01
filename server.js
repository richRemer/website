const express = require("express");

var app = express();

app.use(express.static("srv"));
app.use("/lib", express.static("lib"));

app.listen(3579);
