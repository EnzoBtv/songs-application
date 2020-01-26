"use strict";

module.exports = {
    up: async (queryInterface, Sequelize) => {
        return await queryInterface.addColumn("songs", "points", {
            type: Sequelize.INTEGER,
            allowNull: false
        });
    },

    down: async (queryInterface, Sequelize) => {
        return await queryInterface.removeColumn("songs", "points");
    }
};
