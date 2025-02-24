const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Hello from CI/CD pipeline!");
});

app.use("/test", (req, res) => {
  res.send("Hello from testing!");
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`App running on port : ${PORT}`));
