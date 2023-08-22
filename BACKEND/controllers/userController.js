const bcrypt = require("bcrypt");
const USER = require("../models/USER");
const jwt = require("jsonwebtoken");
const sequelize = require("../database");

async function SignUp(req, res) {
  try {
    const email = req.body.email;
    const password = req.body.password;
    const t = await sequelize.transaction();
    const search2 = await USER.findOne({ where: { email: email } });
    if (search2) {
      res.status(501).json({ message: "Already a user" });
    } else {
      const saltrounds = 10;
      bcrypt.hash(password, saltrounds, async (err, hash) => {
        if (hash) {
          await USER.create(
            {
              email: email,
              password: hash,
            },
            { transaction: t }
          );
          await t.commit();
          res.status(200).json({ message: "email" });
        } else {
          console.log(err);
          res.status(500).json({ message: err });
        }
      });
    }
  } catch (err) {
    await t.rollback();
    res.status(500).json({ message: err });
  }
}

async function LogIn(req, res) {
    try {
        const email = req.body.email;
        const password = req.body.password;
        const search = await USER.findOne({ where: { email: email } });
        if (search) {
          bcrypt.compare(password, search.password, (err, result) => {
            if (result) {
              res.status(200).json({ message: "logging in",token:generateaccesstocken(search.id,search.name)});
            } else {
              res.status(501).json({ message: "Wrong Password" });
            }
          });
        } else {
          res.status(404).json({ message: "Account not found" });
        }
      } catch (err) {
        res.status(500).json({ message: err });
      }
}
function generateaccesstocken(id,name){
    return jwt.sign({userId:id,name:name},process.env.TOKEN)

}
module.exports = { SignUp, LogIn };
