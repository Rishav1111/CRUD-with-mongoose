const {Router} = require("express");
const Controller = require("../controllers/controller");
const router = Router();

router.get('/profile/:id', Controller.view_profile )
router.get('/profiles', Controller.view_All_Profile)
router.post('/createprofiles', Controller.insert_profile)
router.put('/update/:id', Controller.update_profile )
router.delete('/delete/:id', Controller.delete_profile)

module.exports = router;