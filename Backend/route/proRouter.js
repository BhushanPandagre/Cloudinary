var express = require ("express");
var router = express.Router();
var productController = require("../controller/productController.js")

// router.get("/",userController.userHome)

router.post("/datasave", productController.getProduct);

router.get("/display", productController.DisplayProduct);

module.exports = router;





