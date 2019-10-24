const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const Schema = mongoose.Schema;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
  password: {
    type: String,
    required: true
  }
}, {
  timestamps: true,
});

//authenticate input against database documents
//using a mongoose statics method
userSchema.statics.authenticate = function(username, password, callback){
  User.findOne({username:username})
    .exec(function(error, user){
      if(error){
        return callback(error);
      } else if(!user){
        let err = new Error('User not found');
        err.status = 401;
        return callback(err);
      }
        bcrypt.compare(password, user.password, function(error, hash){
          if(hash === true){
            return callback(null, user);
          } else {
            return callback();
          }
        })
    })
}

//hash password before saving in db
userSchema.pre('save', function(next){
  var user = this;
  bcrypt.hash(user.password, 10, function(err, hash){
    if(err){
      return next(err);
    }
    user.password = hash;
    next();
  })
})


const User = mongoose.model('User', userSchema);

module.exports = User;