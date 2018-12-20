/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_index_index__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__pages_index_index___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__pages_index_index__);


/***/ }),
/* 1 */
/***/ (function(module, exports) {

new Vue({
    el: '#nuevoemail',
    data: {
        isMailActive: false,
        isDownloadActive: true,
        example: null,
        languaje: 'ES',
        info_email: '',
        info_name: '',
        info_descarga: '',
        sms: '',
        idPost: '',
        href: '',
        texto: '',
        legal: '',
        titulo: ''
    },
    delimiters: ["<%", "%>"],
    methods: {
        nuevoemail: function nuevoemail() {
            var _this = this;

            var information = [this.info_name, this.info_email, 'No'];

            if (this.testEmail(this.info_email)) {
                this.sms = '';

                transferBytes.connect({
                    id: '70275140e583c498a2c5a3971187748f383ac37e9e8d81491b77d3b60fef340f',
                    license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
                    languaje: this.languaje,
                    content: information,
                    idPost: 0
                }).then(function (result) {
                    _this.isDownloadActive = false;
                    _this.isMailActive = true;
                    _this.emailPost();
                });
            } else {
                this.sms = 'Introduce un correo electronico valido';
            }
        },
        downloadBook: function downloadBook() {
            transferBytes.connect({
                id: 'e7bd38aeb8c872ed3032cf09624b24d1ad8a61de3774f6b90096f309a6f1d7c7',
                license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
                languaje: this.languaje,
                content: ['Si'],
                idPost: this.idPost
            });
        },
        testEmail: function testEmail(email) {
            var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

            return re.test(String(email).toLowerCase());
        },
        verifyEmail: function verifyEmail() {
            var _this2 = this;

            if (this.info_name && this.info_email) {
                var information = [this.info_email];

                transferBytes.connect({
                    id: '1f31efa5197bae592a7608b399bc39466dbaaa1bab7a46a40077258703fc63af',
                    license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
                    languaje: this.languaje,
                    content: information,
                    idPost: 0
                }).then(function (result) {
                    if (result.length == 0) {
                        _this2.nuevoemail();
                    } else {
                        _this2.sms = 'Ya te bajaste nuestro libro';
                    }
                });
            } else {
                this.sms = 'Rellena todos los campos';
            }
        },
        infobook: function infobook() {
            var _this3 = this;

            var information = [];
            transferBytes.connect({
                id: 'ae22207d4c06c8efe705b0197e42b5d7b017b22ae7a71fb738c1f79f5bafcdc6',
                license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then(function (result) {
                _this3.href = 'https://www.transferbytes.io/assets/src/files/' + result[0].pdf[0];
                _this3.titulo = result[0].titulo;
                _this3.texto = result[0].texto;
                _this3.legal = result[0].legal;
            });
        },
        emailPost: function emailPost() {
            var _this4 = this;

            var information = [this.info_email];

            transferBytes.connect({
                id: '1f31efa5197bae592a7608b399bc39466dbaaa1bab7a46a40077258703fc63af',
                license: 'tb-ADFA0D0D43E89F0A146B4FC93811E9AB5D3033F24708DF4B1790A3227F0E1288',
                languaje: this.languaje,
                content: information,
                idPost: 0
            }).then(function (result) {
                _this4.idPost = result[0].idPost;
                _this4.sms = 'Gracias por bajarte nuestro ebook :)';
            });
        }
    },
    mounted: function mounted() {
        this.infobook();
    }
});

/***/ })
/******/ ]);