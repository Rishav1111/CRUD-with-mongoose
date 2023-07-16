const registerUser = async (req,res)=>{
    res.json({message:" user registered"})
}
const LoginUser = async (req,res)=>{
    res.json({message:" Login user"})
}
const currentUser = async(req,res)=>{
    res.json({message:" current user information registered"})
}

module.exports = {registerUser, LoginUser , currentUser}