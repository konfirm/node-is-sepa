/* global source, describe, it, each, expect */

const CH = source('ValueObject/CH');
const { match, CH: RegionCH } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('CH (Switzerland)', () => {
		describe('package', () => {
			it('CH is exported', (next) => {
				expect(RegionCH).to.equal(CH);
	
				next();
			});
	
			each`
				input
				------
				CH
				ch
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(CH);
	
				next();
			});
		});

		it('has iso3166 CH', (next) => {
			expect(CH.iso3166).to.equal('CH');

			next();
		});

		it('has iso13616 CH', (next) => {
			expect(CH.iso13616).to.equal('CH');

			next();
		});

		it('has 0 regions', (next) => {
			expect(CH.regions).to.be.array();
			expect(CH.regions).to.have.length(0);

			next();
		});

		it('has since 2006-03-01', (next) => {
			const { since } = CH;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2006-03-01');

			next();
		});
	});
});
