const express = require("express");
const path = require("path");
const hbs = require("hbs");
const app = express();

app.use(express.static(path.join(__dirname, "public")));

app.set("view engine", "hbs");
hbs.registerPartials(`${__dirname}/views/partials`);

app.get("/", (request, response) => {
  response.render("home", {
    title: "Home",
    navbar: true,
  });
});

app.get("/about", (request, response) => {
  response.render("about", {
    title: " about",
    navbar: true,
  });
});

app.get("/photos", (request, response) => {
  response.render("photos", {
    title: " Photos",
    navbar: true,
  });
});

app.listen(3000, () => console.log("My first app listening on port 3000!"));
Footer;
