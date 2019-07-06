/* global source, describe, it, each, expect */

const MT = source('ValueObject/MT');
const { match, MT: RegionMT } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('MT (Malta)', () => {
		describe('package', () => {
			it('MT is exported', (next) => {
				expect(RegionMT).to.equal(MT);
	
				next();
			});
	
			each`
				input
				------
				MT
				mt
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(MT);
	
				next();
			});
		});

		it('has iso3166 MT', (next) => {
			expect(MT.iso3166).to.equal('MT');

			next();
		});

		it('has iso13616 MT', (next) => {
			expect(MT.iso13616).to.equal('MT');

			next();
		});

		it('has 0 regions', (next) => {
			expect(MT.regions).to.be.array();
			expect(MT.regions).to.have.length(0);

			next();
		});

		it('has since 2008-01-01', (next) => {
			const { since } = MT;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2008-01-01');

			next();
		});
	});
});
