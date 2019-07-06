const SEPARegion = require('../Abstract/Region.js');

/**
 * SEPARegion ValueObject for JE (Jersey)
 *
 * @class RegionJE
 * @extends {SEPARegion}
 */
class RegionJE extends SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) region code
	 *
	 * @readonly
	 * @static
	 * @memberof JE
	 */
	static get iso3166() {
		return 'JE';
	}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) region prefix
	 *
	 * @readonly
	 * @static
	 * @memberof JE
	 */
	static get iso13616() {
		return 'GB';
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof JE
	 */
	static get since() {
		//  The UTC representation of 2016-05-01
		return new Date(Date.UTC(2016, 4, 1));
	}
}

module.exports = RegionJE;
