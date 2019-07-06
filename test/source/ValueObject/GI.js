/* global source, describe, it, each, expect */

const GI = source('ValueObject/GI');
const { match, GI: RegionGI } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('GI (Gibraltar)', () => {
		describe('package', () => {
			it('GI is not exported', (next) => {
				expect(RegionGI).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				GI
				gi
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(GI);
	
				next();
			});
		});

		it('has iso3166 GI', (next) => {
			expect(GI.iso3166).to.equal('GI');

			next();
		});

		it('has iso13616 GI', (next) => {
			expect(GI.iso13616).to.equal('GI');

			next();
		});

		it('has 0 regions', (next) => {
			expect(GI.regions).to.be.array();
			expect(GI.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = GI;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
