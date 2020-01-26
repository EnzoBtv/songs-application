/**
 * @author Enzo Aurichi Batrov
 */

const { resolve } = require("path");
const cluster = require("cluster");
const { config } = require("dotenv");

const Server = require("./boot/server");

const logger = require("./util/Logger");

config({ path: resolve(__dirname, "../.env") });

try {
    // if (cluster.isMaster) {
    //     for (let i = 0; i < Number(process.env.CORES); i++) cluster.fork();

    //     cluster.on("exit", (deadWorker, code, signal) => {
    //         logger.info(
    //             `Worker "${deadWorker.process.pid}" killed - Reason: ${signal} - Code: ${code}. Initializing new worker of PID "${worker.process.pid}"`
    //         );
    //     });

    //     return;
    // }

    new Server().init();
} catch (e) {
    logger.error(e.message || e);
    logger.error(__filename);
}
