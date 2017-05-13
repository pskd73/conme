var express = require("express");
var passport = require("passport");
var router = express.Router();

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
