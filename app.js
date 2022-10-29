import bodyParser from "body-parser";
import express from "express";

const app = express();
const PORT = 3333;

app.get("/", (req, res) => {
  res.status(200).json({
    message: "Hello to our app",
  });
});

app.get("/new-page", (req, res) => {
  res.json({
    message: "new page",
  });
});

app.listen(PORT, () => console.log("App started on port: " + PORT));
