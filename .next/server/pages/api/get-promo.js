module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/get-promo.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Credentials.json":
/*!**************************!*\
  !*** ./Credentials.json ***!
  \**************************/
/*! exports provided: type, project_id, private_key_id, private_key, client_email, client_id, auth_uri, token_uri, auth_provider_x509_cert_url, client_x509_cert_url, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"type\":\"service_account\",\"project_id\":\"suggestionbox-337312\",\"private_key_id\":\"2c527efddf52e45a1322a56aa6605ad968a3c63a\",\"private_key\":\"-----BEGIN PRIVATE KEY-----\\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCVhBC9em1E5XlE\\n4ZBxlT/8fVwPdx9nK8eeEm0kHhGNjusqZMJw3TzAPXkMUZXdHWI5EX1GU4COSXNa\\nve6AyfaVXpOj/6zKsKjnkLqTetnI/mvesRbAAr3w2cqGZmlMhy3lPMkhLCSCAyF1\\nV2/16HLl7rZdLWk3Rmlvld6G75UcPGRoQtfW/fx0474kwYJbo+M7uuq6dHXJfoYs\\n2lo8yZ95uQBJqtJl1twYuwp+lvc/PLdG6KbAuboPQNGRNo5OcnRxV0dqzAR8A9jP\\nNT2rdtqDERrj8gKG6k8zbH0kuk39LI6MWTmvNVSOWCSxs3c/jCRt6rPMtfWQ2DVp\\nhQ8d1f6RAgMBAAECggEAJGnSjeL4I7RjcXQh8pevyrVZK2cOndjat9OzAv3Tto8d\\nFOkPNd+bwRH3nhlsjzptxopM4UjK4VxgHLRvFqyZQk2TVXiaQ478w9DKr8pWqg3U\\nhZrJeJ/yVGsmWM8uS/YMJm1EarDOf1910Zcm7FPdT8RwY4cAvfaHDScJ2AEXZpWr\\na33WhiKVQ1FKxX1yCsgY0EI37ssSbLyfsaH339UwbbbqJw2ELbxwOLtONYV7Q3Sn\\n+hYN9/mOI6rnkCLnVDtPPX4pI5vJBtbmHSaetf1bx9nc/D1Xx1HKEhb783DBni1O\\nXDOq8n66893p+BYoQ8EFAjZ4j27Nm17cF8lu3w7dRQKBgQDG3zwKBOYUWhCx1WbU\\np74N29Wu5DXCJ/Pqtp13yr1Zeawqy85JTkOtt3tJw/lL0hHOUCsJvizvOkvr3o76\\nHuAJqA9ZVgHXKo7MbUQ0SjI4GO5S37Ia3lvlcSO5AOI2WDVssRTmoTC3k1+XtFGd\\nNgBN0A0vrdoxWZ2rqlzwZxcOlwKBgQDAd0BJsOgixwLgD8WSEFAVPI+Q3CWxeAPz\\nwMLJbX3n/yFh1ZGMjW+0ECGBCl4Dj/EQ692cRY2LWHXhRTp5NLXS6kyOH30x+b2Y\\nDNvBRkHUzlqVfeahinlQwYNz24dNcMqZXyfqs6ivm7NoqUVsv5HCtVrZZuZ2wpnV\\nvuAodS6pFwKBgCQB40MFJAtnS0KHmvjB7l1gAk6KL1maFkXXDqfT43jB2PRetlj7\\nfLGFWSNAAnFB9ctfJIu9DTG7Ymewgj6zPGlDLpRESE0G/Zfx6Ll2/aS+jtgefIb0\\n37qpQ4iJqmugiPvHDDu9z65NVq+HDIfkcSWll92cIrdwvGWKkQ1N/RS9AoGBALaE\\n4HyBvcKtQ/bEPjKkMa3R/rv7aeuAyw6vsIlgwlPuSPQEmsDVqCb0XTGIaVurd4r6\\ngvCdrPuGalO1WRx0djGMbAkjp5BrK/czynrha7Cp+JFoEf0D2sRQn56RgyBXZGpK\\nKQqUUdYnK96HGAVnLo2deohM4yWgqk5fcygq6JMFAoGAE1yZrSCqJMMyjHVZsLWs\\n3uW1qj3ItoG399YUjICuuySunstV7NgXgZhyZjH6M8OX1rnYC8hKDYUcyep5qd5v\\nnC197f3t51TVAS4SCpnqbovwnPF8UoieF5PotECWMzUgi791KZJT/L39KfqoE9o6\\ngDag6L6m7GU7Qr3d85E5NbI=\\n-----END PRIVATE KEY-----\\n\",\"client_email\":\"suggestionbox@suggestionbox-337312.iam.gserviceaccount.com\",\"client_id\":\"116447643833400081254\",\"auth_uri\":\"https://accounts.google.com/o/oauth2/auth\",\"token_uri\":\"https://oauth2.googleapis.com/token\",\"auth_provider_x509_cert_url\":\"https://www.googleapis.com/oauth2/v1/certs\",\"client_x509_cert_url\":\"https://www.googleapis.com/robot/v1/metadata/x509/suggestionbox%40suggestionbox-337312.iam.gserviceaccount.com\"}");

/***/ }),

