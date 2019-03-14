const express = require(`express`);
const bodyParser = require(`body-parser`);
const methodOverride = require(`method-override`);
const handlebars = require(`express-handlebars`);
const path = require(`path`);
<<<<<<< HEAD
const app = express(); 
const sequelize = require(`sequelize`);
const morgan = require(`morgan`); 
const cookieParser = require('cookie-parser');
// const session = require(`express-session`);
const PORT = process.env.PORT || 8080; 
=======
const app = express();
const sequelize = require('sequelize');
const PORT = process.env.PORT || 8080;
>>>>>>> master

// Get our models
const db = require(path.join(__dirname, `models`));
// const db = require('./models');

// Serve static content for the app from the `public` directory //
// const directory_public = path.join(__dirname, `public`);
// app.use(express.static(directory_public));

// app.use("/public", express.static(path.join(__dirname, "public")));

// Set up Express to handle parsing data
<<<<<<< HEAD
app.use(bodyParser.json()); 
app.use(bodyParser.text()); 
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.urlencoded({ extended: false})); 
app.use(methodOverride(`method`))
app.use(cookieParser());
// app.use(session({
//   secret: 'ILOVECATS',  //process.env.SECRET
//   cookie: { maxAge: 6000000, secure: false },
//   resave: false,
//   saveUninitialized: true
// }));
app.use(morgan());

// app.use(express.urlencoded({
//   extended: true
// }));
// app.use(express.json()); //24:44 Esterling uses app.use(express)

// Set Handlebars // 
const routes = require('./routes/puppsController');
app.use('/', routes);
=======
app.use(bodyParser.json());
app.use(bodyParser.text());
app.use(bodyParser.urlencoded({extended: true}));
app.use(methodOverride(`method`));

// Set Handlebars
const routes = require('./routes/puppsController');
const apiRoute = require('./routes/api-routes')(app);

app.use(routes);
>>>>>>> master

const apiRoutes = require('./routes/api-routes');
app.use('/api', apiRoutes);
app.engine(`handlebars`, handlebars({
  extname: `handlebars`,
  defaultLayout: `main`,
  layoutsDir: __dirname + `/views/layouts/`,
  partialsDir: __dirname + `/views/partials/`,
}));
app.set(`view engine`, `handlebars`);
// Static directory
app.use(express.static(`public`));
// Set Routes directory
const directoryRoutes = path.join(__dirname, `routes`);
// Listen for connections on the port
// db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log(`App listening on PORT` + PORT);
<<<<<<< HEAD
  })
// });
=======
  });
});
>>>>>>> master
