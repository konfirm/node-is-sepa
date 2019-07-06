const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for GR (Greece)
 *
 * @class RegionGR
 * @extends {SEPARegion}
 */
class RegionGR extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof GR
	 */
	static get iso3166() {
		return 'GR';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof GR
	 */
	static get since() {
		//  The UTC representation of 2001-01-01
		return new Date(Date.UTC(2001, 0, 1));
	}
}

module.exports = RegionGR;
