import express from "express";
import bodyParser from "body-parser";

const app = express();

const {port} = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import * as pilotController from "./controllers/pilotController";

app.route('./pilots')
.get(pilotController.getPilots)
.post(pilotController.CreatePilots)
.put(pilotController.update)
.delete(pilotController.del);

app.route('./sponsors')
.get()
.post()
.put()
.delete();

app.route('./teams')
.get()
.post()
.put()
.delete()

app.route('./articles')
.get()
.post()
.put()
.delete()
