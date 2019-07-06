/* global source, describe, it, each, expect */

const RE = source('ValueObject/RE');
const { match, RE: RegionRE } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('RE (Réunion)', () => {
		describe('package', () => {
			it('RE is not exported', (next) => {
				expect(RegionRE).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				RE
				re
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(RE);
	
				next();
			});
		});

		it('has iso3166 RE', (next) => {
			expect(RE.iso3166).to.equal('RE');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(RE.iso13616).to.equal('FR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(RE.regions).to.be.array();
			expect(RE.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = RE;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
