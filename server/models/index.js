// Collection point and outlet for all models

const User = require("./userModel");

module.exports = {
    user: User,

    Book: require("./book"),
    Note: require("./note")
}