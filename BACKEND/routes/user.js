const express=require('express');
const userController=require("../controllers/userController");

const router=express.Router();
router.post('/user/signup',userController.SignUp);
router.post('/user/login',userController.LogIn);

module.exports=router