module.exports = function(sequelize, DataTypes) {
	var Disruption = sequelize.define('Disruptions', {
		id: {
			type: DataTypes.INTEGER,
			field: 'id',
			autoIncrement: true,
			primaryKey: true
		},
		lineId: {
			type: DataTypes.INTEGER,
			field: 'lineId'
		},
		fromStationId: {
			type: DataTypes.INTEGER,
			field: 'fromStationId'
		},
		toStationId: {
			type: DataTypes.INTEGER,
			field: 'toStationId'
		},
		resolved: {
			type: DataTypes.INTEGER,
			field: 'resolved'
		},
		reason: {
			type: DataTypes.TEXT,
			field: 'reason'
		}
	}, {
		freezeTableName: true,
		timestamps: false,
		tableName: 'Disruptions'
	});

	return Disruption;
};

