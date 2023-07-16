const express = require('express');
const { registerUser, LoginUser, currentUser } = require('../controllers/usercontroller');

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LoginUser)
router.get("/current", currentUser)


module.exports = router