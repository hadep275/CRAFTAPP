import express from "express";
import { inventoryRouter } from "./routes/inventory.js";
import { userRouter } from "./routes/userRoutes.js";
import dotenv from "dotenv";
import {contactRouter} from "./routes/contactRoutes.js"
import path from 'path'

dotenv.config();
const app = express();
const port = 6660;
const __dirname = path.resolve()
const pathToBuild = path.join(__dirname, '../frontend/dist')
app.use(express.static(pathToBuild));

app.use(express.json());
app.use("/api/user", userRouter);
app.use("/api/inventory", inventoryRouter);
app.use('/api/contact', contactRouter);

app.listen(port, () => {
  console.log(`To Craft is to life: ${port}`);
});

app.get("/", (req, res) => {
  const name = req.body;
  if (name) {
    res.send("Hello World!");
  }
});

