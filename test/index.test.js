const toRupiah = require("../");

test('formal-symbol', () => {
    expect(toRupiah(50000.699)).toBe('Rp50.000,69');
    expect(toRupiah(50000.6)).toBe('Rp50.000,60');
    expect(toRupiah(50000)).toBe('Rp50.000,00');
    expect(toRupiah(50000, {replaceZeroDecimals: true})).toBe('Rp50.000,-');
    expect(toRupiah(50000, {floatingPoint: 0})).toBe('Rp50.000');

    expect(toRupiah(50000.69, {symbol: 'IDR'})).toBe('50.000,69 IDR');
    expect(toRupiah(50000.6, {symbol: 'IDR'})).toBe('50.000,60 IDR');
    expect(toRupiah(50000, {symbol: 'IDR'})).toBe('50.000,00 IDR');
    expect(toRupiah(50000, {symbol: 'IDR', replaceZeroDecimals: true})).toBe('50.000,- IDR');
    expect(toRupiah(50000, {symbol: 'IDR', floatingPoint: 0})).toBe('50.000 IDR');
});

test('informal-symbol', () => {
    expect(toRupiah(50000.699, {formal: false})).toBe('Rp 50.000,69');
    expect(toRupiah(50000.6, {formal: false})).toBe('Rp 50.000,60');
    expect(toRupiah(50000, {formal: false})).toBe('Rp 50.000,00');
    expect(toRupiah(50000, {formal: false, replaceZeroDecimals: true})).toBe('Rp 50.000,-');
    expect(toRupiah(50000, {formal: false, floatingPoint: 0})).toBe('Rp 50.000');

    expect(toRupiah(50000.69, {symbol: 'IDR', formal: false})).toBe('IDR 50.000,69');
    expect(toRupiah(50000.6, {symbol: 'IDR', formal: false})).toBe('IDR 50.000,60');
    expect(toRupiah(50000, {symbol: 'IDR', formal: false})).toBe('IDR 50.000,00');
    expect(toRupiah(50000, {symbol: 'IDR', formal: false, replaceZeroDecimals: true})).toBe('IDR 50.000,-');
    expect(toRupiah(50000, {symbol: 'IDR', formal: false, floatingPoint: 0})).toBe('IDR 50.000');
});

test('formal-symbol-unit', () => {
    expect(toRupiah(50764, {useUnit: true, k: true, floatingPoint: 0})).toBe('Rp50k');
    expect(toRupiah(50764, {useUnit: true, floatingPoint: 0})).toBe('Rp50rb');
    expect(toRupiah(50764123, {useUnit: true, floatingPoint: 0})).toBe('Rp50jt');
    expect(toRupiah(50764123123, {useUnit: true, floatingPoint: 0})).toBe('Rp50M');
    expect(toRupiah(50764123123123, {useUnit: true, floatingPoint: 0})).toBe('Rp50T');

    expect(toRupiah(50764, {useUnit: true, floatingPoint: 0, symbol: 'IDR', k: true})).toBe('50k IDR');
    expect(toRupiah(50764, {useUnit: true, floatingPoint: 0, symbol: 'IDR'})).toBe('50rb IDR');
    expect(toRupiah(50764123, {useUnit: true, floatingPoint: 0, symbol: 'IDR'})).toBe('50jt IDR');
    expect(toRupiah(50764123123, {useUnit: true, floatingPoint: 0, symbol: 'IDR'})).toBe('50M IDR');
    expect(toRupiah(50764123123123, {useUnit: true, floatingPoint: 0, symbol: 'IDR'})).toBe('50T IDR');

    expect(toRupiah(50764, {useUnit: true, floatingPoint: 0, longUnit: true, spaceBeforeUnit: true})).toBe('Rp50 ribu');
    expect(toRupiah(50764123, {useUnit: true, floatingPoint: 0, longUnit: true, spaceBeforeUnit: true})).toBe('Rp50 juta');
    expect(toRupiah(50764123123, {useUnit: true, floatingPoint: 0, longUnit: true, spaceBeforeUnit: true})).toBe('Rp50 milyar');
    expect(toRupiah(50764123123123, {useUnit: true, floatingPoint: 0, longUnit: true, spaceBeforeUnit: true})).toBe('Rp50 triliun');
});

