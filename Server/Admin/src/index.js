/**
 * @author Enzo Aurichi Batrov
 */

const { resolve } = require("path");
const cluster = require("cluster");
const { config } = require("dotenv");

const Server = require("./boot/server");

const logger = require("./tools/logger");

config({ path: resolve(__dirname, "../.env") });

/** Entry point of the application. Responsible for clustering our Express ports to deliver a highly scalable and available service.
 * Here we also import our main Server class and instantiate an object of it with objects of each controller as its paramaters.
 */

try {
    if (cluster.isMaster) {
        for (let i = 0; i < Number(process.env.CORES); i++) cluster.fork();

        cluster.on("exit", (deadWorker, code, signal) => {
            logger.info(
                `Worker "${deadWorker.process.pid}" killed - Reason: ${signal} - Code: ${code}. Initializing new worker of PID "${worker.process.pid}"`
            );
        });

        return;
    }

    new Server().init();
} catch (e) {
    logger.error(e.message || e);
    logger.error(__filename);
}
