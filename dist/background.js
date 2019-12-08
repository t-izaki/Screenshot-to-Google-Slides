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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/javascripts/app.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/javascripts/apis.ts":
/*!*********************************!*\
  !*** ./src/javascripts/apis.ts ***!
  \*********************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var oauth_1 = __importDefault(__webpack_require__(/*! ./oauth */ "./src/javascripts/oauth.ts"));
function postRequest(endpoint, headers, body) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            headers.append('Authorization', "Bearer " + oauth_1.default.token);
            return [2 /*return*/, fetch(endpoint, {
                    method: 'POST',
                    headers: headers,
                    body: body
                })];
        });
    });
}
function deleteRequest(endpoint) {
    return __awaiter(this, void 0, void 0, function () {
        var headers;
        return __generator(this, function (_a) {
            headers = new Headers({});
            headers.append('Authorization', "Bearer " + oauth_1.default.token);
            return [2 /*return*/, fetch(endpoint, {
                    method: 'DELETE',
                    headers: headers
                })];
        });
    });
}
var GoogleDriveApi = /** @class */ (function () {
    function GoogleDriveApi() {
    }
    GoogleDriveApi.uploadPngImage = function (file) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, headers;
            return __generator(this, function (_a) {
                endpoint = 'https://www.googleapis.com/upload/drive/v3/files?uploadType=multipart';
                headers = new Headers({
                    'Content-Type': 'image/png'
                });
                return [2 /*return*/, postRequest(endpoint, headers, file)];
            });
        });
    };
    GoogleDriveApi.deleteFile = function (fileId) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint;
            return __generator(this, function (_a) {
                endpoint = "https://www.googleapis.com/drive/v3/files/" + fileId;
                return [2 /*return*/, deleteRequest(endpoint)];
            });
        });
    };
    return GoogleDriveApi;
}());
exports.GoogleDriveApi = GoogleDriveApi;
var GoogleSlideApi = /** @class */ (function () {
    function GoogleSlideApi() {
    }
    GoogleSlideApi.insertBlankSlide = function (presentationId) {
        return __awaiter(this, void 0, void 0, function () {
            var endpoint, headers, body;
            return __generator(this, function (_a) {
                endpoint = "https://slides.googleapis.com/v1/presentations/" + presentationId + ":batchUpdate";
                headers = new Headers({
                    'Content-Type': 'application/json'
                });
                body = {
                    requests: [
                        {
                            createSlide: {
                                slideLayoutReference: {
                                    predefinedLayout: 'BLANK'
                                }
                            }
                        }
                    ]
                };
                return [2 /*return*/, postRequest(endpoint, headers, JSON.stringify(body))];
            });
        });
    };
    GoogleSlideApi.insertImage = function (presentationId, slideId, imageUrl) {
        var endpoint = "https://slides.googleapis.com/v1/presentations/" + presentationId + ":batchUpdate";
        var headers = new Headers({
            'Content-Type': 'application/json'
        });
        var body = {
            requests: [
                {
                    createImage: {
                        elementProperties: {
                            pageObjectId: slideId
                        },
                        url: imageUrl
                    }
                }
            ]
        };
        return postRequest(endpoint, headers, JSON.stringify(body));
    };
    return GoogleSlideApi;
}());
exports.GoogleSlideApi = GoogleSlideApi;


/***/ }),

/***/ "./src/javascripts/app.ts":
/*!********************************!*\
  !*** ./src/javascripts/app.ts ***!
  \********************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var oauth_1 = __importDefault(__webpack_require__(/*! ./oauth */ "./src/javascripts/oauth.ts"));
