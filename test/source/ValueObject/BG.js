/* global source, describe, it, each, expect */

const BG = source('ValueObject/BG');
const { match, BG: RegionBG } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('BG (Bulgaria)', () => {
		describe('package', () => {
			it('BG is exported', (next) => {
				expect(RegionBG).to.equal(BG);
	
				next();
			});
	
			each`
				input
				------
				BG
				bg
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(BG);
	
				next();
			});
		});

		it('has iso3166 BG', (next) => {
			expect(BG.iso3166).to.equal('BG');

			next();
		});

		it('has iso13616 BG', (next) => {
			expect(BG.iso13616).to.equal('BG');

			next();
		});

		it('has 0 regions', (next) => {
			expect(BG.regions).to.be.array();
			expect(BG.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = BG;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
