const User = require("../models/user");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const secretKey ='rishav';

const registerUser = async (req,res)=>{
    const {fullname, email,password, role, phoneNumber} = req.body;
    if(!fullname, !email, !password, !role, !phoneNumber){
        res.send(400);
        throw new Error ("All fields are mandatory");
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.send(400);
        throw new Error ("Already registered user!");
    }
    //hash Password
    const hashedPassword = await bcrypt.hash(password, 10);
    console.log("hashed Passowrd", hashedPassword)
    const user = await User.create({
        fullname, 
        email,
        password: hashedPassword, 
        role, 
        phoneNumber
    });
    res.json({message:" user registered"})
}
const LoginUser = async (req,res)=>{
    const {email , password } = req.body;
    if(!email || !password){
        res.send(400);
        throw new Error ("All fields are mandatory");
    }
    const user = await User.findOne({email});
    //compare with hash password]
    if(user && (await bcrypt.compare(password, user.password))){
        const accessToken = jwt.sign({
            user:{
                fullname: user.fullname,
                email: user.email,
                role: user.role,
                id: user.id,
            },    
        },secretKey,process.env.ACCESS_TOKEN_SECRET,
        {expiresIn : "2m"});
        res.status(200).json({accessToken})
    }else{
        res.status(401)
        throw new Error("Email or password is not valid")
    }
}
const currentUser = async(req,res)=>{
    res.json({message:" current user information registered"})
}

module.exports = {registerUser, LoginUser , currentUser}