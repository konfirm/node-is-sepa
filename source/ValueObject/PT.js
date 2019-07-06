const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for PT (Azores)
 *
 * @class RegionPT
 * @extends {SEPARegion}
 */
class RegionPT extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof PT
	 */
	static get iso3166() {
		return 'PT';
	}
}

module.exports = RegionPT;