test('informal-symbol-unit', () => {
    expect(toRupiah(50764, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false, floatingPoint: 0})).toBe('Rp 50 ribu');
    expect(toRupiah(50764123, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false, floatingPoint: 0})).toBe('Rp 50 juta');
    expect(toRupiah(50764123123, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false, floatingPoint: 0})).toBe('Rp 50 milyar');
    expect(toRupiah(50764123123123, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false, floatingPoint: 0})).toBe('Rp 50 triliun');

    expect(toRupiah(50764, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false})).toBe('Rp 50,76 ribu');
    expect(toRupiah(50764123, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false})).toBe('Rp 50,76 juta');
    expect(toRupiah(50764123123, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false})).toBe('Rp 50,76 milyar');
    expect(toRupiah(50764123123123, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false})).toBe('Rp 50,76 triliun');

    expect(toRupiah(50764, {useUnit: true, k: true, formal: false, floatingPoint: 0})).toBe('Rp 50k');
    expect(toRupiah(50764, {useUnit: true, formal: false, floatingPoint: 0})).toBe('Rp 50rb');
    expect(toRupiah(50764123, {useUnit: true, formal: false, floatingPoint: 0})).toBe('Rp 50jt');
    expect(toRupiah(50764123123, {useUnit: true, formal: false, floatingPoint: 0})).toBe('Rp 50M');
    expect(toRupiah(50764123123123, {useUnit: true, formal: false, floatingPoint: 0})).toBe('Rp 50T');

    expect(toRupiah(50764, {useUnit: true, symbol: 'IDR', k: true, formal: false, floatingPoint: 0})).toBe('IDR 50k');
    expect(toRupiah(50764, {useUnit: true, symbol: 'IDR', formal: false, floatingPoint: 0})).toBe('IDR 50rb');
    expect(toRupiah(50764123, {useUnit: true, symbol: 'IDR', formal: false, floatingPoint: 0})).toBe('IDR 50jt');
    expect(toRupiah(50764123123, {useUnit: true, symbol: 'IDR', formal: false, floatingPoint: 0})).toBe('IDR 50M');
    expect(toRupiah(50764123123123, {useUnit: true, symbol: 'IDR', formal: false, floatingPoint: 0})).toBe('IDR 50T');
});

test('unit', () => {
    expect(toRupiah(1, {useUnit: true, symbol: null, floatingPoint: 0})).toBe('1');
    expect(toRupiah(12, {useUnit: true, symbol: null, floatingPoint: 0})).toBe('12');
    expect(toRupiah(123, {useUnit: true, symbol: null, floatingPoint: 0})).toBe('123');

    expect(toRupiah(12, {useUnit: true, symbol: null, k: true})).toBe('12,00');
    expect(toRupiah(12, {useUnit: true, symbol: null, k: true, removeZeroDecimals: true})).toBe('12');

    expect(toRupiah(1234, {useUnit: true, symbol: null, k: true})).toBe('1,23k');
    expect(toRupiah(1234, {useUnit: true, symbol: null})).toBe('1,23rb');
    expect(toRupiah(12345, {useUnit: true, symbol: null})).toBe('12,34rb');
    expect(toRupiah(123456, {useUnit: true, symbol: null})).toBe('123,45rb');
    expect(toRupiah(1234567, {useUnit: true, symbol: null})).toBe('1,23jt');
    expect(toRupiah(12345678, {useUnit: true, symbol: null})).toBe('12,34jt');
    expect(toRupiah(123456789, {useUnit: true, symbol: null})).toBe('123,45jt');
    expect(toRupiah(1234567890, {useUnit: true, symbol: null})).toBe('1,23M');
    expect(toRupiah(12345678901, {useUnit: true, symbol: null})).toBe('12,34M');
    expect(toRupiah(123456789012, {useUnit: true, symbol: null})).toBe('123,45M');
    expect(toRupiah(1234567890123, {useUnit: true, symbol: null})).toBe('1,23T');
    expect(toRupiah(12345678901234, {useUnit: true, symbol: null})).toBe('12,34T');
    expect(toRupiah(123456789012345, {useUnit: true, symbol: null})).toBe('123,45T');

    expect(toRupiah(1234, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('1,23 ribu');
    expect(toRupiah(12345, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('12,34 ribu');
    expect(toRupiah(123456, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('123,45 ribu');
    expect(toRupiah(1234567, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('1,23 juta');
    expect(toRupiah(12345678, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('12,34 juta');
    expect(toRupiah(123456789, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('123,45 juta');
    expect(toRupiah(1234567890, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('1,23 milyar');
    expect(toRupiah(12345678901, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('12,34 milyar');
    expect(toRupiah(123456789012, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('123,45 milyar');
    expect(toRupiah(1234567890123, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('1,23 triliun');
    expect(toRupiah(12345678901234, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('12,34 triliun');
    expect(toRupiah(123456789012345, {useUnit: true, symbol: null, longUnit: true, spaceBeforeUnit: true})).toBe('123,45 triliun');
});

test('custom-dot-comma', () => {
    expect(toRupiah(1776000, {dot: ',', floatingPoint: 0})).toBe('Rp1,776,000');
    expect(toRupiah(1776000, {dot: ',', symbol: null, floatingPoint: 0})).toBe('1,776,000');
    expect(toRupiah(1776500, {dot: ',', symbol: null, floatingPoint: 0})).toBe('1,776,500');
    expect(toRupiah(1776500.99, {dot: ',', decimal: '.', symbol: null })).toBe('1,776,500.99');
    expect(toRupiah(1776500.2147, {dot: ',', decimal: '.', symbol: null, floatingPoint: 3})).toBe('1,776,500.214');
    expect(toRupiah(1776500.214788, {symbol: null, floatingPoint: 4})).toBe('1.776.500,2147');
});
