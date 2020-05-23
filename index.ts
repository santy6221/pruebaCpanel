import express from "express";
import bodyParser from "body-parser";

const app = express();

const {port} = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.route('./pilots')
.get()
.post()
.put()
.delete();