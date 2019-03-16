
var orm = require("../config/orm.js");

var playDate = {
    all: function(cb) {
      orm.all("playDate", function(res) {
        cb(res);
      });
    },
    // The variables cols and vals are arrays.
    create: function(cols, vals, cb) {
      orm.create("playDate", cols, vals, function(res) {
        cb(res);
      });
    },
    update: function(objColVals, condition, cb) {
      orm.update("playDate", objColVals, condition, function(res) {
        cb(res);
      });
    },
    delete: function(condition, cb) {
      orm.delete("playDate", condition, function(res) {
        cb(res);
      });
    }
  };


module.exports = playDate;