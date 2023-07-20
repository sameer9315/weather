const express = require("express");
const axios = require("axios");
const router = express.Router();

router.post("/", async (req, res) => {
  // console.log("hello");
  const apiLink = `http://api.openweathermap.org/data/2.5/forecast`;
  const datas = req.body;

  const response = await axios.get(apiLink, {
    params: {
      q: datas.city,
      appid: datas.apiKey,
      units: "metric",
    },
  });

  const data = response.data;

  res.json(data);
});

module.exports = router;

// router.get("/", (req, res) => {
//   const apiLink = `http://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=79228b9745f122eab250446ccba3f02c&unit=metric`;

//   http
//     .get(apiLink, (response) => {
//       let data = "";

//       // Concatenate data chunks as they are received
//       response.on("data", (chunk) => {
//         data += chunk;
//       });

//       // When all data is received, parse it as JSON and send it as the response
//       response.on("end", () => {
//         try {
//           const jsonData = JSON.parse(data);
//           console.log("Data fetched from API link:", jsonData);

//           // Respond with the fetched data
//           res.json(jsonData);
//         } catch (error) {
//           console.error("Error parsing JSON:", error);
//           res.status(500).json({ error: "Failed to parse JSON" });
//         }
//       });
//     })
//     .on("error", (error) => {
//       console.error("Error fetching data from API:", error);
//       res.status(500).json({ error: "Failed to fetch data from API" });
//     });
// });
