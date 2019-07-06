const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for GP (Guadeloupe)
 *
 * @class RegionGP
 * @extends {SEPARegion}
 */
class RegionGP extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof GP
	 */
	static get iso3166() {
		return 'GP';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof GP
	 */
	static get iso13616() {
		return 'FR';
	}
}

module.exports = RegionGP;
