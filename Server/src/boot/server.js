const express = require("express");
const { join } = require("path");
const Ddos = require("ddos");
const logger = require("../util/Logger");

const execPromise = require("../util/ChildPromise");

const Database = require("../database");

module.exports = class Server {
    constructor() {
        this.app = express();
    }

    async init() {
        await new Database().init();
        this.listen();
        this.initMiddlewares();
        await this.initControllers();
    }

    listen() {
        this.app.listen(process.env.PORT, () => {
            logger.info(`App listening on port ${process.env.PORT}`);
        });
    }

    async initMiddlewares() {
        this.app.use(express.json());
        this.app.use(new Ddos({ burst: 10, limit: 15 }).express);
    }

    async initControllers() {
        try {
            logger.info("Trying no initialize all controllers");
            const controllers = await execPromise(
                `ls ${join(__dirname, "..", "controllers")}`,
                {}
            );
            const { stdout } = controllers;
            const controllerArray = stdout.split("\n");
            for (const controller of controllerArray) {
                if (controller) {
                    logger.info(`Initilizing ${controller} Controller`);
                    const reqController = require(join(
                        __dirname,
                        "..",
                        "controllers",
                        controller
                    ));
                    this.app.use(new reqController().router);
                }
            }
        } catch (ex) {
            logger.error(
                `It wasn't possible to initialize the controllers, error: ${JSON.stringify(
                    ex
                )}`
            );
            throw new Error(JSON.stringify(ex));
        }
    }
};
