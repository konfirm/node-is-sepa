/* global source, describe, it, each, expect */

const SK = source('ValueObject/SK');
const { match, SK: RegionSK } = require('../../../source/main.js');
const date = require('../../helper/date.js');

describe('ValueObject', () => {
	describe('SK (Slovakia)', () => {
		describe('package', () => {
			it('SK is exported', (next) => {
				expect(RegionSK).to.equal(SK);
	
				next();
			});
	
			each`
				input
				------
				SK
				sk
			`('matches $input', ({ input }, next) => {
				expect(match(input)).to.equal(SK);
	
				next();
			});
		});

		it('has iso3166 SK', (next) => {
			expect(SK.iso3166).to.equal('SK');

			next();
		});

		it('has iso13616 SK', (next) => {
			expect(SK.iso13616).to.equal('SK');

			next();
		});

		it('has 0 regions', (next) => {
			expect(SK.regions).to.be.array();
			expect(SK.regions).to.have.length(0);

			next();
		});

		it('has since 1999-01-01', (next) => {
			const { since } = SK;

			expect(since).to.be.instanceof(Date);
			expect(date(since)).to.equal('1999-01-01');

			next();
		});
	});
});
