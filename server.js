const express = require(`express`); 
const bodyParser = require(`body-parser`);
const methodOverride = require(`method-override`); 
const app = express(); 
const PORT = process.env.PORT || 8080; 
// Requiring our models for syncing
const db = require(`./models`);
// Serve static content for the app from the `public` directory //
app.use(express.static(process.cwd() + `/public`));
// Parse application/x-www-form-urlencoded 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(methodOverride(`method`))
// Parse application/json 
app.use(bodyParser.json()); 
// Set Handlebars // 
const handlebars = require(`express-handlebars`); 
app.engine(`handlebars`, handlebars({
  extname: `handlebars`,
  defaultLayout: `main`,
  layoutsDir: __dirname + `/views/layouts/`,
  partialsDir: __dirname + `/views/partials/`
}));
app.set(`view engine`, `handlebars`); 

// Static directory
app.use(express.static(`public`));
// Routes
// =============================================================
require(`./routes/api-routes`)(app);

// Syncing our sequelize models and then starting our Express app
// =============================================================
// db.sequelize.sync({ force: true }).then(function() {
app.listen(PORT, function() {
 console.log(`App listening on PORT` + PORT);
});
// });
