var mongoose        = require('mongoose');
var connectDB       = require('../../connect_mongodb');
var Schema          = mongoose.Schema;
mongoose = connectDB.initialize(mongoose);

  //constructor
  var EventModel = new Schema({
      _id: String,
      name: String,
      object: String,
      timeBegin: String,
      timeEnd: String,
      image: String,
      content: String
  });
  var Event = mongoose.model('Event', EventModel);

module.exports = {
      viewall: function(req, res){
          var eventnew = Event.find({}).sort({_id: 1});
          eventnew.exec(function(err, st){
              console.log(err);
              res.json(st);
          });
      },

      /*
      * create train or coach
      */
      create: function(req, res){
          var id = req.body.id;
          var name = req.body.name;
          var object = req.body.object;
          var  timeBegin = req.body.timebegin;
          var timeEnd = req.body.timeend;
          var image = req.body.image;
          var content = req.body.content;
          var eventnew = new Event();
          var eventresult =  Event.find({
              _id: id
          });
          eventresult.exec(function(err,evn){
              if(err){
	 	           res.send(err);
               }
              if(!(evn.length==0)){
                  res.send({message: 'Event Id is exist'});
              }else{
                  eventnew._id = id;
                  eventnew.name = name;
                  eventnew.object = object;
                  eventnew.timeBegin = timeBegin;
                  eventnew.timeEnd = timeEnd;
                  eventnew.image = image;
                  eventnew.content = content;
                  eventnew.save(function(err, evn){
                      console.log(err);
                      res.send({message: 'Created'});
                  });
              }
          });
      },
      /*
      * update information train or coach
      */
      update: function(req, res){
          var id = req.body.id;
          var name = req.body.name;
          var object = req.body.object;
          var timeBegin = req.body.timebegin;
          var timeEnd = req.body.timeend;
          var image = req.body.image;
          var content = req.body.content;
          Event.findOneAndUpdate(
              {_id: id},
              {
                $set:{
                    name: name,
                    object: object,
                    timeBegin: timeBegin,
                    timeEnd: timeEnd,
                    image: image,
                    content: content
                }
              },
              {new : true},
              function(err, evn){
                  if(err){
                      res.send(err);
                  }else if(!evn){
                      res.send({message: 'Event with ID: ' + id + ' does not exist'});
                  }else{
                      res.send({message:'Update success'});
                  }
              }
          );
      },

      /*
      * delete
      */
      delete: function(req, res){
          var id = req.body.id;
          Event.findOneAndRemove(
              {_id:id},
              function(err,evn){
                  if(err){
                      res.send(err);
                  }else if(!evn){
                      res.send({message: 'Event with ID: ' + id + ' does not exist'});
                  }else{
                      res.send({message:'Delete success'});
                  }
              }
          );
      }
  }
