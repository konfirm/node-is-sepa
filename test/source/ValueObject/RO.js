/* global source, describe, it, each, expect */

const RO = source('ValueObject/RO');
const { match, RO: RegionRO } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('RO (Romania)', () => {
		describe('package', () => {
			it('RO is exported', (next) => {
				expect(RegionRO).to.equal(RO);
	
				next();
			});
	
			each`
				input
				------
				RO
				ro
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(RO);
	
				next();
			});
		});

		it('has iso3166 RO', (next) => {
			expect(RO.iso3166).to.equal('RO');

			next();
		});

		it('has iso13616 RO', (next) => {
			expect(RO.iso13616).to.equal('RO');

			next();
		});

		it('has 0 regions', (next) => {
			expect(RO.regions).to.be.array();
			expect(RO.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = RO;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
