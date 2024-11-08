// app.js
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const authRouter = require("./routes/auth");

const app = express();

// Middleware untuk parsing body request
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Sajikan file statis (misalnya file HTML)
app.use(express.static(path.join(__dirname, "public")));

// Route untuk autentikasi
app.use("/", authRouter);

module.exports = app;
