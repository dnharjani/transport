module.exports = function(sequelize, DataTypes) {
	var Stations = sequelize.define('Stations', {
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
			field: 'name',
			unique: true
		}
	}
	, {
		freezeTableName: true,
		timestamps: false,
		tableName: 'Stations'
	});

	return Stations;
};