const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for IT (Italy)
 *
 * @class RegionIT
 * @extends {SEPARegion}
 */
class RegionIT extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof IT
	 */
	static get iso3166() {
		return 'IT';
	}
}

module.exports = RegionIT;
