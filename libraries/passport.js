var passport = require('passport');
var GoogleStrategy = require('passport-google-oauth').OAuth2Strategy;
var User = require("../models/User");

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: process.env.GOOGLE_CALLBACK_URL
    },
    function(accessToken, refreshToken, profile, done) {
        User.findOne({ googleId: profile.id })
            .then(function (user) {
                if (user) {
                    return user;
                }

                var newUser = new User({ googleId: profile.id });
                return newUser.save();
            })
            .then(function (user) {
                done(null, user);
            })
            .catch(function (err) {
                done(err, user);
            });
    }
));

passport.serializeUser(function(user, done) {
    done(null, user._id);
});

passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
        done(err, user);
    });
});
