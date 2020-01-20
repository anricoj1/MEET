var LocalStrategy = require('passport-local').Strategy;
var connection = require('./connect');

module.exports = function(passport) {
    passport.serializeUser(function(user, done) {
        done(null, user.username);
    });

    passport.deserializeUser(function(username, done) {
        connection.query("SELECT * FROM User WHERE username = ?",[username], function(err, rows) {
            done(err, rows[0]);
        });
    });

    passport.use('local-signup', new LocalStrategy({
        email : 'email',
        fullname : 'fullname',
        password : 'password',
        passReqToCallback : true
    },
    function(req, email, password, done) {
        connection.query("SELECT * FROM User WHERE email = ?",[email], function(err, rows) {
            if (rows.length) {
                return done(null, false, req.flash('signupMessage', 'Username in Use.'));
            } else {
                var newUser = {
                    id : uuidv3(),
                    email : email,
                    fullname : req.body.fullname,
                    password : bcrypt.hashSync(password, 10)
                };

                var insertQuery = "INSERT INTO User (id, email, fullname, password) VALUES(?,?,?,?)";
                connection.query(insertQuery,[newUser.id, newUser.email, newUser.fullname, newUser.password], function(err, rows) {
                    newUser.id = rows.insertId;

                    return done(null, newUser);
                });
            }
        });
    }));
}