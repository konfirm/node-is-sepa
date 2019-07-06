const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for IM (Isle of Man)
 *
 * @class RegionIM
 * @extends {SEPARegion}
 */
class RegionIM extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof IM
	 */
	static get iso3166() {
		return 'IM';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof IM
	 */
	static get iso13616() {
		return 'GB';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof IM
	 */
	static get since() {
		//  The UTC representation of 2016-05-01
		return new Date(Date.UTC(2016, 4, 1));
	}
}

module.exports = RegionIM;
