const { Model, DataTypes } = require("sequelize");

class User extends Model {
    static init(connection) {
        super.init(
            {
                name: DataTypes.STRING
            },
            {
                sequelize: connection
            }
        );
    }

    static associate(models) {
        User.belongsTo(models.Song, {
            foreignKey: "user_id",
            through: "user_songs",
            as: "songs"
        });
    }
}

module.exports = User;
