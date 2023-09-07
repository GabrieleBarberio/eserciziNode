require("dotenv").config();
const port = process.env.SERVER_PORT;
const express = require("express");
const morgan = require("morgan");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("dev")); // impostazione predefinita per il debbugging per devs

/**
 * risultato (nel terminale del server) della chiamata get a http://localhost:3010 grazie a morgan("dev")
 * GET / 200 4.537 ms - 48
 * GET /favicon.ico 404 2.279 ms - 150
 */

const planets = [
  {
    id: 1,
    name: "Earth",
  },
  {
    id: 2,
    name: "Mars",
  },
];

app.get("/", (_, res) => {
  return res.status(200).json(planets);
});

app.listen(port, () => {
  console.log(`Server up and running on port ${port}`);
});
