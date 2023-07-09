const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
    },
    email:{
        type:String,
        unique: true,
    },
    password:{
        type:String,
        minlength: 8
    },
    // role:{
    //     type:String,
    //     enum:['user','admin']
    // },
    phoneNumber:{
        type:Number,
        length:10,
    }

});

// UserSchema.pre('save', async function(next){
//     const salt = await bcrypt.genSalt();
//     this.password= await bcrypt.hash(this.password,salt);
//     next();
// })

const User = mongoose.model('user', UserSchema);
module.exports = User;
