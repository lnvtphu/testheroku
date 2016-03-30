
module.exports.initialize = function(mongoose){
  mongoose = mongoose.createConnection('mongodb://localhost/traintickets');
  return mongoose;
}
