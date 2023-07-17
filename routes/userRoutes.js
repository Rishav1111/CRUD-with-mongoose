const express = require('express');
const { registerUser, LoginUser, currentUser } = require('../controllers/usercontroller');
const validateToken = require('../middleware.js/validateTokenHandler');

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", LoginUser)
router.get("/current",validateToken, currentUser)


module.exports = router