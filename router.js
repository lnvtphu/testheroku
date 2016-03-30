
// models
var admin          = require('./app/models/admin');
var customer       = require('./app/models/customer');
var train          = require('./app/models/train');
var eventTrain     = require('./app/models/eventtrain');


module.exports.initialize = function(app, router){
  // router.use: always call when access website
  router.use(function(req, res, next){
    var url = req.url;
    if( url.length == 1){ // only contain symboy '/'
      res.json({message:'hello! Welcom to website traintickets'});
    }else{
      // next the other router
      next();
    }
  });
  // here:  handle request get, post, delete...
  router.get('/eventtrain/viewall', eventTrain.viewall);
  router.get('/train', train.index);

  router.post('/train/add', train.createTrain);
  router.post('/admin/login',admin.login)
  router.post('/train/find', train.findTrain);
  router.post('/eventtrain/add', eventTrain.create);
  router.post('/eventtrain/update', eventTrain.update);
  router.post('/customer/infor', customer.infor);
  router.post('/customer/create', customer.create);

  router.delete('/train/delete', train.deleteTrain);
  router.delete('/train/delete/coach', train.deleteCoach);
  router.delete('/eventtrain/delete', eventTrain.delete);
  router.delete('/customer/delete', customer.delete);

  router.put('/train/swapJourney', train.swapJourney);
  router.put('/train/edit', train.editTrain);
  router.put('/train/coach/blockcoach', train.blockCoach);
  router.put('/train/coach/editcoach', train.editCoach);
  router.put('/train/coach/blockseat', train.blockSeat);
  router.put('/train/coach/changecoach', train.changeCoach);
  router.put('/customer/update', customer.update);
  router.put('/customer/ticket', customer.ticket);
  app.use('/', router);
  console.log('Router Oke');
}
