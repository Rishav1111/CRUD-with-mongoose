const User = require("../models/user");

const view_profile = async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await User.findById(userId);
    if(!user){
      return res.status(404).json({error: " User not found"})
    }
    res.status(200).json(user);
  } catch (error) {
    console.log(error);
    res.status(500).json({error: "Failed to festch user profile"})
  }
};

 const view_All_Profile =  async (req,res)=>{
  const users= await User.find();
  res.status(200).json(users);
}

const insert_profile = async (req, res) => {
  const {fullname, email, password,role, phoneNumber } = req.body;
  try {
    const user = await User.create({fullname, email, password, role, phoneNumber });
    res.status(201).json({ user:"User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

const update_profile = async (req, res) => {
  try {
    const userId = req.params.id;
    const {fullname, email, password, role,phoneNumber } = req.body;
    const updateProfile = await User.findByIdAndUpdate(
      userId,
      {fullname, email, password,role, phoneNumber },
      {new : true}
    );
    if (!updateProfile) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User profile updated", user: updateProfile });
  } catch (error) {
    console.log(error);
  }
};


const delete_profile = async (req, res) => {
  try {
    const userId = req.params.id; 
    const deletedProfile = await User.findByIdAndDelete(userId);
    if (!deletedProfile) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User profile deleted" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete user profile" });
  }
};

module.exports = { 
  view_profile,
  view_All_Profile,
  insert_profile,
  update_profile,
  delete_profile
}