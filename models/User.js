var mongoose = require("mongoose");
var Post = require("./Post");

var UserSchema = mongoose.Schema({
    name: String,
    googleId: String,
    email: { type: String, unique: true },
    avatar: String,
    following: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
    created_at: Date,
    updated_at: Date
});

UserSchema.methods.getFeed = function () {
    return Post.find({ author: { $in: this.following } }, null, { sort: { created_at: -1 } });
}

UserSchema.pre("save", function(next) {
    const now = new Date();
    if (!this.created_at) {
        this.created_at = now;
    }
    this.updated_at = now;
    next();
});

var User = mongoose.model("User", UserSchema);
module.exports = User;
