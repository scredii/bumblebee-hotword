/* eslint-disable */

const Porcupine = require('./porcupine');
const PicovoiceAudioManager = require('./picovoiceAudioManager');

let hotwords = {
	'bumblebee': new Uint8Array([
		0x0a, 0x08, 0xb8, 0x86, 0x43, 0x36, 0x86, 0x44, 0x95, 0x3f, 0x82, 0x61,
		0xe1, 0x06, 0xea, 0x3e, 0xf8, 0xca, 0x17, 0xe0, 0x9e, 0x34, 0xa7, 0x6d,
		0x6f, 0x7f, 0x31, 0x1d, 0x70, 0x7a, 0x59, 0x43, 0xe0, 0xe7, 0xa0, 0xce,
		0x31, 0xe5, 0x13, 0x3b, 0x89, 0xd2, 0x38, 0xc4, 0x96, 0xd0, 0x52, 0xde,
		0x6b, 0xe1, 0x44, 0x52, 0x81, 0x9e, 0x66, 0xd9, 0xf5, 0xe1, 0xd6, 0xef,
		0xa0, 0xd4, 0xf5, 0x17, 0xbe, 0xca, 0x02, 0x87, 0xa1, 0xc8, 0x89, 0x4c,
		0x30, 0x3c, 0x6e, 0x34, 0x63, 0x6d, 0x3b, 0x13, 0x1c, 0x88, 0x9c, 0x7c,
		0xc8, 0xf2, 0xc5, 0x1a, 0xaf, 0xec, 0x95, 0x95
	]),
	'porcupine': new Uint8Array([
		0x5e, 0x43, 0x55, 0x12, 0xbb, 0xb0, 0xdf, 0x66, 0x9d, 0x76, 0x73, 0xc6,
		0x18, 0x18, 0x4c, 0x65, 0x29, 0x85, 0xe4, 0x40, 0x8a, 0x8b, 0x4e, 0xf3,
		0x1c, 0xd7, 0xc2, 0x2a, 0x45, 0x95, 0x92, 0x94, 0x5e, 0x3a, 0x39, 0x1b,
		0x78, 0x28, 0xcb, 0x0c, 0x91, 0x32, 0x77, 0x5b, 0xe5, 0xe4, 0xec, 0x11,
		0x44, 0x40, 0xa1, 0x0f, 0xd0, 0x91, 0x83, 0x28, 0x7c, 0x6c, 0x5a, 0xc4,
		0xf1, 0x0d, 0x3c, 0x06, 0x27, 0xc5, 0x89, 0x6d, 0xcc, 0x6a, 0x5e, 0xbf,
		0xa1, 0xb1, 0x12, 0x47, 0xa3, 0x57, 0xa7, 0x80, 0x9b, 0xa1, 0xd8, 0x30,
		0x90, 0xb4, 0x57, 0x1d, 0x42, 0xf1, 0xdf, 0x83, 0xb4, 0x16, 0xf6, 0x8c
	]),
	'dragonfly': new Uint8Array([
		0xb4, 0xca, 0xdb, 0x48, 0xed, 0x24, 0xe0, 0xa0, 0x91, 0x7e, 0xd3, 0xba,
		0xf2, 0x4d, 0x06, 0xbd, 0x0e, 0x42, 0xb8, 0x00, 0xb3, 0x9f, 0x2e, 0xd4,
		0x46, 0xd2, 0x83, 0xc4, 0xe0, 0x02, 0x11, 0x4a, 0x0f, 0x7a, 0x0c, 0xc7,
		0xb0, 0x2a, 0x80, 0xb7, 0x7a, 0x52, 0x93, 0x46, 0x24, 0xf3, 0xa8, 0x4a,
		0xb5, 0x21, 0xa6, 0x80, 0x9e, 0x00, 0xcd, 0xef, 0x5a, 0x4e, 0xaf, 0xc3,
		0x58, 0x86, 0x88, 0x0a, 0x8c, 0x1c, 0x63, 0x9b, 0xfb, 0x84, 0xfc, 0x06,
		0xc4, 0x39, 0x29, 0xee, 0xf6, 0x47, 0x12, 0xf7, 0xce, 0x73, 0xc8, 0xd6,
		0x86, 0xae, 0x7d, 0xa3, 0x9a, 0xa8, 0xc1, 0x7b, 0xfd, 0x1b, 0xd7, 0xe3
	]),
	'caterpillar': new Uint8Array([
		0x78, 0xe7, 0x28, 0xff, 0xe0, 0xef, 0xc4, 0x4c, 0x52, 0xe6, 0x85, 0x6e,
		0xcd, 0x4b, 0x0c, 0x6d, 0xaa, 0x70, 0x2d, 0xd5, 0x08, 0x60, 0x63, 0x3d,
		0xf3, 0x66, 0x96, 0x55, 0xbb, 0x2d, 0xb8, 0x82, 0xc6, 0x31, 0xca, 0x17,
		0x1f, 0x0e, 0xf3, 0xfc, 0x35, 0x9d, 0x0b, 0x39, 0xc0, 0x4b, 0xfa, 0x04,
		0x13, 0x08, 0x76, 0x06, 0xde, 0x7c, 0xd3, 0xd6, 0x87, 0xff, 0x02, 0x4a,
		0x42, 0x24, 0xf9, 0xf6, 0x7b, 0x2e, 0x4e, 0x21, 0x54, 0x4f, 0x93, 0x86,
		0xf4, 0x4a, 0xd8, 0xa3, 0xea, 0xfb, 0x9e, 0xc3, 0xfc, 0x94, 0x7e, 0xe6,
		0xa6, 0x9f, 0xfb, 0xb7, 0x21, 0xe0, 0x3f, 0x3d, 0x3a, 0x00, 0x3c, 0x1d
	]),
	'grasshopper': new Uint8Array([
		0x74, 0x40, 0x9f, 0xdd, 0x13, 0xae, 0xbb, 0x7e, 0x02, 0xd1, 0x68, 0x72,
		0xd8, 0x43, 0xc7, 0x13, 0xa8, 0x97, 0xfc, 0x35, 0x90, 0xc8, 0xa5, 0x08,
		0x9a, 0xb4, 0x94, 0x62, 0x2d, 0xab, 0xb9, 0x32, 0xfa, 0xfe, 0xe2, 0xc8,
		0xe8, 0x46, 0xb6, 0x71, 0x53, 0x22, 0xd9, 0x7b, 0x3f, 0xed, 0x26, 0x85,
		0x5f, 0x95, 0x4b, 0xbe, 0x53, 0xe2, 0x6b, 0x72, 0x46, 0xf1, 0x0b, 0x76,
		0xd9, 0xbd, 0xc6, 0xe6, 0x93, 0x17, 0xbc, 0x77, 0x7a, 0x2c, 0x72, 0x7d,
		0x11, 0x0b, 0x5f, 0xd9, 0x3d, 0xcf, 0x35, 0x7d, 0x9c, 0x75, 0x80, 0x33,
		0x1b, 0x05, 0xd5, 0x81, 0x7a, 0xb0, 0x58, 0x6c, 0xab, 0x66, 0xb9, 0x5b
	]),
	'terminator': new Uint8Array([
		0x9a, 0x99, 0x4e, 0x73, 0x8d, 0xce, 0x0f, 0x97, 0x8e, 0xe0, 0x8d, 0x56,
		0xba, 0x3e, 0x2b, 0x45, 0xdb, 0x29, 0x73, 0xcd, 0xf3, 0x6b, 0xdc, 0x00,
		0xe2, 0x61, 0x40, 0x30, 0x45, 0x67, 0x11, 0x21, 0x0e, 0x76, 0x58, 0x5e,
		0x19, 0xe2, 0x07, 0x4f, 0xe1, 0xab, 0x58, 0xd9, 0x74, 0x54, 0x28, 0x23,
		0xa7, 0x52, 0x9c, 0x66, 0x5f, 0x4d, 0xdf, 0x1b, 0x17, 0xa5, 0x64, 0xc0,
		0xfc, 0xd1, 0x16, 0x22, 0x00, 0x89, 0x13, 0x98, 0x2b, 0x22, 0x29, 0xc3,
		0x7a, 0xc9, 0x15, 0x76, 0x3a, 0x6d, 0xcd, 0x1c, 0xa1, 0xb9, 0xf2, 0x03,
		0x43, 0x30, 0x62, 0x09, 0x80, 0xa2, 0x26, 0xd2
	]),
	'christina': new Uint8Array([
		0x3a, 0xcf, 0x5f, 0x5e, 0xf4, 0x96, 0x22, 0x62, 0x67, 0xc2, 0xbe, 0x20,
		0xfe, 0x8d, 0x0f, 0x4e, 0x32, 0x55, 0x2f, 0xc8, 0x0d, 0x48, 0x84, 0xa5,
		0x59, 0x26, 0xed, 0x2d, 0x86, 0xd6, 0x67, 0x47, 0x7a, 0xa1, 0x02, 0x14,
		0x8f, 0xd9, 0x4f, 0xd1, 0x1f, 0x85, 0x99, 0xcd, 0x00, 0xaf, 0x0c, 0xf2,
		0xbb, 0x4d, 0x6d, 0x03, 0x32, 0x96, 0x9c, 0x14, 0x47, 0xcc, 0x1f, 0xcb,
		0x27, 0x60, 0xb8, 0xd4, 0xd2, 0x29, 0xea, 0x8a, 0xe4, 0xab, 0x84, 0xc7,
		0x1f, 0x59, 0x5f, 0xfb, 0x96, 0xd2, 0xb5, 0xe5, 0x4e, 0x6a, 0x01, 0x61,
		0xe2, 0x96, 0x6f, 0x3f, 0xb0, 0x07, 0x73, 0xd2
	]),
	'francesca': new Uint8Array([
		0x1d, 0xaa, 0x4e, 0x09, 0xa1, 0x59, 0xed, 0xc5, 0x06, 0xc0, 0x88, 0x32,
		0x4e, 0x76, 0x0a, 0xe5, 0x99, 0xca, 0x77, 0x83, 0x1c, 0xf0, 0xca, 0x18,
		0xb7, 0xc8, 0x7e, 0x64, 0x6d, 0x23, 0x44, 0xfc, 0x12, 0xdd, 0xc1, 0x03,
		0x21, 0x9c, 0x13, 0x6b, 0x8d, 0xf5, 0x9a, 0xfc, 0xb7, 0x0c, 0x07, 0xaa,
		0xf8, 0x5a, 0x84, 0x62, 0x22, 0xba, 0xf4, 0xf6, 0x4a, 0x95, 0x68, 0xf6,
		0xf9, 0x42, 0x5b, 0xa5, 0x0a, 0xbd, 0x4b, 0x82, 0xce, 0x9d, 0x71, 0x32,
		0x9c, 0x96, 0x6b, 0xd8, 0x95, 0xff, 0x16, 0x6b, 0xfa, 0xfa, 0xd7, 0x6c,
		0x9c, 0x20, 0x15, 0xcb, 0x17, 0x54, 0x7e, 0x13, 0xc9, 0x2b, 0x37, 0x72
	]),
	'maestro': new Uint8Array([
		0xfd, 0xa7, 0x49, 0xb5, 0x40, 0xca, 0xc1, 0x53, 0xcb, 0xbf, 0x45, 0xc3,
		0xbe, 0xf5, 0xce, 0x85, 0x93, 0xa7, 0x9d, 0x50, 0x2d, 0x85, 0x6c, 0xba,
		0x73, 0xef, 0xdd, 0x28, 0x11, 0x1c, 0xea, 0x2f, 0x4b, 0x78, 0x42, 0xf9,
		0x4e, 0x6b, 0x08, 0xec, 0x75, 0x59, 0x87, 0x7f, 0x49, 0x1a, 0xc9, 0xa4,
		0x01, 0xe9, 0x3b, 0xea, 0x53, 0xaa, 0x83, 0xff, 0x29, 0x92, 0xfb, 0xcb,
		0xdd, 0xe2, 0xca, 0x0c, 0x6d, 0xb9, 0xd1, 0xf1, 0xb9, 0xc2, 0x35, 0x61,
		0xb6, 0x41, 0x91, 0xe0, 0x00, 0x5f, 0xca, 0x79, 0x10, 0xae, 0xa2, 0xfb,
		0xf6, 0xa9, 0xf8, 0xf4, 0xd8, 0xd9, 0x47, 0xf9, 0x03, 0x04, 0x9e, 0xae,
		0x05, 0x6f, 0xec, 0x18, 0x32, 0xbc, 0x7d, 0xa8
	]),
};

