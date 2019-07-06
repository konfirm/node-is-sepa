const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for MF (Saint Martin (French part))
 *
 * @class RegionMF
 * @extends {SEPARegion}
 */
class RegionMF extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof MF
	 */
	static get iso3166() {
		return 'MF';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof MF
	 */
	static get iso13616() {
		return 'FR';
	}
}

module.exports = RegionMF;
