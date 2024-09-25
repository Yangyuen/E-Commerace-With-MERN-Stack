const db = require('mongoose');

const UserSchema = new db.Schema({
    userName : {
        type : String,
        required : true,
        unique : true
    },
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true,
    },
    role :{
        type : String,
        default :'user'
    }
})

const User = db.model('User', UserSchema);
module.exports = User;

