/* global source, describe, it, each, expect */

const VA = source('ValueObject/VA');
const { match, VA: RegionVA } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('VA (Vatican City State)', () => {
		describe('package', () => {
			it('VA is exported', (next) => {
				expect(RegionVA).to.equal(VA);
	
				next();
			});
	
			each`
				input
				------
				VA
				va
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(VA);
	
				next();
			});
		});

		it('has iso3166 VA', (next) => {
			expect(VA.iso3166).to.equal('VA');

			next();
		});

		it('has iso13616 VA', (next) => {
			expect(VA.iso13616).to.equal('VA');

			next();
		});

		it('has 0 regions', (next) => {
			expect(VA.regions).to.be.array();
			expect(VA.regions).to.have.length(0);

			next();
		});

		it('has since 2019-03-01', (next) => {
			const { since } = VA;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2019-03-01');

			next();
		});
	});
});
