const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for CY (Cyprus)
 *
 * @class RegionCY
 * @extends {SEPARegion}
 */
class RegionCY extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof CY
	 */
	static get iso3166() {
		return 'CY';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof CY
	 */
	static get since() {
		//  The UTC representation of 2008-01-01
		return new Date(Date.UTC(2008, 0, 1));
	}
}

module.exports = RegionCY;
