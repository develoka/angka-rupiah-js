# Angka-rupiah-js [![NPM Version](https://img.shields.io/npm/v/@develoka/angka-rupiah-js.svg)](https://www.npmjs.com/package/@develoka/angka-rupiah-js) [![Minified Size](https://img.shields.io/bundlephobia/min/@develoka/angka-rupiah-js.svg)](https://www.npmjs.com/package/@develoka/angka-rupiah-js)
Mengkonversi angka ke dalam format penulisan mata uang rupiah

## Demo

[Link Demo](https://code.bakasyntax.com/gist/735ee864fba07f730c7afe6cf76daac6?default-pans=html,js,output)

## Instalasi dan Penggunaan

```
npm install @develoka/angka-rupiah-js
```
```js
import toRupiah from '@develoka/angka-rupiah-js';
```

atau

```
<script src="https://unpkg.com/@develoka/angka-rupiah-js/index.min.js">
```

## Usage

```js
console.log(toRupiah(50000));
// Output: Rp50.000,00
console.log(toRupiah(50000, {symbol: 'IDR', floatingPoint: 0}));
// Output: 50.000 IDR
```

## Fitur

Mendukung berbagai format penulisan mata uang rupiah, baik formal maupun informal.

### Parameter fungsi yang tersedia

|Key|Value|Default|Description|
|:--|:-:|:-:|:--|
|symbol|`string`|`Rp`|Simbol mata uang yang digunakan. Tersedia `Rp` dan `IDR`. Gunakan `null` untuk menghilangkan simbol.|
|formal|`boolean`|`true`|Menentukan posisi simbol mata uang, di depan atau di belakang nominal menurut kaidah Bahasa Indonesia.|
|dot|`string`|`.`|Simbol pengganti tanda titik "." pada hasil format|
|decimal|`string`|`,`|Simbol pengganti tanda koma "," pada hasil format| 
|floatingPoint|`number`|`2`|Menentukan jumlah angka di belakang koma|
|replaceZeroDecimals|`boolean`|`false`|Opsi untuk menukar bilangan angka di belakang koma yang berisi nol semua dengan ",-"|
|useUnit|`boolean`|`false`|Opsi untuk memasang satuan unit (rb, jt, M, T) untuk angka ribuan, jutaan, sampai triliun|
|k|`boolean`|`false`|Opsi untuk mengganti satuan unit ribuan dengan simbol "k"|
|longUnit|`boolean`|`false`|Memanjangkan singkatan dari satuan unit kembali ke kata asalnya|
|spaceBeforeUnit|`boolean`|`false`|Memberikan jarak satu spasi antara nominal dan unit|

### Contoh penggunaan parameter fungsi


```js
console.log(toRupiah(50000));
// Output: Rp50.000,00
console.log(toRupiah(50000, {symbol: 'IDR'}));
// Output: 50.000,00 IDR
console.log(toRupiah(50000, {formal: false}));
// Output: Rp 50.000,00
console.log(toRupiah(50000, {formal: false, symbol: 'IDR'}));
// Output: IDR 50.000,00
console.log(toRupiah(50000, {dot: ',', floatingPoint: 0}));
// Output: Rp 50,000
console.log(toRupiah(50000, {dot: ',', decimal: '.'}));
// Output: Rp 50,000.00
console.log(toRupiah(50000, {replaceZeroDecimals: true}));
// Output: Rp50.000,-
console.log(toRupiah(50000, {useUnit: true, floatingPoint: 0}));
// Output: Rp50rb
console.log(toRupiah(50000, {symbol: 'IDR', formal: false, useUnit: true, k: true, floatingPoint: 0}));
// Output: IDR 50k
console.log(toRupiah(50000, {symbol: false, useUnit: true, longUnit: true, spaceBeforeUnit: true, floatingPoint: 0}));
// Output: 50 ribu
console.log(toRupiah(50750000000, {useUnit: true, longUnit: true, spaceBeforeUnit: true, formal: false}));
// Output: Rp 50,75 milyar
console.log(toRupiah(5250, {useUnit: true, symbol: null, k: true}));
// Output: 5,25k
```

## Testing

Testing menggunakan [jest](https://jestjs.io/). Lihat [file tests](https://github.com/develoka/angka-rupiah-js/blob/main/test/index.test.js).

```
npm install
npm run test
```

## Development

Edit `index.js` kemudian jalankan perintah:

```
npm run build
```
