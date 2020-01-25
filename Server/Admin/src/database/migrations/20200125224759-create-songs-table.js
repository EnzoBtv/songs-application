"use strict";

module.exports = {
    up: (queryInterface, Sequelize) => {
        return queryInterface.createTable("songs", {
            id: {
                type: Sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            artists: {
                type: Sequelize.STRING,
                allowNull: false
            },
            genre: {
                type: Sequelize.STRING,
                allowNull: false
            },
            duration: {
                type: Sequelize.INTEGER,
                allowNull: false
            }
        });
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.dropTable("songs");
    }
};
