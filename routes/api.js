var express = require('express');
var router = express.Router();

router.get('/user', function(req, res, next) {
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
