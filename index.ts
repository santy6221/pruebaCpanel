import express from "express";
import bodyParser from "body-parser";

const app = express();

const {port} = require('./config');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

import * as pilotController from "./controllers/pilotController";
import * as articleController from "./controllers/articleController";
import * as sponsorController from "./controllers/sponsorController";
import * as teamController from "./controllers/teamController";

app.route('/pilots')
.get(pilotController.getAllPilots)
.post(pilotController.CreatePilot)
.put(pilotController.update)
.delete(pilotController.del);

app.route('/pilots/byPodium')
.get();

app.route('/pilots/3best')
.get();

app.route('/pilots/changenick')
.put();

app.route('/pilots/allpoints')
.get();

app.route('/sponsors')
.get(sponsorController.getAllSponsors)
.post(sponsorController.CreateSponsor)
.put(sponsorController.update)
.delete(sponsorController.del);

app.route('/sponsors/seeproducts')
.get();

app.route('/sponsors/sponsoredpilots')
.get();

app.route('/sponsors/sponsoredteams')
.get();

app.route('/sponsors/addproduct')
.post();

app.route('/teams')
.get(teamController.getAllTeams)
.post(teamController.CreateTeam)
.put(teamController.update)
.delete(teamController.del)

app.route('/teams/seeAllPoints')
.get();
app.route('/teams/seeTeamCars')
.get();
app.route('/teams/seeAllWins')
.get();
app.route('/teams/SeeTeamCarCard')
.get();

app.route('/articles')
.get(articleController.getAllArticles)
.post(articleController.CreateArticle)
.put(articleController.update)
.delete(articleController.del)

app.route('/articles/AddPilotBiography')
.post();
app.route('/articles/AddTeamBiography')
.post();
app.route('/articles/AddFunfacts')
.post();
app.route('/articles/SeePilotBiography')
.get();
app.route('/articles/SeeTeamBiography')
.get();


app.listen(port, () => {
    console.log(`Node JS Server started at port ${port}`);
});