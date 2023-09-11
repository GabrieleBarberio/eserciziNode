const express = require("express");
const app = express.Router();
const Joi = require("joi");
const planets = require("../../db");

const multer = require("multer");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./Es14/uploads");
  },
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage });

const {
  getAll,
  getById,
  addOne,
  updateById,
  deleteOne,
  uploadImage,
} = require("../../controllers/planeControllers");

/**
 * @path /api/planets
 * get all palnets from db
 */

app.get("/", getAll);

/**
 * @path /api/planets/:id
 * get planet by id from db
 */

app.get("/:id", getById);

/**
 * @path /api/planets
 * add a new planet
 */

app.post("/", addOne);

/**
 * @path /api/planets/:id
 */

app.put("/:id", updateById);

/**
 * @path /api/planets/:id
 */

app.delete("/:id", deleteOne);
app.post("/:id/image", upload.single("image"), uploadImage);

module.exports = app;