let hotwordNames = Object.keys(hotwords);

function BumbleBee(options) {
	if (options && options.hotword) {
		this.setHotword(options.hotword);
	}
	if (options && options.sensitivity) {
		this.sensitivity(options.sensitivity);
	}
}

BumbleBee.prototype.setHotword = function (w) {
	if (w === null || w === '') {
		this.hotword = null;
	}
	else if (hotwordNames.indexOf(w) > -1) {
		this.hotword = w;
	}
	else {
		throw new Error('invalid hotword');
	}
};

BumbleBee.prototype.sensitivity = function (s) {
	this.sensitivities = new Float32Array([s, 1, 1, 1, 1, 1]);
};

BumbleBee.prototype.stop = function () {
	this.audioManager.stop();
};

BumbleBee.prototype.createPorcupine = function (callback) {
	if (!this.porcupine) {
		Porcupine.create(Object.values(hotwords), this.sensitivities, (porcupine) => {
			this.porcupine = porcupine;
			callback();
		});
	}
	else callback();
};

BumbleBee.prototype.start = function (callback) {
	this.createPorcupine(() => {
		this.audioManager = new PicovoiceAudioManager();

		this.audioManager.start(this.porcupine,  (keywordIndex) => {
			if (keywordIndex>-1) {
				let keyword = hotwordNames[keywordIndex];
				if (this.hotword === null) {
					if (callback) callback(keyword);
				}
				else if (keyword === this.hotword) {
					if (callback) callback(this.hotword);
				}
				else {
					console.log('invalid key', keywordIndex, keyword);
				}
			}
		}, function (e) {
			console.log('error', e);
			debugger;
		});
	});

};

let bumblebee = new BumbleBee({
	hotword: 'bumblebee',
	sensitivity: 0.5
});

module.exports = bumblebee;