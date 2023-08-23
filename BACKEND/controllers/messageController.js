const MESSAGES = require("../models/MESSAGES");
const sequelize = require("../database");
async function SendMail(req, res) {
  const t = await sequelize.transaction();
  try {
    const subject = req.body.subject;
    const recieverEmail = req.body.recieverEmail;
    const senderEmail = req.user.email;
    const message = req.body.message;
    await MESSAGES.create(
      {
        senders_email: senderEmail,
        reciver_email: recieverEmail,
        message: message,
        subject: subject,
        read: false,
      },
      { transaction: t }
    );
    await t.commit();
    res
      .status(200)
      .json({ message: "email sent successfully to " + recieverEmail });
  } catch (err) {
    console.log(err);
    await t.rollback();
    res
      .status(500)
      .json({ message: "Something went wrong please retry after sometime" });
  }
}
async function GetMails(req, res) {
  try {
    const senderEmail = req.user.email;
    const result = await MESSAGES.findAll({
      where: { reciver_email: senderEmail },
    });
    res.status(200).json({ message: result });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong please retry after sometime" });
  }
}
async function GetSentMails(req, res) {
  try {
    const senderEmail = req.user.email;
    const result = await MESSAGES.findAll({
      where: { senders_email: senderEmail },
    });
    res.status(200).json({ message: result });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Something went wrong please retry after sometime" });
  }
}
async function OpenMail(req, res) {
  const t = await sequelize.transaction();
  try {
    const id=req.params.id
    const UserEmail = req.user.email;
    const result = await MESSAGES.findOne({where:{id:id}},{transaction:t});
    let from=""
    let to=""
    if(UserEmail===result.senders_email){
      from=UserEmail
      to=result.reciver_email
    }else{
      from=result.senders_email
      to=UserEmail
    }
    if(result.read===false && from != UserEmail){
      await result.update({read:true})
    }
    await t.commit()
    res.status(200).json({ message: {result,from,to} });
  } catch (err) {
    await t.rollback()
    res
      .status(500)
      .json({ message: "Something went wrong please retry after sometime" });
  }
}
module.exports = { SendMail, GetMails, GetSentMails, OpenMail };
