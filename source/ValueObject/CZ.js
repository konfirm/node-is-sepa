const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for CZ (Czech Republic)
 *
 * @class RegionCZ
 * @extends {SEPARegion}
 */
class RegionCZ extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof CZ
	 */
	static get iso3166() {
		return 'CZ';
	}
}

module.exports = RegionCZ;
