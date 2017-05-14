var mongoose = require("mongoose");

var PostSchema = mongoose.Schema({
    message: String,
    author: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    created_at: Date,
    updated_at: Date
});

PostSchema.pre("save", function(next) {
    const now = new Date();
    if (!this.created_at) {
        this.created_at = now;
    }
    this.updated_at = now;
    next();
});

var Post = mongoose.model("Post", PostSchema);
module.exports = Post;
