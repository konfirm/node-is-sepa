/* global source, describe, it, each, expect */

const PM = source('ValueObject/PM');
const { match, PM: RegionPM } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('PM (Saint Pierre and Miquelon)', () => {
		describe('package', () => {
			it('PM is not exported', (next) => {
				expect(RegionPM).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				PM
				pm
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(PM);
	
				next();
			});
		});

		it('has iso3166 PM', (next) => {
			expect(PM.iso3166).to.equal('PM');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(PM.iso13616).to.equal('FR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(PM.regions).to.be.array();
			expect(PM.regions).to.have.length(0);

			next();
		});

		it('has since 2009-06-01', (next) => {
			const { since } = PM;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2009-06-01');

			next();
		});
	});
});
