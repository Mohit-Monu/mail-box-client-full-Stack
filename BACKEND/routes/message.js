const express=require('express')
const messageController =require ("../controllers/messageController")
const userAuthentication=require('../middleware/authorization')

const router=express.Router();

router.post('/user/sendmail',userAuthentication.authenticate,messageController.SendMail);
router.get('/user/getInbox',userAuthentication.authenticate,messageController.GetMails);
router.get('/user/getSent',userAuthentication.authenticate,messageController.GetSentMails);
router.get('/openmail/:id',userAuthentication.authenticate,messageController.OpenMail);
router.get('/user/getallNo',userAuthentication.authenticate,messageController.GetAllNumbers);


module.exports=router;