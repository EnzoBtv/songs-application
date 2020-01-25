const { Model, DataTypes } = require("sequelize");

class User extends Model {
	static init(connection) {
		super.init(
			{
				name: DataTypes.STRING,
				artists: DataTypes.STRING,
				genre: DataTypes.STRING,
				duration: DataTypes.INTEGER
			},
			{
				sequelize: connection
			}
		);
	}

	static associate(models) {}
}

module.exports = User;
