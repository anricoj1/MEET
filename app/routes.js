module.exports = function(app, passport) {
    app.get('/', (req, res) => {
        res.render('../views/pages/index.ejs', {user : req.user})
    });
}