const express = require("express");
const router=express.Router()
const userController=require('../controller/user.controller');

router.route('/user')
.get(userController.getUser)
.post(userController.createUser)

module.exports=router;

