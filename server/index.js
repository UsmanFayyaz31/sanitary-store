const path = require("path");
const express = require("express");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
var cors = require("cors");

const routes = require("../routes/api");
const PORT = process.env.PORT || 3001;

const app = express();

mongoose.connect(
  "mongodb+srv://atifhabib:pakistan123@cluster0.io2ehxw.mongodb.net/?retryWrites=true&w=majority",
  {
    useNewUrlParser: false,
    useUnifiedTopology: true,
  }
);

mongoose.connection.on("connected", () => {
  console.log("Mongoose is connected!!!!");
});

app.use(cors());
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
