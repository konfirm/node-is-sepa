/**
 * SEPARegion Abstract
 *
 * @class SEPARegion
 */
class SEPARegion {
	/**
	 * The ISO 3166 (alpha 2) country code
	 *
	 * @readonly
	 * @static
	 * @memberof SEPARegion
	 */
	static get iso3166() {}

	/**
	 * The ISO 13616 IBAN (International Bank Account Number) country prefix
	 *
	 * @readonly
	 * @static
	 * @memberof SEPARegion
	 */
	static get iso13616() {
		return this.iso3166;
	}

	/**
	 * List of subdivisions (if any) which are included in SEPA
	 *
	 * @readonly
	 * @static
	 * @memberof SEPARegion
	 */
	static get regions() {
		return [];
	}

	/**
	 * The date on which SEPA came into effect for the region
	 *
	 * @readonly
	 * @static
	 * @memberof SEPARegion
	 */
	static get since() {
		return new Date(Date.UTC(1999, 0, 1));
	}

	/**
	 * Implementation of Symbol.match to allow for region detection through String.match
	 *
	 * @static
	 * @param {*} input
	 * @returns
	 * @memberof SEPARegion
	 */
	static [Symbol.match](input) {
		const { iso3166, iso13616, regions } = this;
		const upper = String(input).toUpperCase();

		if (upper === iso3166 || upper === iso13616) {
			return this;
		}

		const [region] = regions.filter((region) => input.match(region));

		return region;
	}
}

module.exports = SEPARegion;
