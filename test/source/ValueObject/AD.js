/* global source, describe, it, each, expect */

const AD = source('ValueObject/AD');
const { match, AD: RegionAD } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('AD (Andorra)', () => {
		describe('package', () => {
			it('AD is exported', (next) => {
				expect(RegionAD).to.equal(AD);
	
				next();
			});
	
			each`
				input
				------
				AD
				ad
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(AD);
	
				next();
			});
		});

		it('has iso3166 AD', (next) => {
			expect(AD.iso3166).to.equal('AD');

			next();
		});

		it('has iso13616 AD', (next) => {
			expect(AD.iso13616).to.equal('AD');

			next();
		});

		it('has 0 regions', (next) => {
			expect(AD.regions).to.be.array();
			expect(AD.regions).to.have.length(0);

			next();
		});

		it('has since 2019-03-01', (next) => {
			const { since } = AD;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2019-03-01');

			next();
		});
	});
});
