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
    var list = [...this.following, this._id];
    return Post.find({ author: { $in: list } }, null, { sort: { created_at: -1 } }).populate("author");
}

UserSchema.methods.follow = function (id) {
    var self = this;
    return User.findById(id)
        .then(function (user) {
            if (user) {
                if (self.following.indexOf(user._id) === -1) {
                    self.following.push(user._id);
                    return self.save();
                }
            }
            return false;
        });
}

UserSchema.methods.unfollow = function (id) {
    var self = this;
    return User.findById(id)
        .then(function (user) {
            if (user) {
                var index = self.following.indexOf(user._id);
                if (index !== -1) {
                    console.log(self.following);
                    self.following.splice(index, 1);
                    console.log(self.following);
                    return self.save();
                }
            }
            return false;
        });
}

UserSchema.methods.getFollowing = function () {
    return User.find({ _id: { $in: this.following } });
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
