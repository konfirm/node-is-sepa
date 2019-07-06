/* global source, describe, it, each, expect */

const PT = source('ValueObject/PT');
const { match, PT: RegionPT } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('PT (Madeira)', () => {
		describe('package', () => {
			it('PT is exported', (next) => {
				expect(RegionPT).to.equal(PT);
	
				next();
			});
	
			each`
				input
				------
				PT
				pt
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(PT);
	
				next();
			});
		});

		it('has iso3166 PT', (next) => {
			expect(PT.iso3166).to.equal('PT');

			next();
		});

		it('has iso13616 PT', (next) => {
			expect(PT.iso13616).to.equal('PT');

			next();
		});

		it('has 0 regions', (next) => {
			expect(PT.regions).to.be.array();
			expect(PT.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = PT;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
