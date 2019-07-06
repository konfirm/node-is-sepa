/* global source, describe, it, each, expect */

const LT = source('ValueObject/LT');
const { match, LT: RegionLT } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('LT (Lithuania)', () => {
		describe('package', () => {
			it('LT is exported', (next) => {
				expect(RegionLT).to.equal(LT);
	
				next();
			});
	
			each`
				input
				------
				LT
				lt
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(LT);
	
				next();
			});
		});

		it('has iso3166 LT', (next) => {
			expect(LT.iso3166).to.equal('LT');

			next();
		});

		it('has iso13616 LT', (next) => {
			expect(LT.iso13616).to.equal('LT');

			next();
		});

		it('has 0 regions', (next) => {
			expect(LT.regions).to.be.array();
			expect(LT.regions).to.have.length(0);

			next();
		});

		it('has since 2016-01-01', (next) => {
			const { since } = LT;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2016-01-01');

			next();
		});
	});
});
