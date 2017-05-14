var mongoose = require("mongoose");
var User = require("./models/User");
var Post = require("./models/Post");
var randomstring = require("randomstring");

function getRandom(to, from) {
    from = from || 0;
    return Math.floor((Math.random() * to) + from);
}

mongoose.connect("mongodb://localhost/conme", function(err) {
    User.find({}).select("_id").exec(function (err, ids) {
        for (var i=0; i < ids.length; i++) {
            var id = ids[getRandom(ids.length)]._id;
            var p = new Post({ author: id, message: randomstring.generate(20) });
            p.save();
        }
    });
    for (var i=0; i < 10; i++) {
        // var user = new User({
        //     email: randomstring.generate(7) + "@gmail.com",
        //     name: randomstring.generate(10),
        //     avatar: "/images/mascot.jpg"
        // });
        // user.save();
    }
});
