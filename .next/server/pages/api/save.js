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
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/api/save.js");
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

/***/ "./pages/api/save.js":
/*!***************************!*\
  !*** ./pages/api/save.js ***!
  \***************************/
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
    const sheet = doc.sheetsByIndex[1];
    const data = JSON.parse(req.body);
    await sheet.addRow({
      Nome: data.Nome,
      Email: data.Email,
      Whatsapp: data.Whatsapp,
      Cupom: 'abc123',
      Promo: 'asdfqwert'
    });
    res.end(req.body);
  } catch (err) {
    console.log(err);
    res.end('error');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvYXBpL3NhdmUuanMiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ29vZ2xlLXNwcmVhZHNoZWV0XCIiXSwibmFtZXMiOlsiZG9jIiwiR29vZ2xlU3ByZWFkc2hlZXQiLCJyZXEiLCJyZXMiLCJ1c2VTZXJ2aWNlQWNjb3VudEF1dGgiLCJjcmVkZW50aWFscyIsImxvYWRJbmZvIiwic2hlZXQiLCJzaGVldHNCeUluZGV4IiwiZGF0YSIsIkpTT04iLCJwYXJzZSIsImJvZHkiLCJhZGRSb3ciLCJOb21lIiwiRW1haWwiLCJXaGF0c2FwcCIsIkN1cG9tIiwiUHJvbW8iLCJlbmQiLCJlcnIiLCJjb25zb2xlIiwibG9nIl0sIm1hcHBpbmdzIjoiOztRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EsSUFBSTtRQUNKO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN4RkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFFQSxNQUFNQSxHQUFHLEdBQUcsSUFBSUMsb0VBQUosQ0FBc0IsOENBQXRCLENBQVo7QUFHZSxzRUFBT0MsR0FBUCxFQUFZQyxHQUFaLEtBQW9CO0FBRWpDLE1BQUc7QUFDRCxVQUFNSCxHQUFHLENBQUNJLHFCQUFKLENBQTBCQyw4Q0FBMUIsQ0FBTjtBQUNBLFVBQU1MLEdBQUcsQ0FBQ00sUUFBSixFQUFOO0FBQ0EsVUFBTUMsS0FBSyxHQUFHUCxHQUFHLENBQUNRLGFBQUosQ0FBa0IsQ0FBbEIsQ0FBZDtBQUNBLFVBQU1DLElBQUksR0FBR0MsSUFBSSxDQUFDQyxLQUFMLENBQVdULEdBQUcsQ0FBQ1UsSUFBZixDQUFiO0FBQ0EsVUFBTUwsS0FBSyxDQUFDTSxNQUFOLENBQWE7QUFDakJDLFVBQUksRUFBRUwsSUFBSSxDQUFDSyxJQURNO0FBRWpCQyxXQUFLLEVBQUVOLElBQUksQ0FBQ00sS0FGSztBQUdqQkMsY0FBUSxFQUFFUCxJQUFJLENBQUNPLFFBSEU7QUFJakJDLFdBQUssRUFBRSxRQUpVO0FBS2pCQyxXQUFLLEVBQUU7QUFMVSxLQUFiLENBQU47QUFPQWYsT0FBRyxDQUFDZ0IsR0FBSixDQUFRakIsR0FBRyxDQUFDVSxJQUFaO0FBQ0QsR0FiRCxDQWFDLE9BQU9RLEdBQVAsRUFBVztBQUNWQyxXQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWjtBQUNBakIsT0FBRyxDQUFDZ0IsR0FBSixDQUFRLE9BQVI7QUFDRDtBQUVGLENBcEJELEU7Ozs7Ozs7Ozs7O0FDTkEsK0MiLCJmaWxlIjoicGFnZXMvYXBpL3NhdmUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uLy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2FwaS9zYXZlLmpzXCIpO1xuIiwiaW1wb3J0IHtHb29nbGVTcHJlYWRzaGVldH0gZnJvbSAnZ29vZ2xlLXNwcmVhZHNoZWV0J1xyXG5pbXBvcnQgY3JlZGVudGlhbHMgZnJvbSAnLi4vLi4vQ3JlZGVudGlhbHMuanNvbidcclxuXHJcbmNvbnN0IGRvYyA9IG5ldyBHb29nbGVTcHJlYWRzaGVldCgnMWYzdnRzQkVlMkFhUDBndHp5MndoX094bUd0dTl0MkZZWWJhbnJvOEVlQ28nKVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGFzeW5jIChyZXEsIHJlcykgPT4ge1xyXG5cclxuICB0cnl7XHJcbiAgICBhd2FpdCBkb2MudXNlU2VydmljZUFjY291bnRBdXRoKGNyZWRlbnRpYWxzKVxyXG4gICAgYXdhaXQgZG9jLmxvYWRJbmZvKClcclxuICAgIGNvbnN0IHNoZWV0ID0gZG9jLnNoZWV0c0J5SW5kZXhbMV1cclxuICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKHJlcS5ib2R5KVxyXG4gICAgYXdhaXQgc2hlZXQuYWRkUm93KHtcclxuICAgICAgTm9tZTogZGF0YS5Ob21lLFxyXG4gICAgICBFbWFpbDogZGF0YS5FbWFpbCxcclxuICAgICAgV2hhdHNhcHA6IGRhdGEuV2hhdHNhcHAsXHJcbiAgICAgIEN1cG9tOiAnYWJjMTIzJyxcclxuICAgICAgUHJvbW86ICdhc2RmcXdlcnQnXHJcbiAgICB9KVxyXG4gICAgcmVzLmVuZChyZXEuYm9keSlcclxuICB9Y2F0Y2ggKGVycil7XHJcbiAgICBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICByZXMuZW5kKCdlcnJvcicpXHJcbiAgfVxyXG5cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdvb2dsZS1zcHJlYWRzaGVldFwiKTsiXSwic291cmNlUm9vdCI6IiJ9