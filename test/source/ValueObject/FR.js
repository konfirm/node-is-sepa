/* global source, describe, it, each, expect */

const FR = source('ValueObject/FR');
const { match, FR: RegionFR } = require('../../../source/main.js');
const SubRegionGF = source('ValueObject/GF.js')
const SubRegionGP = source('ValueObject/GP.js')
const SubRegionMQ = source('ValueObject/MQ.js')
const SubRegionYT = source('ValueObject/YT.js')
const SubRegionRE = source('ValueObject/RE.js')
const SubRegionBL = source('ValueObject/BL.js')
const SubRegionMF = source('ValueObject/MF.js')
const SubRegionPM = source('ValueObject/PM.js')
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('FR (France)', () => {
		describe('package', () => {
			it('FR is exported', (next) => {
				expect(RegionFR).to.equal(FR);
	
				next();
			});
	
			each`
				input
				------
				FR
				fr
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(FR);
	
				next();
			});
		});

		it('has iso3166 FR', (next) => {
			expect(FR.iso3166).to.equal('FR');

			next();
		});

		it('has iso13616 FR', (next) => {
			expect(FR.iso13616).to.equal('FR');

			next();
		});

		it('has 8 regions', (next) => {
			expect(FR.regions).to.be.array();
			expect(FR.regions).to.have.length(8);

			expect(FR.regions).to.contain(SubRegionGF);
			expect(FR.regions).to.contain(SubRegionGP);
			expect(FR.regions).to.contain(SubRegionMQ);
			expect(FR.regions).to.contain(SubRegionYT);
			expect(FR.regions).to.contain(SubRegionRE);
			expect(FR.regions).to.contain(SubRegionBL);
			expect(FR.regions).to.contain(SubRegionMF);
			expect(FR.regions).to.contain(SubRegionPM);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = FR;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
