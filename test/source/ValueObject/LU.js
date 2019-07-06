/* global source, describe, it, each, expect */

const LU = source('ValueObject/LU');
const { match, LU: RegionLU } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('LU (Luxembourg)', () => {
		describe('package', () => {
			it('LU is exported', (next) => {
				expect(RegionLU).to.equal(LU);
	
				next();
			});
	
			each`
				input
				------
				LU
				lu
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(LU);
	
				next();
			});
		});

		it('has iso3166 LU', (next) => {
			expect(LU.iso3166).to.equal('LU');

			next();
		});

		it('has iso13616 LU', (next) => {
			expect(LU.iso13616).to.equal('LU');

			next();
		});

		it('has 0 regions', (next) => {
			expect(LU.regions).to.be.array();
			expect(LU.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = LU;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
