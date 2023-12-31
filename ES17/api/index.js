const express = require("express");
const app = express.Router();

/**
 * @path /api/users
 */

app.use("/users", require("./Routes/users"));
app.use("/planets", require("./Routes/planets"));

module.exports = app;
