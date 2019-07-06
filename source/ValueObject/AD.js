const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for AD (Andorra)
 *
 * @class RegionAD
 * @extends {SEPARegion}
 */
class RegionAD extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof AD
	 */
	static get iso3166() {
		return 'AD';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof AD
	 */
	static get since() {
		//  The UTC representation of 2019-03-01
		return new Date(Date.UTC(2019, 2, 1));
	}
}

module.exports = RegionAD;
