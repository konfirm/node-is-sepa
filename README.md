# is-sepa

Determine whether an iso3166 region code or an iso13616 IBAN country code is part of SEPA (Single Euro Payments Area).

## Installation

The is-sepa package is a scoped package, which means one needs to provide the scope (both in installation and use).

```
$ npm install --save @konfirm/is-sepa
```

## Usage

### isSEPA

The package exposes a function which will provide a `boolean` value on whether the supplied iso3166 regions code(s) and/or provided iso13616 (IBAN) code(s) are present in SEPA.

```js
const isSEPA = require('@konfirm/is-sepa');

console.log(isSEPA('NL')); //  true
console.log(isSEPA('US')); //  false
```

If multiple iso3166/iso13616 codes are provided, the validation will return `true` only if _all_ codes are part of SEPA.

```js
const isSEPA = require('@konfirm/is-sepa');

console.log(isSEPA('NL', 'BE', 'LU')); //  true
console.log(isSEPA('NL', 'BE', 'LU', 'US')); //  false
```

### match

As part of the `isSEPA` function, a `match` method is provided, which will return the requested SEPA Region object.

```js
const isSEPA = require('@konfirm/is-sepa');
const match = isSEPA.match('GB'); //  returns the RegionGB object, representing the United Kingdom
```

This also works for subdivision matching

```js
const isSEPA = require('@konfirm/is-sepa');
const match = isSEPA.match('JE'); //  returns the RegionJE object, representing Jersey (a subdivision of the United Kingdom)
```

#### SEPARegion

The SEPARegion object consists of the following structure

| member         | type         | description                                                                                                                |
| -------------- | ------------ | -------------------------------------------------------------------------------------------------------------------------- |
| iso3166        | string       | the iso3166 region code                                                                                                    |
| iso13616       | string       | the iso13616 IBAN code (this may be different from the iso3166 code)                                                       |
| regions        | [SEPARegion] | subdivisions, if any                                                                                                       |
| since          | Date         | the date on which SEPA was first available in the region                                                                   |
| `Symbol.match` | function     | Allow for use as `String.match` argument, returning the appropriate SEPA Region if it matches (this includes subdivisions) |

##### SEPARegion matching example

```js
//
const { GB } = require('@konfirm/is-sepa');
const match = 'IM'.match(GB); // returns the RegionIM object, representing the Isle of Man
```

The result is no different from using `match` on the `isSEPA` module.

### exported regions

The 36 SEPA regions are exported directly, any subdivision participating in SEPA is available using matching are provided by the containing regions.

The table below summarizes which iso3166 codes are available on the is-sepa module and can be used directly.

```js
const { FR } = require('@konfirm/is-sepa');
```

| iso3166 | country            | includes                       |
| ------- | ------------------ | ------------------------------ |
| AD      | Andorra            |                                |
| AT      | Austria            |                                |
| BE      | Belgium            |                                |
| BG      | Bulgaria           |                                |
| CH      | Switzerland        |                                |
| CY      | Cyprus             |                                |
| CZ      | Czech Republic     |                                |
| DE      | Germany            |                                |
| DK      | Denmark            |                                |
| EE      | Estonia            |                                |
| ES      | Spain              | (Canary Islands)               |
| FI      | Finland            | AX                             |
| FR      | France             | BL, GF, GP, MF, MQ, PM, RE, YT |
| GB      | United Kingdom     | GG, GI, IM, JE                 |
| GR      | Greece             |                                |
| HR      | Croatia            |                                |
| HU      | Hungary            |                                |
| IE      | Ireland            |                                |
| IS      | Iceland            |                                |
| IT      | Italy              |                                |
| LI      | Liechtenstein      |                                |
| LT      | Lithuania          |                                |
| LU      | Luxembourg         |                                |
| LV      | Latvia             |                                |
| MC      | Monaco             |                                |
| MT      | Malta              |                                |
| NL      | Netherlands        |                                |
| NO      | Norway             |                                |
| PL      | Poland             |                                |
| PT      | Portugal           | (Azores, Madeira)              |
| RO      | Romania            |                                |
| SE      | Sweden             |                                |
| SI      | Slovenia           |                                |
| SK      | Slovakia           |                                |
| SM      | San Marino         |                                |
| VA      | Vatican City State |                                |

_The full subdivision names indicate they are explicitly mentioned in the SEPA documentation, but do not provide an iso3166 code of their own_

The subdivision SEPARegion objects can only be accessed through their containing regions, or through `match`

| iso3166 | country                    | included by |
| ------- | -------------------------- | ----------- |
| AX      | Åland Islands              | FI          |
| BL      | Saint Barthélemy           | FR          |
| GF      | French Guiana              | FR          |
| GG      | Guernsey                   | GB          |
| GI      | Gibraltar                  | GB          |
| GP      | Guadeloupe                 | FR          |
| IM      | Isle of Man                | GB          |
| JE      | Jersey                     | GB          |
| MF      | Saint Martin (French part) | FR          |
| MQ      | Martinique                 | FR          |
| PM      | Saint Pierre and Miquelon  | FR          |
| RE      | Réunion                    | FR          |
| YT      | Mayotte                    | FR          |

# License

MIT License Copyright (c) 2019 Rogier Spieker (Konfirm)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
