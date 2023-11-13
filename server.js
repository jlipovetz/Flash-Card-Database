const path = require("path");
const express = require("express");
const exphbs = require('express-handlebars');

const routes = require("./controllers");
const sequelize = require("./config/connection");

// Import the custom helper methods (if we add any)
const helpers = require('./utils/helpers');

const app = express();
const PORT = process.env.PORT || 3001;

// Incorporate the custom helper methods (if present)
const hbs = exphbs.create({ helpers });

app.engine("handlebars", hbs.engine); // express: here's a new rendering engine
app.set("view engine", "handlebars"); // express: make handlebars the default renderer

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "public")));

app.use(routes);

// Import express-session (use if we end up using sessions)
// const session = require('express-session');

// if we are going to use sessions we need this
// const SequelizeStore = require('connect-session-sequelize')(session.Store);

// use this if you don't have a /utils/helpers file
// const hbs = exphbs.create({});

// Set up sessions with cookies
// const sess = {
//   secret: 'Super secret secret',

//   // create a cookie
//   cookie: {
//     // Stored in milliseconds
//     maxAge: 24 * 60 * 60 * 1000, // expires after 1 day
//   },
//   resave: false,

//   // save new sessions even if user does not log in
//   saveUninitialized: true,

//   // where to store the cookie
//   store: new SequelizeStore({
//     db: sequelize,
//   }),
// };

// use this if we end up using sessions
// app.use(session(sess));

// handlebars-specific?
// app.use(require("./controllers/dish-routes"));

const okToSync = (process.env.NODE_ENV === "production") ? false : true;

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
});
