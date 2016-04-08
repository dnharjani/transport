module.exports = function(sequelize, DataTypes) {
	var Lines = sequelize.define('Lines', {
		id: {
			type: DataTypes.INTEGER,
			field: 'id',
			unique: true,
			autoIncrement: false,
			primaryKey: true,
			notNull: true
		},
		name: {
			type: DataTypes.TEXT,
			field: 'name'
		},
		stations: {
			type: DataTypes.TEXT,
			field: 'stations'
		}
	}
	, {
		freezeTableName: true,
		timestamps: false,
		tableName: 'Lines'
	});

	return Lines;
};

