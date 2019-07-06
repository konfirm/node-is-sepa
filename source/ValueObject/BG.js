const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for BG (Bulgaria)
 *
 * @class RegionBG
 * @extends {SEPARegion}
 */
class RegionBG extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof BG
	 */
	static get iso3166() {
		return 'BG';
	}
}

module.exports = RegionBG;
