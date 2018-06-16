'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
    return queryInterface.createTable('mails', {
      id: {
          type: Sequelize.INTEGER,
          primaryKey: true,
          autoIncrement: true
      },
      uuid: {
          type: Sequelize.UUID,
          unique: true,
          defaultValue: Sequelize.UUIDV4
      },
      orderUUID: {
          type: Sequelize.UUID,
          unique: true,
          defaultValue: Sequelize.UUIDV4
      },
      from: {
          type: Sequelize.JSONB,
          allowNull: false
      },
      to: {
          type: Sequelize.ARRAY(Sequelize.STRING),
          allowNull: false
      },
      cc: {
          type: Sequelize.ARRAY(Sequelize.STRING)
      },
      bcc: {
          type: Sequelize.ARRAY(Sequelize.STRING)
      },
      subject: {
          type: Sequelize.STRING
      },
      sentTime: {
          type: Sequelize.DATE
      },
      sent: {
          type: Sequelize.BOOLEAN
      },
      message: {
          type: Sequelize.TEXT
      },
      createdAt: {
          type: Sequelize.DATE
      },
      updatedAt: {
          type: Sequelize.DATE
      }
   });
  },

  down: function (queryInterface, Sequelize) {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
    return queryInterface.dropTable('mails');
  }
};
