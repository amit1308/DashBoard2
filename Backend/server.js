const express = require("express");

const DbConnect = require("./database.js");
const DetailsModel = require("./models/details.js");
const bodyParser = require("body-parser");
DbConnect();
const app = express();

const cors = require("cors");
const port = 1234;

const data = require("./cardsData");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

let installationData={};
let cofigureData = {};

// app.post("/controlData", async (req, res) => {
//   const data = req.body;
//   await DetailsModel.create(data);
//   console.log(data);
//   // return data;
// });
// app.get("/controldata", async (req, res) => {
    
//   const data= await DetailsModel.find({}).sort({ createdAt: -1 })
//   .limit(1);
//   res.json(data);
// })

app.post("/controlData", async (req, res) => {
   cofigureData = req.body;
});
app.get("/controldata", async (req, res) => {
    
  res.json(cofigureData);
})

app.post("/submit", (req, res) => {
  installationData=req.body;
  // console.log(installationData);
  res.send("Received the data!");
});
app.get("/getInstallationData", (req, res) => {
  res.json(installationData);
});

app.get("/data", (req, res) => {
  return res.json(data);
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
