"use strict";
let songs = require("../../../songs.json");
module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete("songs", null, {});

        songs = songs.map(song => ({
            name: song.name,
            artists: song.artists,
            genre: song.genre,
            duration: song.duration_ms,
            points: 0,
            created_at: new Date(),
            updated_at: new Date()
        }));
        return queryInterface.bulkInsert("songs", songs, {});
    },

    down: (queryInterface, Sequelize) => {
        return queryInterface.bulkDelete("songs", null, {});
    }
};
