'use strict'

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      'businesses',
      'phoneNumber',
      'phone_number'
    )
    /**
     * Add altering commands here.
     *
     * Example:
     * await queryInterface.createTable('users', { id: Sequelize.INTEGER });
     */
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.renameColumn(
      'businesses',
      'phone_number',
      'phoneNumber'
    )
  }
}