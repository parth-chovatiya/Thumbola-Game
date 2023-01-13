const express = require("express");
const app = express();

const API = require("./routers/index.router");

const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use("/api", API);

app.get("/", (req, res) => {
  res.status(200).send("Welcome to the Thumbola.");
});

app.listen(PORT, () => {
  console.log(`Your server is running at PORT: ${PORT}`);
});
