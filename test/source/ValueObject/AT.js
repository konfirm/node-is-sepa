/* global source, describe, it, each, expect */

const AT = source('ValueObject/AT');
const { match, AT: RegionAT } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('AT (Austria)', () => {
		describe('package', () => {
			it('AT is exported', (next) => {
				expect(RegionAT).to.equal(AT);
	
				next();
			});
	
			each`
				input
				------
				AT
				at
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(AT);
	
				next();
			});
		});

		it('has iso3166 AT', (next) => {
			expect(AT.iso3166).to.equal('AT');

			next();
		});

		it('has iso13616 AT', (next) => {
			expect(AT.iso13616).to.equal('AT');

			next();
		});

		it('has 0 regions', (next) => {
			expect(AT.regions).to.be.array();
			expect(AT.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = AT;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
