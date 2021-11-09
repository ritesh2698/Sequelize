const Sequelize = require("sequelize");

const sequelize = new Sequelize("ritesh", "ritesh", "password", {
  dialect: "mysql",
  host: "localhost",
});

module.exports = sequelize;
