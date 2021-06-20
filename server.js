import mongoose from "mongoose";
import express from "express";
// app config
const app = express();
const port = 9000;
// middlewares

// db config

// api endpoints
app.get("/", (req, res) => res.status(200).send("Hello World"));
// listener
app.listen(port, () => console.log(`Listening on localhost:${port}`))


