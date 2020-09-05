const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");
const _ = require("lodash");
const mongoose = require("mongoose");
const fetch = require("node-fetch");
const utils = require("./public/js/universal");
const app = express();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", (req, res) => {
  utils.getData().then((cr) => {
    res.render("home", {
      deaths: cr.deaths,
      confirmed: cr.confirmed,
      recover: cr.recover,
      active: cr.active,
    });
  });
});

let obj = {};

app.get("/table", (req, res) => {
  res.render("table", { distName: [], distCasesArr: [] });
});

app.post("/table", (req, res) => {
  const selectedState = req.body.state;
  console.log(selectedState);
  utils.getTable().then((dt) => {
    let state = dt[`${selectedState}`];
    let distName = Object.keys(state.districtData);
    let distCasesArr = Object.values(state.districtData);
    res.render("table", { distName: distName, distCasesArr: distCasesArr });
  });
});

app.listen(3000, () => {
  console.log("Server  On 3000");
});
