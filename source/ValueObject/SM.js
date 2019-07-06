const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for SM (San Marino)
 *
 * @class RegionSM
 * @extends {SEPARegion}
 */
class RegionSM extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof SM
	 */
	static get iso3166() {
		return 'SM';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof SM
	 */
	static get since() {
		//  The UTC representation of 2014-02-01
		return new Date(Date.UTC(2014, 1, 1));
	}
}

module.exports = RegionSM;
