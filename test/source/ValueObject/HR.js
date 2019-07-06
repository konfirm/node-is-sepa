/* global source, describe, it, each, expect */

const HR = source('ValueObject/HR');
const { match, HR: RegionHR } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('HR (Croatia)', () => {
		describe('package', () => {
			it('HR is exported', (next) => {
				expect(RegionHR).to.equal(HR);
	
				next();
			});
	
			each`
				input
				------
				HR
				hr
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(HR);
	
				next();
			});
		});

		it('has iso3166 HR', (next) => {
			expect(HR.iso3166).to.equal('HR');

			next();
		});

		it('has iso13616 HR', (next) => {
			expect(HR.iso13616).to.equal('HR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(HR.regions).to.be.array();
			expect(HR.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = HR;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
