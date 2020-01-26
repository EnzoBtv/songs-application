const { Router } = require("express");
const Song = require("../models/Song");

const { SUCCESS, INTERNAL_SERVER_ERROR } = require("../constants/HttpStatus");

const logger = require("../util/Logger");
module.exports = class Admin {
    constructor() {
        this.router = Router();
        this.path = "/admin";
        this.init();
    }

    init() {
        this.router.get(this.path, this.show);
    }

    async show(req, res) {
        try {
            const songs = await Song.findAll({
                attributes: ["name", "artists", "id", "points"],
                order: [["points", "DESC"]],
                limit: 5,
                include: [
                    {
                        association: "users"
                    }
                ]
            });
            res.status(SUCCESS).json(songs);
        } catch (e) {
            logger.error(e.message || e);
            logger.error(__filename);
            return res.status(INTERNAL_SERVER_ERROR).json({ error: e.message });
        }
    }
};
