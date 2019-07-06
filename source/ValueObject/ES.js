const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for ES (Canary Islands)
 *
 * @class RegionES
 * @extends {SEPARegion}
 */
class RegionES extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof ES
	 */
	static get iso3166() {
		return 'ES';
	}
}

module.exports = RegionES;
