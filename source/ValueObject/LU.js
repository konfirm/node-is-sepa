const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for LU (Luxembourg)
 *
 * @class RegionLU
 * @extends {SEPARegion}
 */
class RegionLU extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof LU
	 */
	static get iso3166() {
		return 'LU';
	}
}

module.exports = RegionLU;
