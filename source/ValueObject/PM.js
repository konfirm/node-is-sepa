const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for PM (Saint Pierre and Miquelon)
 *
 * @class RegionPM
 * @extends {SEPARegion}
 */
class RegionPM extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof PM
	 */
	static get iso3166() {
		return 'PM';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof PM
	 */
	static get iso13616() {
		return 'FR';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof PM
	 */
	static get since() {
		//  The UTC representation of 2009-06-01
		return new Date(Date.UTC(2009, 5, 1));
	}
}

module.exports = RegionPM;
