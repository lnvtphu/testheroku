var mongoose        = require('mongoose');
var connectDB       = require('../../connect_mongodb');
var Schema   = mongoose.Schema;
mongoose = connectDB.initialize(mongoose);

var AdminModel = new Schema({
    _id: String,
    name: String,
	password: String,
	level: Number
});



var Admin = mongoose.model('Admin', AdminModel);
module.exports = {

    login: function(req, res){
        var name = req.body.name;
        var pass = req.body.pass;
        var admincheck = Admin.findOne({
            name: name
        });
        admincheck.exec(function(err,adm){
            if(err)
                res.send(err);
            if(!adm){
                res.send({message: 'Name is incorrect'});
            }else if(pass != adm.password){
                 res.send({message: 'Password is incorrect'});
            }else{
                res.send({message: 'Login success'});
            }
        });
    }
}
