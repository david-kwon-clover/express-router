const { db, DataTypes } = require("../db/connection.js");

const User = db.define("User", {
    name: DataTypes.STRING,
    age: DataTypes.NUMBER
})

module.exports = User;