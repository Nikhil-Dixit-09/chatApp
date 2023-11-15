const express=require('express');
const router=express.Router();
const auth=require('../middleware/auth')
const userController=require('../controllers/home_controller');
router.post('/signup',userController.signup);
router.post('/signin',userController.signin);
module.exports=router;