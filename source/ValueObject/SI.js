const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for SI (Slovenia)
 *
 * @class RegionSI
 * @extends {SEPARegion}
 */
class RegionSI extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof SI
	 */
	static get iso3166() {
		return 'SI';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof SI
	 */
	static get since() {
		//  The UTC representation of 2007-01-01
		return new Date(Date.UTC(2007, 0, 1));
	}
}

module.exports = RegionSI;
