var mongoose = require("mongoose");

var UserSchema = mongoose.Schema({
    name: String,
    googleId: String,
    email: String,
    avatar: String
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
