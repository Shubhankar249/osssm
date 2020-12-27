var mongoose = require('mongoose');
require('mongoose-type-email');
var Schema = mongoose.Schema;
var passPortLocalMongoose = require('passport-local-mongoose');

var User = new Schema(
    {
        firstname: {
            type: String,
              default: ''
          },
          lastname: {
            type: String,
              default: ''
          },
          email : {
            type : mongoose.SchemaTypes.Email
            
          }
    }
);

User.plugin(passPortLocalMongoose);

module.exports = mongoose.model('User',User);