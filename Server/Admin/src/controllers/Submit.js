const { Router } = require("express");

const User = require("../models/User");

const { BAD_REQUEST, SUCCESS, CONFLICT } = require("../constants/HttpStatus");

const logger = require("../util/Logger");
module.exports = class Submit {
    constructor() {
        this.router = Router();
        this.path = "/submit";
        this.init();
    }

    init() {
        this.router.post(this.path, this.store);
    }

    async store() {
        try {
            const { name, songs } = req.body;

            logger.info(
                `Attempting to create a submit of an user with name ${name}`
            );

            if (!name) {
                logger.error(
                    "Submit#store failed due to missing name parameter"
                );
                return res.status(BAD_REQUEST).json({
                    error: "Username not informed in the requisition"
                });
            }
            if (!songs || !songs.length) {
                logger.error(
                    "Submit#store failed due to missing songs parameter"
                );
                return res
                    .status(BAD_REQUEST)
                    .json({ error: "Songs not informed in the requisition" });
            }
            if (songs.length > 5 || songs.length < 5) {
                logger.error(
                    "Submit#store failed due to length overflow of songs list"
                );
                return res.status(BAD_REQUEST).json({
                    error: "Server detected an overflow of the songs list"
                });
            }

            logger.info(`Trying to find an user with the same name`);
            let user = await User.findOne({
                where: {
                    name
                }
            });

            if (user) {
                logger.error("Submit#store failed due to user duplicity");
                return res.status(CONFLICT).json({
                    errors: "There is already an user with the name registered"
                });
            }

            user = await User.create({ name });

            user.addSongs();

            return res.status(SUCCESS).json({ status: SUCCESS });
        } catch (e) {
            logger.error(e.message || e);
            logger.error(__filename);
            return res.status(INTERNAL_ERROR).send(INTERNAL_SERVER_ERROR);
        }
    }
};
