var mongoose        = require('mongoose');
var connectDB       = require('../../connect_mongodb');
var Train           = require('./train_schema');
  mongoose = connectDB.initialize(mongoose);


  module.exports = {


      /*
      * find train's information
      */

      infor: function(req, res){

      },

      /*
      * create train or coach
      */
      create: function(req, res){

      },


      /*
      * update information train or coach
      */
      update: function(req, res){

      },
      //
      ticket: function(req, res){

      },
      /*
      * delete
      */
      delete: function(req, res){

      },

    }
