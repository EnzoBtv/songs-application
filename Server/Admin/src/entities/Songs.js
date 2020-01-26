const Song = require("../models/Song");

class Songs {
    constructor() {
        this.songs = new Map();
        this.init();
    }

    async init() {
        const songs = await Song.findAll();
        for (const song of songs) {
            this.songs.set(song.id, song);
        }
    }

    get(id) {
        return this.songs.get(id);
    }
}

module.exports = new Songs();
