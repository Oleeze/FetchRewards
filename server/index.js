const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/data", (req, res) => {
  axios
    .get("https://fetch-hiring.s3.amazonaws.com/hiring.json")
    .then((response) => {
      res.send(response.data);
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
