const { Router } = require("express");

const User = require("../models/User");
const Songs = require("../models/Song");

const {
    BAD_REQUEST,
    SUCCESS,
    CONFLICT,
    INTERNAL_SERVER_ERROR
} = require("../constants/HttpStatus");

const logger = require("../util/Logger");
module.exports = class Submit {
    constructor() {
        this.router = Router();
        this.path = "/admin";
        this.init();
    }

    init() {
        this.router.post(this.path, this.store);
    }

    async show() {
        try {
        } catch (e) {
            logger.error(e.message || e);
            logger.error(__filename);
            return res.status(INTERNAL_SERVER_ERROR).json({ error: e.message });
        }
    }
};
