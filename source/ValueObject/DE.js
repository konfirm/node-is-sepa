const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for DE (Germany)
 *
 * @class RegionDE
 * @extends {SEPARegion}
 */
class RegionDE extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof DE
	 */
	static get iso3166() {
		return 'DE';
	}
}

module.exports = RegionDE;
