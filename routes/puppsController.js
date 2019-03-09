const express = require(`express`);
const router = express.Router();
const pupps = require (`../models/pupps`);
// get routes -> index.handlebars
router.get(`/`, function(req, res) {
  res.render(`index`);
});
