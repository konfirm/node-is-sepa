const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for BL (Saint Barthélemy)
 *
 * @class RegionBL
 * @extends {SEPARegion}
 */
class RegionBL extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof BL
	 */
	static get iso3166() {
		return 'BL';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof BL
	 */
	static get iso13616() {
		return 'FR';
	}
}

module.exports = RegionBL;
