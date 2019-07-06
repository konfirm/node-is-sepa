/* global source, describe, it, each, expect */

const YT = source('ValueObject/YT');
const { match, YT: RegionYT } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('YT (Mayotte)', () => {
		describe('package', () => {
			it('YT is not exported', (next) => {
				expect(RegionYT).to.equal(undefined);
	
				next();
			});
	
			each`
				input
				------
				YT
				yt
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(YT);
	
				next();
			});
		});

		it('has iso3166 YT', (next) => {
			expect(YT.iso3166).to.equal('YT');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(YT.iso13616).to.equal('FR');

			next();
		});

		it('has 0 regions', (next) => {
			expect(YT.regions).to.be.array();
			expect(YT.regions).to.have.length(0);

			next();
		});

		it('has since 2009-06-01', (next) => {
			const { since } = YT;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2009-06-01');

			next();
		});
	});
});
