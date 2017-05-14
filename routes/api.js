var express = require("express");
var passport = require("passport");
var router = express.Router();
var User = require("../models/User");
var Post = require("../models/Post");

router.get("/login", passport.authenticate("google", { scope: ["email"] }));

router.get("/login/redirect",
    passport.authenticate("google", { failureRedirect: "/login" }),
    function (req, res, next) {
        res.redirect("/home")
    }
)

router.get("/logout", function (req, res, next) {
    req.logout();
    res.redirect("/");
});

router.get("/bootstrap", function (req, res, next) {
    res.send({
        success: true,
        user: req.user
    });
});

router.post("/search", function (req, res, next) {
    var text = req.body.text;
    var users = User.find({ $or: [{email: new RegExp(text)}, {name: new RegExp(text)}] });
    var posts = Post.find({ message: new RegExp(text) }).populate("author");
    Promise.all([users, posts])
        .then(function (values) {
            res.send({
                success: true,
                data: {
                    people: values[0],
                    posts: values[1]
                }
            });
        })
        .catch(function (err) {
            res.send({
                success: false
            });
        });
});

router.get("/user", function(req, res, next) {
    setTimeout(function () {
        res.send({
            success: true,
            data: [
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
                {
                    author: "Pramod Kumar",
                    avatar: "/images/mascot.jpg",
                    time: new Date(),
                    message: `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                              Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                              Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                              Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.`
                },
            ]
        });
    }, 5000);
});

module.exports = router;
