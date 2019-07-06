const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for LT (Lithuania)
 *
 * @class RegionLT
 * @extends {SEPARegion}
 */
class RegionLT extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof LT
	 */
	static get iso3166() {
		return 'LT';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof LT
	 */
	static get since() {
		//  The UTC representation of 2016-01-01
		return new Date(Date.UTC(2016, 0, 1));
	}
}

module.exports = RegionLT;
