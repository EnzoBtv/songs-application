const Sequelize = require("sequelize");
const { join } = require("path");
const dbConfig = require("../config/database");
const logger = require("../util/logger");
const { execPromise: exec } = require("../util/ChildPromise");

const connection = new Sequelize(dbConfig);

(async () => {
    try {
        const models = await exec(`ls ${join(__dirname, "..", "models")}`, {});

        const modelsArray = models.split("\n");

        for (const model of modelsArray) {
            const reqModel = require(join(__dirname, "..", "models", model));

            reqModel.init(connection);
            if (reqModel.associate) {
                reqModel.associate(connection.models);
            }
        }
    } catch (ex) {
        logger.error("It wasn't possible to initialize the models");
        throw new Error(ex.message);
    }
})();

module.exports = connection;
