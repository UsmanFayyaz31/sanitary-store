const express = require("express");
const User = require("../modals/Users");
const Product = require("../modals/Products");
const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

const router = express.Router();

var multer = require("multer");

var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    fs.mkdir(path.join(__dirname, "/uploads/"), (err) => {
      cb(null, path.join(__dirname, "/uploads/"));
    });
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + file.originalname);
  },
});

var upload = multer({ storage: storage });

router.post("/product", upload.single("image"), async (req, res, next) => {
  const { filename: image } = req.file;

  await sharp(req.file.path)
    .jpeg({ quality: 60 })
    .toFile(path.resolve(req.file.destination, "resized", image));
  fs.unlinkSync(req.file.path);

  var obj = {
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    product_description: req.body.product_description,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/resized/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };

  Product.create(obj, (err, item) => {
    if (err) {
      console.log(err);
      res.json({ success: false });
    } else {
      return res.json({
        msg: "Your data has been saved!!!!!!",
        success: true,
      });
    }
  });
});

router.post("/product/:id", upload.single("image"), async (req, res) => {
  const { filename: image } = req.file;

  await sharp(req.file.path)
    .jpeg({ quality: 60 })
    .toFile(path.resolve(req.file.destination, "resized", image));
  fs.unlinkSync(req.file.path);

  var obj = {
    product_name: req.body.product_name,
    product_price: req.body.product_price,
    product_description: req.body.product_description,
    img: {
      data: fs.readFileSync(
        path.join(__dirname + "/uploads/resized/" + req.file.filename)
      ),
      contentType: "image/png",
    },
  };

  Product.updateOne({ _id: req.params.id }, obj)
    .then(() => {
      res.json({ data: obj, success: true });
    })
    .catch((err) => {
      res.json({ success: false, error, err });
    });
});

router.delete("/product/:id", (req, res) => {
  Product.remove({ _id: req.params.id })
    .then(() => {
      res.json({ success: true });
    })
    .catch((err) => {
      res.json({ success: false, error, err });
    });
});

router.get("/product", (req, res) => {
  Product.find({}, (err, items) => {
    if (err) {
      res.json({ success: false });
    } else {
      res.json({ data: items, success: true });
    }
  });
});

router.post("/sign-up", (req, res) => {
  const data = req.body;
  const user = new User(data);

  user.save((error) => {
    if (error) {
      return res.status(400).send({
        message:
          error.code === 11000
            ? Object.keys(error.keyPattern) + " already exists !"
            : error,
        success: false,
      });
    }
    return res.json({
      msg: "Your data has been saved!!!!!!",
      success: true,
      user: user,
    });
  });
});

router.post("/sign-in", (req, res) => {
  const data = req.body;

  User.find({ email: data.email, password: data.password })
    .then((data) => {
      if (data.length > 0) res.json({ data: data, success: true });
      else res.json({ success: false });
    })
    .catch((error) => {
      console.log("error: ", error);
    });
});

module.exports = router;
