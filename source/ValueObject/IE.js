const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for IE (Ireland)
 *
 * @class RegionIE
 * @extends {SEPARegion}
 */
class RegionIE extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof IE
	 */
	static get iso3166() {
		return 'IE';
	}
}

module.exports = RegionIE;
