import express from "express";
const app = express();

app.set("views", "viewsFolder");

app.get("/", (req, res) => {
  res.render("home.ejs", {
    title: "home page",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "contact page",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "about page",
  });
});

export default app;
