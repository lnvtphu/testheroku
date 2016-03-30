var mongoose        = require('mongoose');
var connectDB       = require('../../connect_mongodb');
var Train           = require('./train_schema');
  mongoose = connectDB.initialize(mongoose);

  module.exports = {
      /*
      * return all train of database
      */
      index: function(req, res){
        
      },
      /*
      * find train's information
      */

      findTrain: function(req, res){

      },

      /*
      * create train or coach
      */
      createTrain: function(req, res){

      },


      /*
      * update information train or coach
      */
      // change two coachs form two train.
      changeCoach: function(req, res){

      },
      // disable a seat of coach
      blockSeat: function(req, res){

      },
      // remove coach: This coach steal any a train. but it also exist in collection
      blockCoach: function(req, res){

      },
     // edit typeCoach and price
      editCoach: function(req, res){

      },
      editTrain: function(req, res){

      },
      swapJourney: function(req, res){

      },
      /*
      * delete train or coach
      */
      deleteTrain: function(req, res){

      },

      deleteCoach: function (req, res){

       },
       //



    }
