const User = require("../models/user");

module.exports.view_profile = async (req, res) => {
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

module.exports.insert_profile = async (req, res) => {
  const {fullname, email, password, phoneNumber } = req.body;
  try {
    const user = await User.create({fullname, email, password, phoneNumber });
    res.status(201).json({ user:"User Created" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to create user" });
  }
};

module.exports.update_profile = async (req, res) => {
  try {
    const userId = req.params.id;
    const {fullname, email, password, phoneNumber } = req.body;
    const updateProfile = await User.findByIdAndUpdate(
      userId,
      {fullname, email, password, phoneNumber },
      {new : true}
    );
    if (!updatedProfile) {
      return res.status(404).json({ error: "User not found" });
    }
    res.status(200).json({ message: "User profile updated", user: updatedProfile });
  } catch (error) {
    console.log(error);
  }
};


module.exports.delete_profile = async (req, res) => {
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
