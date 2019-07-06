const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for HR (Croatia)
 *
 * @class RegionHR
 * @extends {SEPARegion}
 */
class RegionHR extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof HR
	 */
	static get iso3166() {
		return 'HR';
	}
}

module.exports = RegionHR;
