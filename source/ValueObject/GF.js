const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for GF (French Guiana)
 *
 * @class RegionGF
 * @extends {SEPARegion}
 */
class RegionGF extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof GF
	 */
	static get iso3166() {
		return 'GF';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof GF
	 */
	static get iso13616() {
		return 'FR';
	}
}

module.exports = RegionGF;
