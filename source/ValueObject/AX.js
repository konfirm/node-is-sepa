const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for AX (Åland Islands)
 *
 * @class RegionAX
 * @extends {SEPARegion}
 */
class RegionAX extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof AX
	 */
	static get iso3166() {
		return 'AX';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof AX
	 */
	static get iso13616() {
		return 'FI';
	}
}

module.exports = RegionAX;