var screenShot_1 = __importDefault(__webpack_require__(/*! ./screenShot */ "./src/javascripts/screenShot.ts"));
var Util = __importStar(__webpack_require__(/*! ./util */ "./src/javascripts/util.ts"));
var const_1 = __webpack_require__(/*! ./const */ "./src/javascripts/const.ts");
function captureScreenShotAndInsertToSlides(presentationUrl) {
    return __awaiter(this, void 0, void 0, function () {
        var screenShot;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    Util.sendDisplayStatusMessage({ message: 'Check Slide', status: 'inProgress' });
                    return [4 /*yield*/, oauth_1.default.auth()];
                case 1:
                    _a.sent();
                    Util.sendDisplayStatusMessage({ message: 'Take Screenshot', status: 'inProgress' });
                    screenShot = new screenShot_1.default();
                    return [4 /*yield*/, screenShot.capture()];
                case 2:
                    _a.sent();
                    Util.sendDisplayStatusMessage({ message: 'Add to Slide', status: 'inProgress' });
                    return [4 /*yield*/, screenShot.addToSlide(presentationUrl)];
                case 3:
                    _a.sent();
                    Util.sendDisplayStatusMessage({ message: 'SUCCESS', status: 'success' });
                    return [2 /*return*/];
            }
        });
    });
}
chrome.runtime.onMessage.addListener(function (request, _sender, sendResponse) {
    if (request.action === const_1.ChromeExtentionMessageAction.RUN_BACKGROUND_SCRIPT) {
        captureScreenShotAndInsertToSlides(request.presentationUrl)
            .then(function () {
            sendResponse({ ok: true });
        })
            .catch(function (error) {
            Util.sendDisplayStatusMessage({ message: error.message, status: 'error' });
            sendResponse({ ok: false });
        });
    }
    return true;
});


/***/ }),

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

/***/ "./src/javascripts/googleDriveFile.ts":
/*!********************************************!*\
  !*** ./src/javascripts/googleDriveFile.ts ***!
  \********************************************/
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apis_1 = __webpack_require__(/*! ./apis */ "./src/javascripts/apis.ts");
var oauth_1 = __importDefault(__webpack_require__(/*! ./oauth */ "./src/javascripts/oauth.ts"));
var const_1 = __webpack_require__(/*! ./const */ "./src/javascripts/const.ts");
var GoogleDriveFile = /** @class */ (function () {
    function GoogleDriveFile(file) {
        this.id = null;
        this.url = null;
        this.file = file;
    }
    GoogleDriveFile.prototype.upload = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, id;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apis_1.GoogleDriveApi.uploadPngImage(this.file)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        id = (_a.sent()).id;
                        this.id = id;
                        this.url = "https://www.googleapis.com/drive/v3/files/" + id + "/?alt=media&access_token=" + oauth_1.default.token;
                        return [3 /*break*/, 4];
                    case 3: throw new Error(const_1.ErrorMessage.UploadFail);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleDriveFile.prototype.delete = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.id == null) {
                            throw new Error(const_1.ErrorMessage.DeleteFileIdNotFound);
                        }
                        return [4 /*yield*/, apis_1.GoogleDriveApi.deleteFile(this.id)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error(const_1.ErrorMessage.DeleteFileFail);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return GoogleDriveFile;
}());
exports.default = GoogleDriveFile;


/***/ }),

/***/ "./src/javascripts/googleSlidePresentation.ts":
/*!****************************************************!*\
  !*** ./src/javascripts/googleSlidePresentation.ts ***!
  \****************************************************/
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
Object.defineProperty(exports, "__esModule", { value: true });
var apis_1 = __webpack_require__(/*! ./apis */ "./src/javascripts/apis.ts");
var const_1 = __webpack_require__(/*! ./const */ "./src/javascripts/const.ts");
var GoogleSlideFile = /** @class */ (function () {
    function GoogleSlideFile(presentationUrl) {
        this.targetSlideId = null;
        // eslint-disable-next-line prefer-destructuring
        this.presentationId = presentationUrl.split('/')[5];
    }
    GoogleSlideFile.prototype.insertBlankSlide = function () {
        return __awaiter(this, void 0, void 0, function () {
            var response, responseBody;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, apis_1.GoogleSlideApi.insertBlankSlide(this.presentationId)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) return [3 /*break*/, 3];
                        return [4 /*yield*/, response.json()];
                    case 2:
                        responseBody = _a.sent();
                        this.targetSlideId = responseBody.replies[0].createSlide.objectId;
                        return [3 /*break*/, 4];
                    case 3: throw new Error(const_1.ErrorMessage.InsertBlankSlideFail);
                    case 4: return [2 /*return*/];
                }
            });
        });
    };
    GoogleSlideFile.prototype.insertImage = function (url) {
        return __awaiter(this, void 0, void 0, function () {
            var response;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.targetSlideId == null || url == null) {
                            throw new Error(const_1.ErrorMessage.ScreenshotUrlNotFound);
                        }
                        return [4 /*yield*/, apis_1.GoogleSlideApi.insertImage(this.presentationId, this.targetSlideId, url)];
                    case 1:
                        response = _a.sent();
                        if (!response.ok) {
                            throw new Error(const_1.ErrorMessage.InsertImageFail);
                        }
                        return [2 /*return*/];
                }
            });
        });
    };
    return GoogleSlideFile;
}());
exports.default = GoogleSlideFile;


