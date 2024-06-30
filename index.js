const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

var users = [
  {
    name: "rocky",
    kidneys: [
      {
        healthy: false,
      },
    ],
  },
];

app.get("/", (req, res) => {
  const rockyKidneys = users[0].kidneys;
  const numberOfKidneys = rockyKidneys.length;
  const numberOfHealthyKidneys = rockyKidneys.filter(
    (kidney) => kidney.healthy === true
  ).length;
  const numberOfUnhealthyKidneys = numberOfKidneys - numberOfHealthyKidneys;
  res.json({
    numberOfKidneys,
    numberOfHealthyKidneys,
    numberOfUnhealthyKidneys,
  });
});

app.post("/", (req, res) => {
  // (isHealthy )  is the json object with user sends while making request
  // for client side  request and that is how we are access isHealthy
  // {
  //   "isHealthy": true
  // }
  const isHealthy = req.body.isHealthy;
  users[0].kidneys.push({
    healthy: isHealthy,
  });
  res.json({
    msg: "Healthy kidney is Done!",
  });
});

app.put("/", (req, res) => {
  users[0].kidneys.forEach((kidney) => (kidney.healthy = true));
  console.log(req.body);
  res.json({ msg: "All kidneys updated to healthy!" });
});

app.delete("/", (req, res) => {
  healthyKidneys = users[0].kidneys.filter((kidney) => kidney.healthy === true);
  users[0].kidneys = healthyKidneys;
  res.json({ msg: "Deleted All unhealthy kidneys" });
});

/// reading system file on browser
app.get("/files/:fileName", (req, res) => {
  const name = req.params.fileName;
  fs.readFile(name, "utf8", (err, data) => {
    res.send({ data });
  });
});

app.listen(3000);
