import express from "express";
import routes from "./routes.js";

const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.use("/", routes);

app.listen(3000, console.log("server http://localhost:3000"));
