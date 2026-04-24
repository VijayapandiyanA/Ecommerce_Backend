'use strict';

const bcrypt = require("bcryptjs");

module.exports = {
  async up(queryInterface, Sequelize) {

    const hashedPassword = await bcrypt.hash("123456", 10);

    await queryInterface.bulkInsert('Users', [
      {
        name: "Admin",
        email: "admin@example.com",
        password: hashedPassword,
        role: "admin",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', {
      email: "admin@example.com"
    }, {});
  }
};
