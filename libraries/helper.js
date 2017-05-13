module.exports = {
    secureRoute: function (req, res, next) {
        if (!req.user) {
            res.send({
                success: false,
                message: "User need to be logged in"
            });
        } else {
            next();
        }
    }
};
