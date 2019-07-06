module.exports = (date) =>
	[date.getFullYear(), date.getMonth() + 1, date.getDate()]
		.map((value) => (value < 10 ? `0${value}`.slice(-2) : value))
		.join('-');
