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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/popup.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/const.ts":
/*!**********************************!*\
  !*** ./src/javascripts/const.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/prefer-default-export */
Object.defineProperty(exports, "__esModule", { value: true });
exports.ErrorMessage = {
    InsertBlankSlideFail: 'Insert Slide Fail: Check Google Slide URL!',
    ScreenshotUrlNotFound: 'Screenshot Url Not Found',
    InsertImageFail: 'Insert Image Fail: Check Google Slide URL!',
    Base64NotFound: 'Screenshot Data Not Found',
    GoogleAuthFail: 'Google Auth Fail',
    UploadFail: 'Upload Fail',
    DeleteFileIdNotFound: 'Delete File Id Not Found',
    DeleteFileFail: 'Delete File Fail'
};
exports.ChromeExtentionMessageAction = {
    UPDATE_DISPLAY_STATUS: 'UPDATE_DISPLAY_STATUS',
    RUN_BACKGROUND_SCRIPT: 'RUN_BACKGROUND_SCRIPT'
};


/***/ }),

/***/ "./src/javascripts/popup.ts":
/*!**********************************!*\
  !*** ./src/javascripts/popup.ts ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/javascripts/const.ts");
function updateDisplayStatus(info) {
    var statusMessageElement = document.getElementById('js-statusMessage');
    var statusIconElement = document.getElementById('js-statusIcon');
    if (!statusMessageElement || !statusIconElement) {
        return false;
    }
    var className;
    switch (info.status) {
        case 'inProgress':
            className = 'fas fa-spinner fa-pulse statusIcon statusIcon__inProgress';
            break;
        case 'success':
            className = 'fas fa-check statusIcon statusIcon__success';
            break;
        case 'error':
            className = 'fas fa-times statusIcon statusIcon__error';
            break;
        default:
            className = '';
    }
    statusMessageElement.textContent = info.message;
    statusIconElement.className = className;
    return true;
}
function getPresentationUrl() {
    return new Promise(function (resolve) {
        chrome.storage.sync.get(function (result) {
            resolve(result.googleSlideUrl || '');
        });
    });
}
function setPresentationUrl(url) {
    return new Promise(function (resolve) {
        chrome.storage.sync.set({ googleSlideUrl: url }, function () {
            resolve();
        });
    });
}
function handleChangeInputValue(event) {
    return __awaiter(this, void 0, void 0, function () {
        var inputValue;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    inputValue = event.target.value;
                    return [4 /*yield*/, setPresentationUrl(inputValue)];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function handleClickSubmit(inputValue) {
    chrome.runtime.sendMessage({
        action: const_1.ChromeExtentionMessageAction.RUN_BACKGROUND_SCRIPT,
        presentationUrl: inputValue
    });
}
;
(function () { return __awaiter(_this, void 0, void 0, function () {
    var button, input, _a;
    var _this = this;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                chrome.runtime.onMessage.addListener(function (request, _sender, sendResponse) {
                    if (request.action === const_1.ChromeExtentionMessageAction.UPDATE_DISPLAY_STATUS) {
                        sendResponse({ ok: updateDisplayStatus(request.displayStatus) });
                    }
                });
                button = document.getElementById('js-capture');
                input = document.getElementById('js-presentationUrl');
                _a = input;
                return [4 /*yield*/, getPresentationUrl()];
            case 1:
                _a.value = _b.sent();
                input.onchange = function (event) { return __awaiter(_this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        switch (_a.label) {
                            case 0: return [4 /*yield*/, handleChangeInputValue(event)];
                            case 1:
                                _a.sent();
                                return [2 /*return*/];
                        }
                    });
                }); };
                button.onclick = function (_e) {
                    handleClickSubmit(input.value);
                };
                return [2 /*return*/];
        }
    });
}); })();


/***/ })

/******/ });
//# sourceMappingURL=popup.js.map