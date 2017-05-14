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
    if (req.user) {
        req.user.getFollowing()
            .then(function (users) {
                res.send({
                    success: true,
                    data: {
                        users,
                        user: req.user
                    }
                });
            });
    } else {
        res.send({
            success: true,
            data: {
                user: null
            }
        });
    }
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

router.get("/feed", helper.secureRoute, function (req, res, next) {
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

router.post("/follow", helper.secureRoute, function (req, res, next) {
    req.user.follow(req.body.id)
        .then((user) => {
            res.send({
                success: user && true,
                data: {
                    id: req.body.id
                }
            });
        })
        .catch((error) => {
            res.send({
                success: false,
                data: {
                    id: req.body.id
                }
            });
        });
});

router.post("/unfollow", helper.secureRoute, function (req, res, next) {
    req.user.unfollow(req.body.id)
        .then((user) => {
            res.send({
                success: user && true,
                data: {
                    id: req.body.id
                }
            });
        })
        .catch((error) => {
            res.send({
                success: false,
                data: {
                    id: req.body.id
                }
            });
        });
});

router.get("/following", helper.secureRoute, function (req, res, next) {
    req.user.getFollowing()
        .then(function (users) {
            res.send({
                success: true,
                data: {
                    users
                }
            });
        });
});

module.exports = router;
