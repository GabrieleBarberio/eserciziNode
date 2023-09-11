const Joi = require("joi");

let planets = require("../db");

const getAll = async (_, res) => {
  return res.status(200).json({ planets });
};

const getById = async (req, res) => {
  const { id } = req.params;
  const planet = planets.find((planet) => planet.id === Number(id));

  if (!planet) {
    return res.status(404).json({ msg: "Planet not found" });
  }

  return res.status(200).json({ planet });
};

const addOne = async (req, res) => {
  const { id, name } = req.body;
  const schema = Joi.object().keys({
    id: Joi.number().required(),
    name: Joi.string().required(),
  });
  const newPlanet = await schema.validateAsync(req.body);

  const planet = planets.find(
    (planet) => planet.id === Number(id) || planet.name === name
  );

  if (planet) {
    return res.status(400).json({ msg: "Planet already exist" });
  }

  planets = [...planets, newPlanet];

  return res.status(201).json({ msg: "Planet succesfully added" });
};

const updateById = async (req, res) => {
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

  return res.status(200).json({ msg: "Planet succesfully added" });
};

const deleteOne = async (req, res) => {
  const { id } = req.params;

  const planet = planets.find((planet) => planet.id === Number(id));

  if (!planet) {
    return res.status(404).json({ msg: "Planet not found" });
  }

  planets = planets.filter((planet) => planet.id !== Number(id));

  console.log(planets);

  return res.status(200).json({ msg: "Planet succesfully deleted" });
};

module.exports = { getAll, getById, addOne, updateById, deleteOne };
