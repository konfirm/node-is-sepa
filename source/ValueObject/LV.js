const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for LV (Latvia)
 *
 * @class RegionLV
 * @extends {SEPARegion}
 */
class RegionLV extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof LV
	 */
	static get iso3166() {
		return 'LV';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof LV
	 */
	static get since() {
		//  The UTC representation of 2015-01-01
		return new Date(Date.UTC(2015, 0, 1));
	}
}

module.exports = RegionLV;
