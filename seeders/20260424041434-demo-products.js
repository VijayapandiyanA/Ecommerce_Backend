'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: "Nike Air Max",
        description: "Comfortable running shoes",
        price: 4999,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
        stock: 10,
        category: "Running",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adidas Ultraboost",
        description: "High performance shoes",
        price: 6999,
        imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
        stock: 15,
        category: "Sports",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Puma Casual",
        description: "Stylish everyday wear",
        price: 2999,
        imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500",
        stock: 20,
        category: "Casual",
        createdAt: new Date(),
        updatedAt: new Date(),
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};
