const express = require("express");
const app = express()

const index = require("./routes/index")
const contact = require("./routes/agendaRoutes")

app.use(express.json());

app.use("/", index);
app.use("/", contact)

module.exports = app