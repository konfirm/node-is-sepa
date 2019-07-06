const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for DK (Denmark)
 *
 * @class RegionDK
 * @extends {SEPARegion}
 */
class RegionDK extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof DK
	 */
	static get iso3166() {
		return 'DK';
	}
}

module.exports = RegionDK;
