/* global source, describe, it, each, expect */

const SI = source('ValueObject/SI');
const { match, SI: RegionSI } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('SI (Slovenia)', () => {
		describe('package', () => {
			it('SI is exported', (next) => {
				expect(RegionSI).to.equal(SI);
	
				next();
			});
	
			each`
				input
				------
				SI
				si
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(SI);
	
				next();
			});
		});

		it('has iso3166 SI', (next) => {
			expect(SI.iso3166).to.equal('SI');

			next();
		});

		it('has iso13616 SI', (next) => {
			expect(SI.iso13616).to.equal('SI');

			next();
		});

		it('has 0 regions', (next) => {
			expect(SI.regions).to.be.array();
			expect(SI.regions).to.have.length(0);

			next();
		});

		it('has since 2007-01-01', (next) => {
			const { since } = SI;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2007-01-01');

			next();
		});
	});
});
