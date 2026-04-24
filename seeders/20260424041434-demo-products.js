'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Products', [
      {
        name: "Nike Air Max",
        description: "Comfortable running shoes",
        price: 4999,
        imageUrl: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&auto=format&fit=crop",
        stock: 10,
        category: "Running",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Adidas Ultraboost",
        description: "High performance shoes",
        price: 6999,
        imageUrl: "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&auto=format&fit=crop",
        stock: 15,
        category: "Sports",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Puma Casual",
        description: "Stylish everyday wear",
        price: 2999,
        imageUrl: "https://images.unsplash.com/photo-1525966222134-fcfa99b8ae77?w=500&auto=format&fit=crop",
        stock: 20,
        category: "Casual",
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      

      {
        name: "Reebok Runner",
        description: "Lightweight running shoes",
        price: 3599,
        imageUrl: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500&auto=format&fit=crop",
        stock: 12,
        category: "Running",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "New Balance 574",
        description: "Classic lifestyle sneaker",
        price: 5499,
        imageUrl: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500&auto=format&fit=crop",
        stock: 18,
        category: "Casual",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
      {
        name: "Adidas Superstar",
        description: "Iconic streetwear sneaker",
        price: 4599,
        imageUrl: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500&auto=format&fit=crop",
        stock: 25,
        category: "Casual",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
   
    
      {
        name: "Asics Gel-Kayano",
        description: "Stability running shoe",
        price: 7999,
        imageUrl: "https://images.unsplash.com/photo-1588361861040-ac9b1018f6d5?w=500&auto=format&fit=crop",
        stock: 9,
        category: "Running",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Under Armour HOVR",
        description: "Energy return technology",
        price: 6999,
        imageUrl: "https://images.unsplash.com/photo-1552346154-21d32810aba3?w=500&auto=format&fit=crop",
        stock: 11,
        category: "Sports",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
     
    
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Products', null, {});
  }
};