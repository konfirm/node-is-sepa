/* global source, describe, it, each, expect */

const DE = source('ValueObject/DE');
const { match, DE: RegionDE } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('DE (Germany)', () => {
		describe('package', () => {
			it('DE is exported', (next) => {
				expect(RegionDE).to.equal(DE);
	
				next();
			});
	
			each`
				input
				------
				DE
				de
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(DE);
	
				next();
			});
		});

		it('has iso3166 DE', (next) => {
			expect(DE.iso3166).to.equal('DE');

			next();
		});

		it('has iso13616 DE', (next) => {
			expect(DE.iso13616).to.equal('DE');

			next();
		});

		it('has 0 regions', (next) => {
			expect(DE.regions).to.be.array();
			expect(DE.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = DE;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
