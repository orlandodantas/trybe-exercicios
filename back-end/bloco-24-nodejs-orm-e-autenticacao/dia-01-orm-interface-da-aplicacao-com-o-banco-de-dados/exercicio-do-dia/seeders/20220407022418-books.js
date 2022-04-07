'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Books', [{
      title: 'Vida cruel',
      author: 'Manoel sei lá das quantas',
      page_quantity: 351,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    },
    {
      title: 'Lagarta Voadora',
      author: 'Zaca xarara',
      page_quantity: 122,
      created_at: Sequelize.literal('CURRENT_TIMESTAMP'),
    }], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('People', null, {});
  }
};
