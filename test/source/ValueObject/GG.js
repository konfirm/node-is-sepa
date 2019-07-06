/* global source, describe, it, each, expect */

const GG = source('ValueObject/GG');
const { match, GG: RegionGG } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('GG (Guernsey)', () => {
		describe('package', () => {
			it('GG is not exported', (next) => {
				expect(RegionGG).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				GG
				gg
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(GG);
	
				next();
			});
		});

		it('has iso3166 GG', (next) => {
			expect(GG.iso3166).to.equal('GG');

			next();
		});

		it('has iso13616 GB', (next) => {
			expect(GG.iso13616).to.equal('GB');

			next();
		});

		it('has 0 regions', (next) => {
			expect(GG.regions).to.be.array();
			expect(GG.regions).to.have.length(0);

			next();
		});

		it('has since 2016-05-01', (next) => {
			const { since } = GG;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2016-05-01');

			next();
		});
	});
});
