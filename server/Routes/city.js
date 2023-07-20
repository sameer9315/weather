const express = require("express");
const axios = require("axios");
const router = express.Router();

router.get("/", async (req, res) => {
  const body = {
    country: "india",
  };

  const headers = {
    "Content-Type": "application/json",
  };

  const apiLink = `https://countriesnow.space/api/v0.1/countries/cities`;
  axios.post(apiLink, body, { headers }).then((response) => {
    // console.log(response.data);
    res.json(response.data);
  });
});

module.exports = router;
