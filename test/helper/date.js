const options = {
	year: 'numeric',
	month: '2-digit',
	day: '2-digit'
};

module.exports = (date) => date.toLocaleDateString('nl', options);
