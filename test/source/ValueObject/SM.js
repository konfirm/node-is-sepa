/* global source, describe, it, each, expect */

const SM = source('ValueObject/SM');
const { match, SM: RegionSM } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('SM (San Marino)', () => {
		describe('package', () => {
			it('SM is exported', (next) => {
				expect(RegionSM).to.equal(SM);
	
				next();
			});
	
			each`
				input
				------
				SM
				sm
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(SM);
	
				next();
			});
		});

		it('has iso3166 SM', (next) => {
			expect(SM.iso3166).to.equal('SM');

			next();
		});

		it('has iso13616 SM', (next) => {
			expect(SM.iso13616).to.equal('SM');

			next();
		});

		it('has 0 regions', (next) => {
			expect(SM.regions).to.be.array();
			expect(SM.regions).to.have.length(0);

			next();
		});

		it('has since 2014-02-01', (next) => {
			const { since } = SM;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('2014-02-01');

			next();
		});
	});
});
