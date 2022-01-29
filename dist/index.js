"use strict";
var express = require("express");
var app = express();
var cors = require("cors");
require("dotenv").config();
// Middlware.
app.use(cors());
app.use(express.static("public"));
app.get("/", function (req, res) {
    res.sendFile(__dirname + "/views/index.html");
});
var listener = app.listen(process.env.PORT || 3000, function () {
    console.log("Your app is listening on port " + listener.address().port);
});
//# sourceMappingURL=index.js.map