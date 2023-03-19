const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");
require('dotenv').config()

const routes = require("../routes/api");
const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(
  // "mongodb+srv://usmanfayyaz31:usmanfayyaz5336@cluster0.0xxcz.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
  process.env.DB_URL,
  {
    useNewUrlParser: false,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

app.use(cors());
app.options('*', cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(express.static(path.resolve(__dirname, "../client/build")));

app.use("/api", routes);

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../client/build", "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});
