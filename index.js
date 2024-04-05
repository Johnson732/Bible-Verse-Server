const express = require("express");
const cors = require("cors");
const axios = require("axios");
const app = express();

app.use(cors());
app.use(express.json());

const url = "https://bible-api.com/?random=verse";


app.get("/verse", async (req, res) => {
  const response = await axios.get(url,{
    headers:{
      "Content-Type":"application/json",
    },
  });
  res.send("server running");
  //res.json(response.data);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Hey Express Server running on port ${PORT}`);
});
module.exports = app;
//exports.api = functions.https.onRequest(app);
