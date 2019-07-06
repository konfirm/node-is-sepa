const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for NO (Norway)
 *
 * @class RegionNO
 * @extends {SEPARegion}
 */
class RegionNO extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof NO
	 */
	static get iso3166() {
		return 'NO';
	}
}

module.exports = RegionNO;
