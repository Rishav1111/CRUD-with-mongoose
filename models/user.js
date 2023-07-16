const mongoose = require("mongoose");
// const bcrypt = require("bcrypt");

const UserSchema = new mongoose.Schema({
    fullname:{
        type:String,
        required :[true, "Please provide the fullname"]
    },
    email:{
        type:String,
        required :[true, "Please provide the email"],
        unique: true,
    },
    password:{
        type:String,
        minlength: 8
    },
    role:{
        type:String,
    },
    phoneNumber:{
        type:Number,
        length:10,
    }

},{
    timestamps:true,
});

// UserSchema.pre('save', async function(next){
//     const salt = await bcrypt.genSalt();
//     this.password= await bcrypt.hash(this.password,salt);
//     next();
// })

const User = mongoose.model('user', UserSchema);
module.exports = User;
