const { Model, DataTypes } = require("sequelize");

class Song extends Model {
    static init(connection) {
        super.init(
            {
                name: DataTypes.STRING,
                artists: DataTypes.STRING,
                genre: DataTypes.STRING,
                duration: DataTypes.INTEGER,
                points: DataTypes.INTEGER
            },
            {
                sequelize: connection
            }
        );
    }

    static associate(models) {
        Song.belongsToMany(models.User, {
            foreignKey: "song_id",
            through: "user_songs",
            as: "users"
        });
    }
}

module.exports = Song;
