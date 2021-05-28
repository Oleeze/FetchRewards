const express = require("express");
const axios = require("axios");

const PORT = process.env.PORT || 3001;

const app = express();

app.get("/data", (req, res) => {
  axios
    .get("https://fetch-hiring.s3.amazonaws.com/hiring.json")
    .then((response) => {
      let modifiedResponse = response.data
        .filter((data) => data.name)
        .sort((x, y) => x.name.split(" ")[1] - y.name.split(" ")[1])
        .sort((x, y) => x.listId - y.listId)
        .reduce((a, c) => {
          if (!a[c.listId]) {
            a[c.listId] = [];
          }
          a[c.listId].push(c);

          return a;
        }, {});

      res.send(Object.values(modifiedResponse));
    })
    .catch((e) => {
      res.send(e);
    });
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
