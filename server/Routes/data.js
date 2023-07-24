const express = require("express");
const Student = require("../db");
const multer = require("multer");
const router = express.Router();
const app = express();
const bodyParser = require("body-parser");
app.use(bodyParser.json());

app.use(bodyParser.urlencoded({ extended: false }));

const storage = multer.diskStorage({
  destination: "./public/uploads/",
  filename: (req, file, cb) => {
    const uniqueFileName = Date.now() + "-" + file.originalname;
    cb(null, uniqueFileName);
  },
});

const upload = multer({ storage }).single("imageLoc");

router.post("/", (req, res) => {
  upload(req, res, (err) => {
    if (err) {
      console.error("Error uploading image:", err);
      return res.status(500).json({ error: "Error uploading image" });
    }

    const { name, roll, branch, mobile } = req.body;
    const imageLoc = req.file.filename;

    const newStudent = new Student({
      name,
      roll,
      branch,
      mobile,
      imageLoc,
    });

    newStudent
      .save()
      .then((savedStudent) => {
        console.log("Student details saved:", savedStudent);
        return res
          .status(200)
          .json({ message: "Student details saved successfully" });
      })
      .catch((error) => {
        console.error("Error saving student details:", error);
        return res.status(500).json({ error: "Error saving student details" });
      });
  });
});

module.exports = router;