/***/ "./pages/api/get-promo.js":
/*!********************************!*\
  !*** ./pages/api/get-promo.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! google-spreadsheet */ "google-spreadsheet");
/* harmony import */ var google_spreadsheet__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Credentials_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Credentials.json */ "./Credentials.json");
var _Credentials_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ../../Credentials.json */ "./Credentials.json", 1);


const doc = new google_spreadsheet__WEBPACK_IMPORTED_MODULE_0__["GoogleSpreadsheet"]('1f3vtsBEe2AaP0gtzy2wh_OxmGtu9t2FYYbanro8EeCo');
/* harmony default export */ __webpack_exports__["default"] = (async (req, res) => {
  try {
    await doc.useServiceAccountAuth(_Credentials_json__WEBPACK_IMPORTED_MODULE_1__);
    await doc.loadInfo();
    const sheet = doc.sheetsByIndex[2];
    await sheet.loadCells('B4:B6');
    const mostrarPromocaoCell = sheet.getCell(3, 1);
    const textPromocaoCell = sheet.getCell(5, 1);
    res.end(JSON.stringify({
      showCoupon: mostrarPromocaoCell.value === 'VERDADEIRO',
      message: textPromocaoCell.value
    }));
  } catch (err) {
    res.end(JSON.stringify({
      showCoupon: false,
      message: ''
    }));
  }
});

/***/ }),

