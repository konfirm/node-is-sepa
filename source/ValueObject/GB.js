const SEPARegion = require('../Abstract/Region.js');

const RegionGI = require('./GI.js')
const RegionGG = require('./GG.js')
const RegionIM = require('./IM.js')
const RegionJE = require('./JE.js')


/**
 * SEPARegion ValueObject for GB (United Kingdom)
 *
 * @class RegionGB
 * @extends {SEPARegion}
 */
class RegionGB extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof GB
	 */
	static get iso3166() {
		return 'GB';
	}

	/**
	 * List of subdivisions (if any) which are included in SEPA
	 *
	 * @readonly
	 * @static
	 * @memberof GB
	 */
	static get regions() {
		return [RegionGI, RegionGG, RegionIM, RegionJE];
	}
}

module.exports = RegionGB;
