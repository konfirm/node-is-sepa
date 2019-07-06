/* global source, describe, it, each, expect */

describe('main', () => {
	const isSEPA = require('../../source/main.js');

	it('does not validate if no codes are provided', (next) => {
		expect(isSEPA()).to.be.false();

		next();
	});

	it('validates any number of valid codes', (next) => {
		expect(isSEPA('AD')).to.be.true();
		expect(isSEPA('AD', 'AT')).to.be.true();
		expect(isSEPA('AD', 'AT', 'BE', 'BG')).to.be.true();

		expect(isSEPA('QQ')).to.be.false();
		expect(isSEPA('QQ', 'AT')).to.be.false();
		expect(isSEPA('QQ', 'AT', 'BE', 'BG')).to.be.false();

		expect(isSEPA('GG', 'GI', 'IM', 'JE')).to.be.true();

		next();
	});

	each`
		code | exported
		-----|----------
		AD   | yes
		AT   | yes
		AX   | no
		BE   | yes
		BG   | yes
		BL   | no
		CH   | yes
		CY   | yes
		CZ   | yes
		DE   | yes
		DK   | yes
		EE   | yes
		ES   | yes
		FI   | yes
		FR   | yes
		GB   | yes
		GF   | no
		GG   | no
		GI   | no
		GP   | no
		GR   | yes
		HR   | yes
		HU   | yes
		IE   | yes
		IM   | no
		IS   | yes
		IT   | yes
		JE   | no
		LI   | yes
		LT   | yes
		LU   | yes
		LV   | yes
		MC   | yes
		MF   | no
		MQ   | no
		MT   | yes
		NL   | yes
		NO   | yes
		PL   | yes
		PM   | no
		PT   | yes
		RE   | no
		RO   | yes
		SE   | yes
		SI   | yes
		SK   | yes
		SM   | yes
		VA   | yes
		YT   | no
	`('$code is exported: $exported', ({ code, exported }, next) => {
		expect(code in isSEPA).to.equal(exported === 'yes');
		expect(isSEPA(code)).to.be.true();

		next();
	});
});
