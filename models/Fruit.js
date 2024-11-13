const { db, DataTypes } = require("../db/connection.js");

const Fruit = db.define("Fruit", {
    name: DataTypes.STRING,
    color: DataTypes.STRING
})

module.exports = Fruit;