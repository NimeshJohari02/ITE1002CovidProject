// fetch("http://api.covid19api.com/summary")
// .then((res) => res.json())
// .then((apidata) => {
//   res.render("home", {
//     deaths: apidata.Global.TotalDeaths,
//     confirmed: apidata.Global.TotalConfirmed,
//     recover: apidata.Global.TotalRecovered,
const fetch = require("node-fetch");

async function getData() {
  const apidata = await (
    await fetch("http://api.covid19api.com/summary")
  ).json();
  return {
    deaths: apidata.Global.TotalDeaths,
    confirmed: apidata.Global.TotalConfirmed,
    recover: apidata.Global.TotalRecovered,
  };
}
async function getTable() {}
module.exports = {
  getData: getData,
};
