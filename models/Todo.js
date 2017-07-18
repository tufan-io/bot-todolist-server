var Sequelize = require('sequelize');
module.exports = function(app) {
  if (app === undefined) {
    app = this;
  }
  var sequelize = app.get('sequelize');
  var Todo = sequelize.define('Todo', {
    id: {
      type: "STRING"
    },
    text: {
      type: "STRING"
    },
    completed: {
      type: "BOOLEAN"
    }
  });
  return Todo;
};