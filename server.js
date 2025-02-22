const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from CI/CD pipeline!");
});

app.use("/test", (req, res) => {
  res.send("Hello from testing!");
});

app.use("/api", (req, res) => {
  res.send("Hello from api testing!");
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`App running on port : ${PORT}`));
