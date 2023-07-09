const {Router} = require("express");
const Controller = require("../controllers/controller");
const router = Router();

router.get('/profiles/:id', Controller.view_profile )
router.post('/profiles', Controller.insert_profile)
router.put('/update/:id', Controller.update_profile )
router.delete('/delete/:id', Controller.delete_profile)

module.exports = router;