const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for EE (Estonia)
 *
 * @class RegionEE
 * @extends {SEPARegion}
 */
class RegionEE extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof EE
	 */
	static get iso3166() {
		return 'EE';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof EE
	 */
	static get since() {
		//  The UTC representation of 2011-01-01
		return new Date(Date.UTC(2011, 0, 1));
	}
}

module.exports = RegionEE;
