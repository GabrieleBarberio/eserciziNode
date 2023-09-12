const express = require("express");
const app = express.Router();
const Joi = require("joi");
const planets = require("../../../ES16/db");
const {
  getAll,
  getById,
  addOne,
  updateById,
  deleteOne,
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

module.exports = app;
