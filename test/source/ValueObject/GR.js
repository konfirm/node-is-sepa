/* global source, describe, it, each, expect */

const GR = source('ValueObject/GR');
const { match, GR: RegionGR } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('GR (Greece)', () => {
		describe('package', () => {
			it('GR is exported', (next) => {
				expect(RegionGR).to.equal(GR);
	
				next();
			});
	
			each`
				input
				------
				GR
				gr
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(GR);
	
				next();
			});
		});

		it('has iso3166 GR', (next) => {
			expect(GR.iso3166).to.equal('GR');

			next();
		});

		it('has iso13616 GR', (next) => {
			expect(GR.iso13616).to.equal('GR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(GR.regions).to.be.array();
			expect(GR.regions).to.have.length(0);

			next();
		});

		it('has since 2001-01-01', (next) => {
			const { since } = GR;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2001-01-01');

			next();
		});
	});
});
