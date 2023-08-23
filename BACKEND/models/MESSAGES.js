const Sequelize=require('sequelize')
const sequelize=require("../database");
const messages=sequelize.define('messages',
{
    id:{
        type:Sequelize.INTEGER,
        autoIncrement:true,
        allowNull:false,
        primaryKey:true
    },
    senders_email:{
        type:Sequelize.STRING
    },
    reciver_email:{
        type:Sequelize.STRING
    },
    message:{
        type:Sequelize.STRING
    },
    subject:{
        type:Sequelize.STRING
    },
    read:{
        type:Sequelize.BOOLEAN
    }
})
module.exports=messages;