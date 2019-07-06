const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for LI (Liechtenstein)
 *
 * @class RegionLI
 * @extends {SEPARegion}
 */
class RegionLI extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof LI
	 */
	static get iso3166() {
		return 'LI';
	}
}

module.exports = RegionLI;
