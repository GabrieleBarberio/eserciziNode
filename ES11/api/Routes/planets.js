const express = require("express");
const app = express.Router();
const Joi = require("joi");
const planets = require("../../db");

/**
 * @path /api/planets
 * get all palnets from db
 */

app.get("/", async (_, res) => {
  return res.status(200).json({ planets });
});

/**
 * @path /api/planets/:id
 * get planet by id from db
 */

app.get("/:id", async (req, res) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));

  if (!planet) {
    return res.status(404).json({ msg: "Planet not found" });
  }

  return res.status(200).json({ planet });
});

/**
 * @path /api/planets
 * add a new planet
 */

app.post("/", async (req, res) => {
  const { id, name } = req.body;
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().required(),
  });

  try {
    const planet = await schema.validateAsync(req.body);
  } catch (e) {
    console.error(e);
  }

  const planet = planets.find(
    (planet) => planet.id === Number(id) || planet.name === name
  );

  if (planet) {
    return res.status(400).json({ msg: "Planet already exist" });
  }

  planets.push(planet);

  return res.status(201).json({ msg: "Planet added" });
});

/**
 * @path /api/planets/:id
 */

app.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  const schema = Joi.object().keys({
    name: Joi.string().required(),
  });

  await schema.validateAsync(req.body);

  const planet = planets.find((planet) => planet.id === Number(id));

  if (!planet) {
    return res.status(404).json({ msg: "Planet not found" });
  }

  planets = planets.map((planet) =>
    planet.id === Number(id) ? { ...planet, name } : planet
  );

  console.log(planets);

  return res.status(200).json({ msg: "Planet succesfull update" });
});

/**
 * @path /api/planets/:id
 */

app.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const planet = planets.find((planet) => planet.id === Number(id));

  if (!planet) {
    return res.status(404).json({ msg: "No planet found, add to database" });
  }

  planets = planets.filter((planet) => planet.id !== Number(id));

  console.log(planets);

  return res.status(200).json({ msg: "Planet succesfull deleted " });
});

module.exports = app;
