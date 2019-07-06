/* global source, describe, it, each, expect */

const PL = source('ValueObject/PL');
const { match, PL: RegionPL } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('PL (Poland)', () => {
		describe('package', () => {
			it('PL is exported', (next) => {
				expect(RegionPL).to.equal(PL);
	
				next();
			});
	
			each`
				input
				------
				PL
				pl
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(PL);
	
				next();
			});
		});

		it('has iso3166 PL', (next) => {
			expect(PL.iso3166).to.equal('PL');

			next();
		});

		it('has iso13616 PL', (next) => {
			expect(PL.iso13616).to.equal('PL');

			next();
		});

		it('has 0 regions', (next) => {
			expect(PL.regions).to.be.array();
			expect(PL.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = PL;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
