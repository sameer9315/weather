const express = require("express");

const weather = require("./Routes/weather");
const city = require("./Routes/city");
const bodyParser = require("body-parser");

const Student = require("./db");
const multer = require("multer");
const data = require("./Routes/data");

const app = express();
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With,Content-Type, Accept,Authorization,"
  );
  if (req.method === "OPTIONS") {
    res.setHeader(
      "Access-Control-Allow-Methods",
      "GET, POST,PUT,DELETE,OPTIONS"
    );
    return res.status(200).json({});
  }

  next();
});

// const storage = multer.diskStorage({
//   destination: "./public/uploads/",
//   filename: (req, file, cb) => {
//     cb(null, file.originalname);
//   },
// });

// const upload = multer({ storage }).single("imageLoc");

// app.post("/upload", (req, res) => {
//   upload(req, res, (err) => {
//     if (err) {
//       console.error("Error uploading image:", err);
//       return res.status(500).json({ error: "Error uploading image" });
//     }

//     const { name, roll, branch, mobile } = req.body;
//     const imageLoc = req.file.filename;

//     const newStudent = new Student({
//       name,
//       roll,
//       branch,
//       mobile,
//       imageLoc,
//     });

//     newStudent
//       .save()
//       .then((savedStudent) => {
//         console.log("Student details saved:", savedStudent);
//         return res
//           .status(200)
//           .json({ message: "Student details saved successfully" });
//       })
//       .catch((error) => {
//         console.error("Error saving student details:", error);
//         return res.status(500).json({ error: "Error saving student details" });
//       });
//   });
// });
app.use("/data", data);
app.use("/weather", weather);
app.use("/city", city);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});

// const { MongoClient } = require("mongodb");
// const dbName = "Weather";
// const mongoURL = "mongodb://127.0.0.1:27017";
// const collectionName = "day1";

// async function connectToMongo() {
//   const client = await MongoClient.connect(mongoURL);
//   const db = client.db(dbName);
//   const collection = db.collection(collectionName);

//   const result = await collection.find({}).toArray();

//   console.log(result);

//   // client.close();
// }

// connectToMongo();

// async function getCollectionData(collection) {
//   // Perform a query to get data from the collection
//   // You can specify a query filter here if you want to filter the data
//   const data = await collection.find({}).toArray();

//   return data;
// }

// async function connectToMongo() {
//   try {
//     const client = await MongoClient.connect(mongoURI, {
//       useUnifiedTopology: true,
//     });
//     const db = client.db(dbName);
//     console.log("Connected to MongoDB!");
//     // Save the 'db' object to use it across your application, e.g., in routes or middleware
//     app.locals.db = db;
//   } catch (error) {
//     console.error("Error connecting to MongoDB:", error);
//   }
// }

// // Call the connectToMongo function to establish the connection
// connectToMongo();

// app.post("/api/receiveData", async (req, res) => {
//   try {
//     // Fetch data from the API link (replace 'YOUR_API_LINK' with the actual API link)
//     const response = await fetch(
//       "http://api.openweathermap.org/data/2.5/forecast?q=delhi&appid=&unit=metric"
//     );
//     const data = await response.json();

//     // Store the received data on the server
//     storedData = data;

//     console.log("Data received and stored on the server:", data);
//     res.json({
//       message: "Data received and stored successfully on the server",
//     });
//   } catch (error) {
//     console.error("Error receiving and storing data:", error);
//     res.status(500).json({ error: "Failed to receive and store data" });
//   }
// });
// app.get("/api/getStoredData", (req, res) => {
//   console.log("Sending stored data to the client:", storedData);
//   res.json(storedData);
// });

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

// const http = require("http");
// const myserver = http.createServer((req, res) => {
//   res.end("Hello From Server");
// });

// myserver.listen(3000, () => {
//   console.log("Server Started!");
// });

// Route handler to fetch data from the API link
// app.get("/api/fetchData", (req, res) => {
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
// module.exports = app;