/***/ "google-spreadsheet":
/*!*************************************!*\
  !*** external "google-spreadsheet" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("google-spreadsheet");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL2dldC1wcm9tby5qcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJnb29nbGUtc3ByZWFkc2hlZXRcIiJdLCJuYW1lcyI6WyJkb2MiLCJHb29nbGVTcHJlYWRzaGVldCIsInJlcSIsInJlcyIsInVzZVNlcnZpY2VBY2NvdW50QXV0aCIsImNyZWRlbnRpYWxzIiwibG9hZEluZm8iLCJzaGVldCIsInNoZWV0c0J5SW5kZXgiLCJsb2FkQ2VsbHMiLCJtb3N0cmFyUHJvbW9jYW9DZWxsIiwiZ2V0Q2VsbCIsInRleHRQcm9tb2Nhb0NlbGwiLCJlbmQiLCJKU09OIiwic3RyaW5naWZ5Iiwic2hvd0NvdXBvbiIsInZhbHVlIiwibWVzc2FnZSIsImVyciJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEZBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBRUEsTUFBTUEsR0FBRyxHQUFHLElBQUlDLG9FQUFKLENBQXNCLDhDQUF0QixDQUFaO0FBRWUsc0VBQU9DLEdBQVAsRUFBWUMsR0FBWixLQUFvQjtBQUVqQyxNQUFHO0FBQ0QsVUFBTUgsR0FBRyxDQUFDSSxxQkFBSixDQUEwQkMsOENBQTFCLENBQU47QUFDQSxVQUFNTCxHQUFHLENBQUNNLFFBQUosRUFBTjtBQUNBLFVBQU1DLEtBQUssR0FBR1AsR0FBRyxDQUFDUSxhQUFKLENBQWtCLENBQWxCLENBQWQ7QUFDQSxVQUFNRCxLQUFLLENBQUNFLFNBQU4sQ0FBZ0IsT0FBaEIsQ0FBTjtBQUVBLFVBQU1DLG1CQUFtQixHQUFHSCxLQUFLLENBQUNJLE9BQU4sQ0FBYyxDQUFkLEVBQWdCLENBQWhCLENBQTVCO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUdMLEtBQUssQ0FBQ0ksT0FBTixDQUFjLENBQWQsRUFBZ0IsQ0FBaEIsQ0FBekI7QUFHQVIsT0FBRyxDQUFDVSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3JCQyxnQkFBVSxFQUFFTixtQkFBbUIsQ0FBQ08sS0FBcEIsS0FBOEIsWUFEckI7QUFFckJDLGFBQU8sRUFBRU4sZ0JBQWdCLENBQUNLO0FBRkwsS0FBZixDQUFSO0FBS0QsR0FmRCxDQWVDLE9BQU9FLEdBQVAsRUFBVztBQUNWaEIsT0FBRyxDQUFDVSxHQUFKLENBQVFDLElBQUksQ0FBQ0MsU0FBTCxDQUFlO0FBQ3ZCQyxnQkFBVSxFQUFFLEtBRFc7QUFFdkJFLGFBQU8sRUFBRTtBQUZjLEtBQWYsQ0FBUjtBQUlEO0FBR0YsQ0F6QkQsRTs7Ozs7Ozs7Ozs7QUNMQSwrQyIsImZpbGUiOiJwYWdlcy9hcGkvZ2V0LXByb21vLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSByZXF1aXJlKCcuLi8uLi9zc3ItbW9kdWxlLWNhY2hlLmpzJyk7XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdHZhciB0aHJldyA9IHRydWU7XG4gXHRcdHRyeSB7XG4gXHRcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG4gXHRcdFx0dGhyZXcgPSBmYWxzZTtcbiBcdFx0fSBmaW5hbGx5IHtcbiBcdFx0XHRpZih0aHJldykgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuIFx0XHR9XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9wYWdlcy9hcGkvZ2V0LXByb21vLmpzXCIpO1xuIiwiaW1wb3J0IHtHb29nbGVTcHJlYWRzaGVldH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0J1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vLi4vQ3JlZGVudGlhbHMuanNvbidcclxuXHJcbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldCgnMWYzdnRzQkVlMkFhUDBndHp5MndoX094bUd0dTl0MkZZWWJhbnJvOEVlQ28nKVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgYXN5bmMgKHJlcSwgcmVzKSA9PiB7XHJcblxyXG4gIHRyeXtcclxuICAgIGF3YWl0IGRvYy51c2VTZXJ2aWNlQWNjb3VudEF1dGgoY3JlZGVudGlhbHMpXHJcbiAgICBhd2FpdCBkb2MubG9hZEluZm8oKVxyXG4gICAgY29uc3Qgc2hlZXQgPSBkb2Muc2hlZXRzQnlJbmRleFsyXVxyXG4gICAgYXdhaXQgc2hlZXQubG9hZENlbGxzKCdCNDpCNicpXHJcblxyXG4gICAgY29uc3QgbW9zdHJhclByb21vY2FvQ2VsbCA9IHNoZWV0LmdldENlbGwoMywxKVxyXG4gICAgY29uc3QgdGV4dFByb21vY2FvQ2VsbCA9IHNoZWV0LmdldENlbGwoNSwxKVxyXG5cclxuXHJcbiAgICByZXMuZW5kKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgc2hvd0NvdXBvbjogbW9zdHJhclByb21vY2FvQ2VsbC52YWx1ZSA9PT0gJ1ZFUkRBREVJUk8nLFxyXG4gICAgICBtZXNzYWdlOiB0ZXh0UHJvbW9jYW9DZWxsLnZhbHVlXHJcbiAgICB9KSkgXHJcblxyXG4gIH1jYXRjaCAoZXJyKXtcclxuICAgIHJlcy5lbmQoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgc2hvd0NvdXBvbjogZmFsc2UsXHJcbiAgICBtZXNzYWdlOiAnJ1xyXG4gIH0pKVxyXG4gIH1cclxuXHJcbiAgXHJcbn0iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJnb29nbGUtc3ByZWFkc2hlZXRcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==