// Requiring path to so we can use relative routes to our HTML files
const path = require("path");
// constdnb = require("./models");

// Requiring our custom middleware for checking if a user is logged in
const isAuthenticated = require("../config/middleware/isAuthenticated");
const { is } = require("sequelize/types/lib/operators");

module.exports = function(app) {
  app.get("/", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("signup");
    //res.sendFile(path.join(__dirname, "../public/signup.html"));
  });

  app.get("/login", (req, res) => {
    // If the user already has an account send them to the members page
    if (req.user) {
      res.redirect("/members");
    }
    res.render("login");
    //res.sendFile(path.join(__dirname, "../public/login.html"));
  });

  // Here we've add our isAuthenticated middleware to this route.
  // If a user who is not logged in tries to access this route they will be redirected to the signup page
  app.get("/members", isAuthenticated, (req, res) => {
    res.render("members");
    //res.sendFile(path.join(__dirname, "../public/members.html"));
  });

  app.get("/cart", isAuthenticated, (req, res) => {
    res.render("cart", {title: "Express"});
  });

  app.get("/order", isAuthenticated, (req, res) => {
    res.render("order", {title: "Express"});
  });




  //app.get("/cart", (req, res) => {
  //  res.sendFile(path.join(__dirname, "../public/cart.html"));
  //});

  //app.get("/orderform", (req, res) => {
  //  res.sendFile(path.join(__dirname, "../public/orderForm.html"));
  //});
};
