var express = require("express");
var passport = require("passport");
var router = express.Router();
var User = require("../models/User");
var Post = require("../models/Post");
var helper = require("../libraries/helper");

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

router.get("/feed", helper.secureRoute, function(req, res, next) {
    req.user.getFeed()
        .then(function (feed) {
            res.send({
                success: true,
                data: feed
            });
        })
        .catch(function (err) {
            res.send({
                success: false
            });
        });
});

module.exports = router;
