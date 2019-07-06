const all = [
	require('./ValueObject/AD.js'),
	require('./ValueObject/AT.js'),
	require('./ValueObject/BE.js'),
	require('./ValueObject/BG.js'),
	require('./ValueObject/CH.js'),
	require('./ValueObject/CY.js'),
	require('./ValueObject/CZ.js'),
	require('./ValueObject/DE.js'),
	require('./ValueObject/DK.js'),
	require('./ValueObject/EE.js'),
	require('./ValueObject/ES.js'),
	require('./ValueObject/FI.js'),
	require('./ValueObject/FR.js'),
	require('./ValueObject/GB.js'),
	require('./ValueObject/GR.js'),
	require('./ValueObject/HR.js'),
	require('./ValueObject/HU.js'),
	require('./ValueObject/IE.js'),
	require('./ValueObject/IS.js'),
	require('./ValueObject/IT.js'),
	require('./ValueObject/LI.js'),
	require('./ValueObject/LT.js'),
	require('./ValueObject/LU.js'),
	require('./ValueObject/LV.js'),
	require('./ValueObject/MC.js'),
	require('./ValueObject/MT.js'),
	require('./ValueObject/NL.js'),
	require('./ValueObject/NO.js'),
	require('./ValueObject/PL.js'),
	require('./ValueObject/PT.js'),
	require('./ValueObject/RO.js'),
	require('./ValueObject/SE.js'),
	require('./ValueObject/SI.js'),
	require('./ValueObject/SK.js'),
	require('./ValueObject/SM.js'),
	require('./ValueObject/VA.js')
];

function match(input) {
	const code = String(input);

	return all.reduce(
		(carry, country) => carry || String(code).match(country),
		undefined
	);
}

function isSepa(...codes) {
	const { length } = codes;

	return Boolean(
		length && codes.filter((code) => Boolean(match(code))).length === length
	);
}

module.exports = [match].concat(all).reduce(
	(carry, target) =>
		Object.assign(carry, {
			[target.name.replace(/^Region/, '')]: target
		}),
	isSepa
);
