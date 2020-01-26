const { Router } = require("express");
const Song = require("../models/Song");

const { SUCCESS, INTERNAL_SERVER_ERROR } = require("../constants/HttpStatus");

const logger = require("../util/Logger");
module.exports = class Admin {
    constructor() {
        this.router = Router();
        this.path = "/songs";
        this.init();
    }

    init() {
        this.router.get(this.path, this.index);
    }

    index = async (req, res) => {
        try {
            let songs = await Song.findAll({
                attributes: ["name", "artists", "duration", "id"]
            });
            songs = songs.map(song => ({
                ...song.toJSON(),
                duration: this.convertDuration(song.duration)
            }));
            res.status(SUCCESS).json(songs);
        } catch (e) {
            logger.error(e.message || e);
            logger.error(__filename);
            return res.status(INTERNAL_SERVER_ERROR).json({ error: e.message });
        }
    };

    convertDuration(time) {
        const minutes = Math.floor(time / 1000 / 60);
        const seconds = Math.floor(time / 1000) - minutes * 60;
        return `${minutes}:${seconds}`;
    }
};
