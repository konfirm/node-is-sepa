/* global source, describe, it, each, expect */

const GB = source('ValueObject/GB');
const { match, GB: RegionGB } = require('../../../source/main.js');
const SubRegionGI = source('ValueObject/GI.js')
const SubRegionGG = source('ValueObject/GG.js')
const SubRegionIM = source('ValueObject/IM.js')
const SubRegionJE = source('ValueObject/JE.js')
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('GB (United Kingdom)', () => {
		describe('package', () => {
			it('GB is exported', (next) => {
				expect(RegionGB).to.equal(GB);
	
				next();
			});
	
			each`
				input
				------
				GB
				gb
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(GB);
	
				next();
			});
		});

		it('has iso3166 GB', (next) => {
			expect(GB.iso3166).to.equal('GB');

			next();
		});

		it('has iso13616 GB', (next) => {
			expect(GB.iso13616).to.equal('GB');

			next();
		});

		it('has 4 regions', (next) => {
			expect(GB.regions).to.be.array();
			expect(GB.regions).to.have.length(4);

			expect(GB.regions).to.contain(SubRegionGI);
			expect(GB.regions).to.contain(SubRegionGG);
			expect(GB.regions).to.contain(SubRegionIM);
			expect(GB.regions).to.contain(SubRegionJE);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = GB;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
