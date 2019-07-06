const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for MT (Malta)
 *
 * @class RegionMT
 * @extends {SEPARegion}
 */
class RegionMT extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof MT
	 */
	static get iso3166() {
		return 'MT';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof MT
	 */
	static get since() {
		//  The UTC representation of 2008-01-01
		return new Date(Date.UTC(2008, 0, 1));
	}
}

module.exports = RegionMT;
