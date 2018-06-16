var db = require("../models/index");
var config = require('../config/index');

const Mail = db.sequelize.define("mails", {
    id: {
        type: db.Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    uuid: {
        type: db.Sequelize.UUID,
        unique: true,
        defaultValue: db.Sequelize.UUIDV4
    },
    from: {
        type:db.Sequelize.JSON,
        allowNull: false
    },
    to: {
        type: db.Sequelize.ARRAY(db.Sequelize.STRING),
        allowNull: false
    },
    cc: {
        type: db.Sequelize.ARRAY(db.Sequelize.STRING)
    },
    bcc: {
        type: db.Sequelize.ARRAY(db.Sequelize.STRING)
    },
    subject: {
        type: db.Sequelize.STRING
    },
    sentTime: {
        type: db.Sequelize.DATE,
        allowNull: true
    },
    sent: {
        type: db.Sequelize.BOOLEAN,
        allowNull: true,
        defaultValue: false
    },
    message: {
        type: db.Sequelize.STRING,
        allowNull: true
    },
    orderUUID: {
      type: db.Sequelize.UUID,
      unique: true,
      defaultValue: db.Sequelize.UUIDV4      
    }
});


module.exports = {
  Mail: Mail
 }

