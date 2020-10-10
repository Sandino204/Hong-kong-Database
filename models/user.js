var mongoose = require('mongoose')
var Schema = mongoose.Schema
var passportLocalMongose = require('passport-local-mongoose')

var User = new Schema ({
    admin: {
        type: Boolean, 
        default: false, 
    }
})

User.plugin(passportLocalMongose)

module.exports = mongoose.model('User', User)

