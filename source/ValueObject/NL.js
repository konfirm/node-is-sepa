const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for NL (Netherlands)
 *
 * @class RegionNL
 * @extends {SEPARegion}
 */
class RegionNL extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof NL
	 */
	static get iso3166() {
		return 'NL';
	}
}

module.exports = RegionNL;
