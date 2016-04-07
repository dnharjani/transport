function Disruption(lineId, fromStationId, toStationId, fromDate, toDate) {
	this.lineId = lineId;
	this.fromStationId = fromStationId;
	this.toStationId = toStationId;
	this.fromDate = fromDate;
	this.toDate = toDate;
}

module.exports = Disruption;

