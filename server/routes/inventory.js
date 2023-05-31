import express from "express";
export const inventoryRouter = express.Router();
// import { data } from "../mongoose.js";

inventoryRouter.get("/hello", (req, res) => {
  const name = req.body;
  if (name) {
    res.send("Hello World!");
  }
});

inventoryRouter.post("/", (req, res) => {
  const name = req.body.name;
  console.log(req.body);
  if (name) {
    res.send(`Hello ${name}, how can I help you?`);
  } else {
    res.send("hi Who the F*** is there?");
  }
});

inventoryRouter.put("/put", (req, res) => {
  res.send("Sent a PUT request at /user");
});

inventoryRouter.delete("/user", (req, res) => {
  res.send("Got a DELETE request at /user");
});
