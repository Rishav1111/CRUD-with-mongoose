const {Router} = require("express");
const Controller = require("../controllers/controller");
const validateToken = require("../middleware.js/validateTokenHandler");
const router = Router();


router.get('/product/:id', Controller.view_Product)
router.get('/products', validateToken,Controller.view_All_Products)
router.post('/createproduct', validateToken,Controller.insert_product)
router.put('/update/:id',validateToken, Controller.update_product)
router.delete('/delete/:id',validateToken, Controller.delete_product)

module.exports = router;