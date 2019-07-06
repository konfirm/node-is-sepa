const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for RE (Réunion)
 *
 * @class RegionRE
 * @extends {SEPARegion}
 */
class RegionRE extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof RE
	 */
	static get iso3166() {
		return 'RE';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof RE
	 */
	static get iso13616() {
		return 'FR';
	}
}

module.exports = RegionRE;