/***/ }),

/***/ "./src/javascripts/oauth.ts":
/*!**********************************!*\
  !*** ./src/javascripts/oauth.ts ***!
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
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/javascripts/const.ts");
var Oauth = /** @class */ (function () {
    function Oauth() {
    }
    Oauth.auth = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                return [2 /*return*/, new Promise(function (resolve, reject) {
                        chrome.identity.getAuthToken({
                            interactive: true
                        }, function (token) {
                            if (token) {
                                Oauth.token = token;
                                resolve();
                            }
                            else {
                                reject(new Error(const_1.ErrorMessage.GoogleAuthFail));
                            }
                        });
                    })];
            });
        });
    };
    return Oauth;
}());
exports.default = Oauth;


/***/ }),

/***/ "./src/javascripts/screenShot.ts":
/*!***************************************!*\
  !*** ./src/javascripts/screenShot.ts ***!
  \***************************************/
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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var Util = __importStar(__webpack_require__(/*! ./util */ "./src/javascripts/util.ts"));
var googleDriveFile_1 = __importDefault(__webpack_require__(/*! ./googleDriveFile */ "./src/javascripts/googleDriveFile.ts"));
var googleSlidePresentation_1 = __importDefault(__webpack_require__(/*! ./googleSlidePresentation */ "./src/javascripts/googleSlidePresentation.ts"));
var const_1 = __webpack_require__(/*! ./const */ "./src/javascripts/const.ts");
var ScreenShot = /** @class */ (function () {
    function ScreenShot() {
        this.file = null;
        this.base64 = null;
    }
    ScreenShot.prototype.capture = function () {
        var _this = this;
        return new Promise(function (resolve) {
            chrome.tabs.captureVisibleTab(chrome.windows.WINDOW_ID_CURRENT, { format: 'png' }, function (dataUrl) {
                _this.base64 = dataUrl;
                resolve();
            });
        });
    };
    ScreenShot.prototype.addToSlide = function (presentationId) {
        return __awaiter(this, void 0, void 0, function () {
            var slide;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (this.base64 == null) {
                            throw new Error(const_1.ErrorMessage.Base64NotFound);
                        }
                        slide = new googleSlidePresentation_1.default(presentationId);
                        return [4 /*yield*/, slide.insertBlankSlide()];
                    case 1:
                        _a.sent();
                        _a.label = 2;
                    case 2:
                        _a.trys.push([2, , 5, 8]);
                        this.file = new googleDriveFile_1.default(Util.base64ToBlob(this.base64));
                        return [4 /*yield*/, this.file.upload()];
                    case 3:
                        _a.sent();
                        return [4 /*yield*/, slide.insertImage(this.file.url)];
                    case 4:
                        _a.sent();
                        return [3 /*break*/, 8];
                    case 5:
                        if (!this.file) return [3 /*break*/, 7];
                        return [4 /*yield*/, this.file.delete()];
                    case 6:
                        _a.sent();
                        _a.label = 7;
                    case 7: return [7 /*endfinally*/];
                    case 8: return [2 /*return*/];
                }
            });
        });
    };
    return ScreenShot;
}());
exports.default = ScreenShot;


/***/ }),

/***/ "./src/javascripts/util.ts":
/*!*********************************!*\
  !*** ./src/javascripts/util.ts ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

/* eslint-disable import/prefer-default-export */
Object.defineProperty(exports, "__esModule", { value: true });
var const_1 = __webpack_require__(/*! ./const */ "./src/javascripts/const.ts");
function base64ToBlob(base64Str) {
    var bin = atob(base64Str.replace(/^.*,/, ''));
    var buffer = new Uint8Array(bin.length);
    for (var i = 0; i < bin.length; i += 1) {
        buffer[i] = bin.charCodeAt(i);
    }
    return new Blob([buffer.buffer], { type: 'image/png' });
}
exports.base64ToBlob = base64ToBlob;
function sendDisplayStatusMessage(displayStatus) {
    chrome.runtime.sendMessage({
        action: const_1.ChromeExtentionMessageAction.UPDATE_DISPLAY_STATUS,
        displayStatus: displayStatus
    });
}
exports.sendDisplayStatusMessage = sendDisplayStatusMessage;


/***/ })

/******/ });
//# sourceMappingURL=background.js.map