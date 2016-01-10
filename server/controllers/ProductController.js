var mongoose = require('mongoose');
var expressJwt = require('express-jwt');

module.exports = function(app, route) {

    

    // Setup the controller for REST
    var Product = mongoose.model('products', app.models.products);



     /*
      * simple GET product list
     

     app.get(app.settings.apiRoute + '/products', function(req, res, next){
            //var logged = !req.user.username==="Guest" ? true:false;
            var logged =true;
            if(logged){
                Product.find({},function(err, products) {
                    if (err) return res.status(404).send("User not found.");

                    return res.status(200).send(products);
                });
            } else {
                return res.status(401).send("Action not authorized");
            }

        });*/

    /*
     * GET product list
     */

     app.get(app.settings.apiRoute + '/products', expressJwt({
            secret: app.settings.secret
        }), function(req, res, next){
            if (req.user.isAdmin || req.user._id != null) {
                Product.find({},function(err, products) {
                    if (err) return res.status(404).send("User not found.");

                    return res.status(200).send(products);
                });
            } else {
                return res.status(401).send("Action not authorized");
            }

        });


    /*
     *  GET product based on name
     
    app.get(app.settings.apiRoute + '/product/:name', expressJwt({
            secret: app.settings.secret
        }),
        function(req, res, next) {
            if (req.user.isAdmin || req.user._id == req.params.id) {
                User.findOne({
                    _id: req.user._id
                }, function(err, user) {
                    if (err) return res.status(404).send("User not found.");

                    return res.status(200).send(user);
                });
            } else {
                return res.status(401).send("Action not authorized");
            }
        });*/


    // Return middleware
    return function(req, res, next) {
        next();
    }
};