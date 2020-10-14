function _createSuper(Derived) { return function () { var Super = _getPrototypeOf(Derived), result; if (_isNativeReflectConstruct()) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/moment/locale sync recursive ^\\.\\/.*$":
  /*!**************************************************!*\
    !*** ./node_modules/moment/locale sync ^\.\/.*$ ***!
    \**************************************************/

  /*! no static exports found */

  /***/
  function node_modulesMomentLocaleSyncRecursive$(module, exports, __webpack_require__) {
    var map = {
      "./af": "./node_modules/moment/locale/af.js",
      "./af.js": "./node_modules/moment/locale/af.js",
      "./ar": "./node_modules/moment/locale/ar.js",
      "./ar-dz": "./node_modules/moment/locale/ar-dz.js",
      "./ar-dz.js": "./node_modules/moment/locale/ar-dz.js",
      "./ar-kw": "./node_modules/moment/locale/ar-kw.js",
      "./ar-kw.js": "./node_modules/moment/locale/ar-kw.js",
      "./ar-ly": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ly.js": "./node_modules/moment/locale/ar-ly.js",
      "./ar-ma": "./node_modules/moment/locale/ar-ma.js",
      "./ar-ma.js": "./node_modules/moment/locale/ar-ma.js",
      "./ar-sa": "./node_modules/moment/locale/ar-sa.js",
      "./ar-sa.js": "./node_modules/moment/locale/ar-sa.js",
      "./ar-tn": "./node_modules/moment/locale/ar-tn.js",
      "./ar-tn.js": "./node_modules/moment/locale/ar-tn.js",
      "./ar.js": "./node_modules/moment/locale/ar.js",
      "./az": "./node_modules/moment/locale/az.js",
      "./az.js": "./node_modules/moment/locale/az.js",
      "./be": "./node_modules/moment/locale/be.js",
      "./be.js": "./node_modules/moment/locale/be.js",
      "./bg": "./node_modules/moment/locale/bg.js",
      "./bg.js": "./node_modules/moment/locale/bg.js",
      "./bm": "./node_modules/moment/locale/bm.js",
      "./bm.js": "./node_modules/moment/locale/bm.js",
      "./bn": "./node_modules/moment/locale/bn.js",
      "./bn.js": "./node_modules/moment/locale/bn.js",
      "./bo": "./node_modules/moment/locale/bo.js",
      "./bo.js": "./node_modules/moment/locale/bo.js",
      "./br": "./node_modules/moment/locale/br.js",
      "./br.js": "./node_modules/moment/locale/br.js",
      "./bs": "./node_modules/moment/locale/bs.js",
      "./bs.js": "./node_modules/moment/locale/bs.js",
      "./ca": "./node_modules/moment/locale/ca.js",
      "./ca.js": "./node_modules/moment/locale/ca.js",
      "./cs": "./node_modules/moment/locale/cs.js",
      "./cs.js": "./node_modules/moment/locale/cs.js",
      "./cv": "./node_modules/moment/locale/cv.js",
      "./cv.js": "./node_modules/moment/locale/cv.js",
      "./cy": "./node_modules/moment/locale/cy.js",
      "./cy.js": "./node_modules/moment/locale/cy.js",
      "./da": "./node_modules/moment/locale/da.js",
      "./da.js": "./node_modules/moment/locale/da.js",
      "./de": "./node_modules/moment/locale/de.js",
      "./de-at": "./node_modules/moment/locale/de-at.js",
      "./de-at.js": "./node_modules/moment/locale/de-at.js",
      "./de-ch": "./node_modules/moment/locale/de-ch.js",
      "./de-ch.js": "./node_modules/moment/locale/de-ch.js",
      "./de.js": "./node_modules/moment/locale/de.js",
      "./dv": "./node_modules/moment/locale/dv.js",
      "./dv.js": "./node_modules/moment/locale/dv.js",
      "./el": "./node_modules/moment/locale/el.js",
      "./el.js": "./node_modules/moment/locale/el.js",
      "./en-au": "./node_modules/moment/locale/en-au.js",
      "./en-au.js": "./node_modules/moment/locale/en-au.js",
      "./en-ca": "./node_modules/moment/locale/en-ca.js",
      "./en-ca.js": "./node_modules/moment/locale/en-ca.js",
      "./en-gb": "./node_modules/moment/locale/en-gb.js",
      "./en-gb.js": "./node_modules/moment/locale/en-gb.js",
      "./en-ie": "./node_modules/moment/locale/en-ie.js",
      "./en-ie.js": "./node_modules/moment/locale/en-ie.js",
      "./en-il": "./node_modules/moment/locale/en-il.js",
      "./en-il.js": "./node_modules/moment/locale/en-il.js",
      "./en-in": "./node_modules/moment/locale/en-in.js",
      "./en-in.js": "./node_modules/moment/locale/en-in.js",
      "./en-nz": "./node_modules/moment/locale/en-nz.js",
      "./en-nz.js": "./node_modules/moment/locale/en-nz.js",
      "./en-sg": "./node_modules/moment/locale/en-sg.js",
      "./en-sg.js": "./node_modules/moment/locale/en-sg.js",
      "./eo": "./node_modules/moment/locale/eo.js",
      "./eo.js": "./node_modules/moment/locale/eo.js",
      "./es": "./node_modules/moment/locale/es.js",
      "./es-do": "./node_modules/moment/locale/es-do.js",
      "./es-do.js": "./node_modules/moment/locale/es-do.js",
      "./es-us": "./node_modules/moment/locale/es-us.js",
      "./es-us.js": "./node_modules/moment/locale/es-us.js",
      "./es.js": "./node_modules/moment/locale/es.js",
      "./et": "./node_modules/moment/locale/et.js",
      "./et.js": "./node_modules/moment/locale/et.js",
      "./eu": "./node_modules/moment/locale/eu.js",
      "./eu.js": "./node_modules/moment/locale/eu.js",
      "./fa": "./node_modules/moment/locale/fa.js",
      "./fa.js": "./node_modules/moment/locale/fa.js",
      "./fi": "./node_modules/moment/locale/fi.js",
      "./fi.js": "./node_modules/moment/locale/fi.js",
      "./fil": "./node_modules/moment/locale/fil.js",
      "./fil.js": "./node_modules/moment/locale/fil.js",
      "./fo": "./node_modules/moment/locale/fo.js",
      "./fo.js": "./node_modules/moment/locale/fo.js",
      "./fr": "./node_modules/moment/locale/fr.js",
      "./fr-ca": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ca.js": "./node_modules/moment/locale/fr-ca.js",
      "./fr-ch": "./node_modules/moment/locale/fr-ch.js",
      "./fr-ch.js": "./node_modules/moment/locale/fr-ch.js",
      "./fr.js": "./node_modules/moment/locale/fr.js",
      "./fy": "./node_modules/moment/locale/fy.js",
      "./fy.js": "./node_modules/moment/locale/fy.js",
      "./ga": "./node_modules/moment/locale/ga.js",
      "./ga.js": "./node_modules/moment/locale/ga.js",
      "./gd": "./node_modules/moment/locale/gd.js",
      "./gd.js": "./node_modules/moment/locale/gd.js",
      "./gl": "./node_modules/moment/locale/gl.js",
      "./gl.js": "./node_modules/moment/locale/gl.js",
      "./gom-deva": "./node_modules/moment/locale/gom-deva.js",
      "./gom-deva.js": "./node_modules/moment/locale/gom-deva.js",
      "./gom-latn": "./node_modules/moment/locale/gom-latn.js",
      "./gom-latn.js": "./node_modules/moment/locale/gom-latn.js",
      "./gu": "./node_modules/moment/locale/gu.js",
      "./gu.js": "./node_modules/moment/locale/gu.js",
      "./he": "./node_modules/moment/locale/he.js",
      "./he.js": "./node_modules/moment/locale/he.js",
      "./hi": "./node_modules/moment/locale/hi.js",
      "./hi.js": "./node_modules/moment/locale/hi.js",
      "./hr": "./node_modules/moment/locale/hr.js",
      "./hr.js": "./node_modules/moment/locale/hr.js",
      "./hu": "./node_modules/moment/locale/hu.js",
      "./hu.js": "./node_modules/moment/locale/hu.js",
      "./hy-am": "./node_modules/moment/locale/hy-am.js",
      "./hy-am.js": "./node_modules/moment/locale/hy-am.js",
      "./id": "./node_modules/moment/locale/id.js",
      "./id.js": "./node_modules/moment/locale/id.js",
      "./is": "./node_modules/moment/locale/is.js",
      "./is.js": "./node_modules/moment/locale/is.js",
      "./it": "./node_modules/moment/locale/it.js",
      "./it-ch": "./node_modules/moment/locale/it-ch.js",
      "./it-ch.js": "./node_modules/moment/locale/it-ch.js",
      "./it.js": "./node_modules/moment/locale/it.js",
      "./ja": "./node_modules/moment/locale/ja.js",
      "./ja.js": "./node_modules/moment/locale/ja.js",
      "./jv": "./node_modules/moment/locale/jv.js",
      "./jv.js": "./node_modules/moment/locale/jv.js",
      "./ka": "./node_modules/moment/locale/ka.js",
      "./ka.js": "./node_modules/moment/locale/ka.js",
      "./kk": "./node_modules/moment/locale/kk.js",
      "./kk.js": "./node_modules/moment/locale/kk.js",
      "./km": "./node_modules/moment/locale/km.js",
      "./km.js": "./node_modules/moment/locale/km.js",
      "./kn": "./node_modules/moment/locale/kn.js",
      "./kn.js": "./node_modules/moment/locale/kn.js",
      "./ko": "./node_modules/moment/locale/ko.js",
      "./ko.js": "./node_modules/moment/locale/ko.js",
      "./ku": "./node_modules/moment/locale/ku.js",
      "./ku.js": "./node_modules/moment/locale/ku.js",
      "./ky": "./node_modules/moment/locale/ky.js",
      "./ky.js": "./node_modules/moment/locale/ky.js",
      "./lb": "./node_modules/moment/locale/lb.js",
      "./lb.js": "./node_modules/moment/locale/lb.js",
      "./lo": "./node_modules/moment/locale/lo.js",
      "./lo.js": "./node_modules/moment/locale/lo.js",
      "./lt": "./node_modules/moment/locale/lt.js",
      "./lt.js": "./node_modules/moment/locale/lt.js",
      "./lv": "./node_modules/moment/locale/lv.js",
      "./lv.js": "./node_modules/moment/locale/lv.js",
      "./me": "./node_modules/moment/locale/me.js",
      "./me.js": "./node_modules/moment/locale/me.js",
      "./mi": "./node_modules/moment/locale/mi.js",
      "./mi.js": "./node_modules/moment/locale/mi.js",
      "./mk": "./node_modules/moment/locale/mk.js",
      "./mk.js": "./node_modules/moment/locale/mk.js",
      "./ml": "./node_modules/moment/locale/ml.js",
      "./ml.js": "./node_modules/moment/locale/ml.js",
      "./mn": "./node_modules/moment/locale/mn.js",
      "./mn.js": "./node_modules/moment/locale/mn.js",
      "./mr": "./node_modules/moment/locale/mr.js",
      "./mr.js": "./node_modules/moment/locale/mr.js",
      "./ms": "./node_modules/moment/locale/ms.js",
      "./ms-my": "./node_modules/moment/locale/ms-my.js",
      "./ms-my.js": "./node_modules/moment/locale/ms-my.js",
      "./ms.js": "./node_modules/moment/locale/ms.js",
      "./mt": "./node_modules/moment/locale/mt.js",
      "./mt.js": "./node_modules/moment/locale/mt.js",
      "./my": "./node_modules/moment/locale/my.js",
      "./my.js": "./node_modules/moment/locale/my.js",
      "./nb": "./node_modules/moment/locale/nb.js",
      "./nb.js": "./node_modules/moment/locale/nb.js",
      "./ne": "./node_modules/moment/locale/ne.js",
      "./ne.js": "./node_modules/moment/locale/ne.js",
      "./nl": "./node_modules/moment/locale/nl.js",
      "./nl-be": "./node_modules/moment/locale/nl-be.js",
      "./nl-be.js": "./node_modules/moment/locale/nl-be.js",
      "./nl.js": "./node_modules/moment/locale/nl.js",
      "./nn": "./node_modules/moment/locale/nn.js",
      "./nn.js": "./node_modules/moment/locale/nn.js",
      "./oc-lnc": "./node_modules/moment/locale/oc-lnc.js",
      "./oc-lnc.js": "./node_modules/moment/locale/oc-lnc.js",
      "./pa-in": "./node_modules/moment/locale/pa-in.js",
      "./pa-in.js": "./node_modules/moment/locale/pa-in.js",
      "./pl": "./node_modules/moment/locale/pl.js",
      "./pl.js": "./node_modules/moment/locale/pl.js",
      "./pt": "./node_modules/moment/locale/pt.js",
      "./pt-br": "./node_modules/moment/locale/pt-br.js",
      "./pt-br.js": "./node_modules/moment/locale/pt-br.js",
      "./pt.js": "./node_modules/moment/locale/pt.js",
      "./ro": "./node_modules/moment/locale/ro.js",
      "./ro.js": "./node_modules/moment/locale/ro.js",
      "./ru": "./node_modules/moment/locale/ru.js",
      "./ru.js": "./node_modules/moment/locale/ru.js",
      "./sd": "./node_modules/moment/locale/sd.js",
      "./sd.js": "./node_modules/moment/locale/sd.js",
      "./se": "./node_modules/moment/locale/se.js",
      "./se.js": "./node_modules/moment/locale/se.js",
      "./si": "./node_modules/moment/locale/si.js",
      "./si.js": "./node_modules/moment/locale/si.js",
      "./sk": "./node_modules/moment/locale/sk.js",
      "./sk.js": "./node_modules/moment/locale/sk.js",
      "./sl": "./node_modules/moment/locale/sl.js",
      "./sl.js": "./node_modules/moment/locale/sl.js",
      "./sq": "./node_modules/moment/locale/sq.js",
      "./sq.js": "./node_modules/moment/locale/sq.js",
      "./sr": "./node_modules/moment/locale/sr.js",
      "./sr-cyrl": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr-cyrl.js": "./node_modules/moment/locale/sr-cyrl.js",
      "./sr.js": "./node_modules/moment/locale/sr.js",
      "./ss": "./node_modules/moment/locale/ss.js",
      "./ss.js": "./node_modules/moment/locale/ss.js",
      "./sv": "./node_modules/moment/locale/sv.js",
      "./sv.js": "./node_modules/moment/locale/sv.js",
      "./sw": "./node_modules/moment/locale/sw.js",
      "./sw.js": "./node_modules/moment/locale/sw.js",
      "./ta": "./node_modules/moment/locale/ta.js",
      "./ta.js": "./node_modules/moment/locale/ta.js",
      "./te": "./node_modules/moment/locale/te.js",
      "./te.js": "./node_modules/moment/locale/te.js",
      "./tet": "./node_modules/moment/locale/tet.js",
      "./tet.js": "./node_modules/moment/locale/tet.js",
      "./tg": "./node_modules/moment/locale/tg.js",
      "./tg.js": "./node_modules/moment/locale/tg.js",
      "./th": "./node_modules/moment/locale/th.js",
      "./th.js": "./node_modules/moment/locale/th.js",
      "./tl-ph": "./node_modules/moment/locale/tl-ph.js",
      "./tl-ph.js": "./node_modules/moment/locale/tl-ph.js",
      "./tlh": "./node_modules/moment/locale/tlh.js",
      "./tlh.js": "./node_modules/moment/locale/tlh.js",
      "./tr": "./node_modules/moment/locale/tr.js",
      "./tr.js": "./node_modules/moment/locale/tr.js",
      "./tzl": "./node_modules/moment/locale/tzl.js",
      "./tzl.js": "./node_modules/moment/locale/tzl.js",
      "./tzm": "./node_modules/moment/locale/tzm.js",
      "./tzm-latn": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm-latn.js": "./node_modules/moment/locale/tzm-latn.js",
      "./tzm.js": "./node_modules/moment/locale/tzm.js",
      "./ug-cn": "./node_modules/moment/locale/ug-cn.js",
      "./ug-cn.js": "./node_modules/moment/locale/ug-cn.js",
      "./uk": "./node_modules/moment/locale/uk.js",
      "./uk.js": "./node_modules/moment/locale/uk.js",
      "./ur": "./node_modules/moment/locale/ur.js",
      "./ur.js": "./node_modules/moment/locale/ur.js",
      "./uz": "./node_modules/moment/locale/uz.js",
      "./uz-latn": "./node_modules/moment/locale/uz-latn.js",
      "./uz-latn.js": "./node_modules/moment/locale/uz-latn.js",
      "./uz.js": "./node_modules/moment/locale/uz.js",
      "./vi": "./node_modules/moment/locale/vi.js",
      "./vi.js": "./node_modules/moment/locale/vi.js",
      "./x-pseudo": "./node_modules/moment/locale/x-pseudo.js",
      "./x-pseudo.js": "./node_modules/moment/locale/x-pseudo.js",
      "./yo": "./node_modules/moment/locale/yo.js",
      "./yo.js": "./node_modules/moment/locale/yo.js",
      "./zh-cn": "./node_modules/moment/locale/zh-cn.js",
      "./zh-cn.js": "./node_modules/moment/locale/zh-cn.js",
      "./zh-hk": "./node_modules/moment/locale/zh-hk.js",
      "./zh-hk.js": "./node_modules/moment/locale/zh-hk.js",
      "./zh-mo": "./node_modules/moment/locale/zh-mo.js",
      "./zh-mo.js": "./node_modules/moment/locale/zh-mo.js",
      "./zh-tw": "./node_modules/moment/locale/zh-tw.js",
      "./zh-tw.js": "./node_modules/moment/locale/zh-tw.js"
    };

    function webpackContext(req) {
      var id = webpackContextResolve(req);
      return __webpack_require__(id);
    }

    function webpackContextResolve(req) {
      if (!__webpack_require__.o(map, req)) {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      }

      return map[req];
    }

    webpackContext.keys = function webpackContextKeys() {
      return Object.keys(map);
    };

    webpackContext.resolve = webpackContextResolve;
    module.exports = webpackContext;
    webpackContext.id = "./node_modules/moment/locale sync recursive ^\\.\\/.*$";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAboutusAboutusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- LAYOUT-1 -->\r\n<div class=\"section-padding about-section\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10 m-2\">\r\n                <div class=\"section_title\">\r\n                    <div class=\"section_subtitle\">About Us</div>\r\n                    <h2 class=\"section_main_title\"><strong>WHO WE ARE</strong></h2>\r\n                    <hr class=\"divider mx-0\">\r\n                </div>\r\n                <div class=\"about-item\">\r\n                    <p class=\"text-justify text-wrap\">\r\n                        With a sole aim of helping people in dire need of blood, we provide a 24x7 blood helpline\r\n                        solution.\r\n                        The idea is to provide a secure social interaction platform for communication between donors and\r\n                        patients.As most of the times the emergency requirement message will be continuously forwaded\r\n                        without any huge responses.\r\n                    </p>\r\n                    <p class=\"text-justify text-wrap\">\r\n                        This application is designed to reduce the time and efforts taken by any individual to search\r\n                        for donors and their contact details.This application is designed in simple terms but with artistic features.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n            <div class=\"about-box\">\r\n                <div class=\"box-overlay\">\r\n                    <img src=\"/assets/images/about_us.jpg\" width=\"50%\" class=\"shadow m-4 float-right\"\r\n                        alt=\"about-us-image\">\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- LAYOUT-2-->\r\n<div class=\"section-padding about-section\">\r\n    <div class=\"container-fluid\">\r\n        <div class=\"row\">\r\n            <div class=\"col-sm-10 m-2\">\r\n                <div class=\"section_title\">\r\n                    <h2 class=\"section_main_title\"><strong>WHAT WE DO</strong></h2>\r\n                    <hr class=\"divider mx-0\">\r\n                </div>\r\n                <div class=\"about-item\">\r\n                    <p class=\"text-justify text-wrap\">\r\n                        <b>A</b>utomata <b>N</b>aive <b>I</b>mplementation for <b>L</b>ifesaving is an automated system\r\n                        which provides a donor to\r\n                        get updates about the victim.Donors can monitor their activity status by registering as a donor\r\n                        and volunteer in events and donation camps.\r\n                    </p>\r\n                    <p class=\"text-justify text-wrap\">\r\n                        By this web application donors can get easy updates about emergency donation and hospitals can\r\n                        maintain their inventory control by registering in this app.\r\n                    </p>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<!-- TEAM-ROLE LAYOUT-3 -->\r\n<div class=\"container m-4 mx-auto justify-content-center\">\r\n    <h1 display-1>Designed by</h1>\r\n    <div class=\"row\">\r\n        <div class=\"team mt-4 rounded-lg m-2\">\r\n            <div class=\"team_member\">\r\n                <div class=\"img text-center pt-3\">\r\n                    <img src=\"/assets/images/role.png\" class=\"rounded-circle\" width=\"100vw\" height=\"100vh\" alt=\"image-file\">\r\n                </div>\r\n                <h3 class=\"title text-center pt-4\">Aditya Kumar</h3>\r\n                <p class=\"role  text-center\"><small>UI/UX Developer</small></p>\r\n                <p class=\"content text-justify p-3\">\r\n                    <q><i>This web application is designed by using Neumorphism design principle.I am a full stack web developer and a UI/UX developer.My vision is to provide a\r\n                    user centric application which is scalable with some awesome features.</i></q>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/appform/appform.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/appform/appform.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppformAppformComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- HEADER-TITLE -->\r\n<div class=\"row-0\">\r\n  <h3 class=\"sub-display-1 text-danger\">\r\n    <i class=\"text-danger text-capitalize material-icons\">&#xe85d;</i>\r\n    Appointment Form\r\n  </h3>\r\n</div>\r\n<!-- APPOINTMENT-FORM -->\r\n<mat-dialog-content>\r\n  <form class=\"request-form\" [formGroup]=\"requestForm\" (ngSubmit)=\"saveRequest()\">\r\n    <mat-form-field class=\"request-form-field\">\r\n      <input matInput type=\"text\" placeholder=\"Name\" class=\"text-capitalize\"\r\n        [class.is-invalid]=\"requestForm.get('name').invalid && requestForm.get('name').touched\" formControlName=\"name\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <input matInput type=\"text\" placeholder=\"Email ID\" formControlName=\"email\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <input matInput type=\"number\" placeholder=\"Conatct no\" formControlName=\"contact\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <mat-select placeholder=\"Gender\" formControlName=\"gender\">\r\n        <mat-option value=\"male\">Male</mat-option>\r\n        <mat-option value=\"female\">Female</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <input matInput type=\"location\" placeholder=\"Location\" class=\"text-uppercase\" formControlName=\"location\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <input matInput type=\"number\" placeholder=\"Age\" formControlName=\"age\">\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <mat-select placeholder=\"Hospital name\" formControlName=\"hospital\">\r\n        <mat-option value=\"apollo\">Apollo</mat-option>\r\n        <mat-option value=\"yashoda\">Yashoda</mat-option>\r\n        <mat-option value=\"kims\">KIMS</mat-option>\r\n        <mat-option value=\"care\">Care</mat-option>\r\n        <mat-option value=\"sunshine\">Sunshine</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <mat-select placeholder=\"Donation type\" formControlName=\"type\">\r\n        <mat-option value=\"blooddonation\">Blood donation</mat-option>\r\n        <mat-option value=\"organdonation\">Organ donation</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <mat-select placeholder=\"Blood group\" formControlName=\"bloodGroup\">\r\n        <mat-option value=\"A+\">A +ve</mat-option>\r\n        <mat-option value=\"A-\">A -ve</mat-option>\r\n        <mat-option value=\"B+\">B +ve</mat-option>\r\n        <mat-option value=\"B-\">B -ve</mat-option>\r\n        <mat-option value=\"AB+\">AB +ve</mat-option>\r\n        <mat-option value=\"AB-\">AB -ve</mat-option>\r\n        <mat-option value=\"O+\">O +ve</mat-option>\r\n        <mat-option value=\"O-\">O -ve</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field class=\"request-form-field\">\r\n      <input matInput type=\"date\" placeholder=\"Required on\" formControlName=\"date\">\r\n    </mat-form-field><br>\r\n\r\n    <button [disabled]=\"!requestForm.valid\" mat-dialog-close mat-raised-button color=\"accent\"\r\n      (click)=\"saveRequest()\">SUBMIT</button>\r\n    <mat-progress-spinner class=\"text-center\" *ngIf=\"isLoading\" diameter=\"27\" strokewidth=\"40\" mode=\"indeterminate\">\r\n    </mat-progress-spinner>\r\n  </form>\r\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/blooddonation/blooddonation.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/blooddonation/blooddonation.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppBlooddonationBlooddonationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n    <div class=\"container-fluid p-0 pt-4\">\r\n        <button mat-fab class=\"m-2\">\r\n            <i class='material-icons' (click)=\"goback()\">&#xe5c4;</i>\r\n        </button>\r\n        <div class=\"container col-sm-6 col-md-8 col-lg-8 justify-content-center\">\r\n            <!-- HEADER LAYOUT -->\r\n            <div class=\"card rounded  p-2 \" [@cardAnimator]=\"animationState\"\r\n            (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('tada')\" matTooltip=\"Click Me!\" matTooltipPosition=\"above\">\r\n                <div class=\"card-body\">\r\n                    <h2 class=\"card-title font-weight-bold text-justify text-danger text-center\">\r\n                        Blood Donation\r\n                    </h2>\r\n                    <hr class=\"divider\">\r\n                    <p class=\"card-text text-justify p-2\"> Blood or the components of blood are used to treat patients\r\n                        with\r\n                        medical conditions such as anaemia, cancer blood disorders, and those having surgery.\r\n                        Blood is made up of a number of components, including red blood cells, platelets and plasma.\r\n                        Each of\r\n                        these can be used to treat many different conditions.\r\n                        Blood is usually separated into its individual components or parts, so a patient can be given\r\n                        the\r\n                        particular component they need.\r\n                        This makes the most of every blood donation, as the components in one unit of blood (or one\r\n                        donation) can be used to treat different patients.</p>\r\n                </div>\r\n            </div>\r\n            <!-- BODY CARD FLEX LAYOUT -->\r\n            <div class=\"row justify-content-center\">\r\n                <div class=\"card col-lg-6 col-md-8 col-sm-8 shadow-lg rounded-lg m-4 \" [@cardAnimator]=\"animationState\"\r\n                (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('fadeL')\" >\r\n                    <img class=\"card-img-top\" src=\"/assets/images/Bdonation_1.jpeg\" alt=\"Card-image-1\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title text-center text-capitalize text-danger text-left\">blood\r\n                            transfusion</h4>\r\n                        <hr class=\"divider\">\r\n                        <p class=\"card-text\">\r\n                            Donated blood or components are given to a patient in a blood transfusion.\r\n                            Blood transfusions are given via an intravenous line into a blood vessel.\r\n                            67% was used to treat medical conditions including anaemia, cancer and blood disorders\r\n                            27% was used in surgery, including cardiac surgery and emergency surgery\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card col-lg-4 col-md-8 col-sm-8 shadow-lg rounded-lg m-4\" [@cardAnimator]=\"animationState\"\r\n                (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('fadeR')\" >\r\n                    <img class=\"card-img-top\" src=\"/assets/images/Bdonation_2.jpeg\" alt=\"Card-image-2\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title text-center text-capitalize text-danger text-left\">blood\r\n                            donors</h4>\r\n                        <hr class=\"divider\">\r\n                        <p class=\"card-text\">\r\n                            Giving blood saves lives. The blood you give is a lifeline in an emergency and for people\r\n                            who\r\n                            need\r\n                            long-term treatments.\r\n                            We need new blood donors mostly young people to start giving blood so we can make sure we\r\n                            have\r\n                            enough\r\n                            blood in the future.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n                <!-- FOOTER-CARD -->\r\n                <div class=\"card shadow-lg rounded-lg m-4\"  [@cardAnimator]=\"animationState\"\r\n                (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('jello')\" matTooltip=\"Click it!\" matTooltipPosition=\"above\">\r\n                    <div class=\"card-body\">\r\n                        <h4 class=\"card-title text-center text-capitalize text-danger text-left\">Blood\r\n                            Banks</h4>\r\n                        <hr class=\"divider\">\r\n                        <p class=\"card-text\">\r\n                            Blood banks store rare blood groups in case of emergency needs.\r\n                            If any victim needs a rare blood group can contact these blood banks\r\n                            These blood banks are present at different locations.\r\n                            In case of emergency needs blood banks can be contacted by the victim.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n        <!-- BUBBLE-ANIMATION -->\r\n        <div class=\"box\">\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n            <div></div>\r\n        </div>\r\n    </div>\r\n    <!-- ANGULAR GOOGLE MAPS -->\r\n    <div class=\"container-fluid p-2 px-4 mx-lg-auto\">\r\n        <agm-map [latitude]=\"latitude\" [longitude]=\"longitude\" (click)=\"onChooseLoc($event)\">\r\n            <agm-marker [latitude]=\"latitude\" [longitude]=\"longitude\"></agm-marker>\r\n        </agm-map>\r\n    </div>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppContactusContactusComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid py-4\">\r\n  <button mat-fab class=\"my-2\">\r\n    <i class='material-icons' (click)=\"goback()\">&#xe5c4;</i>\r\n  </button>\r\n  <!-- FORM -->\r\n  <form #contactForm=\"ngForm\" class=\"mx-auto col-md-5 p-2 rounded-lg shadow\" *ngIf=!submitted\r\n    (ngSubmit)=\"contactForm.form.valid && onSubmit()\" novalidate>\r\n    <h2 display-3 class=\"text-center text-bold text-uppercase\">Contact Us</h2>\r\n    <hr class=\"divider\">\r\n    <div class=\"form-group\">\r\n      <label>\r\n        <h5>First Name:</h5>\r\n      </label>\r\n      <input type=\"text\" required [class.is-invalid]=\"firstname.invalid && firstname.touched\"\r\n        class=\"form-control text-capitalize bg-white text-dark\" #firstname=\"ngModel\" name=\"firstname\"\r\n        [(ngModel)]=\"contact.firstname\" placeholder=\"Your first name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>\r\n        <h5>Last Name:</h5>\r\n      </label>\r\n      <input type=\"text\" required [class.invalid]=\"lastname.invalid && lastname.touched\"\r\n        class=\"form-control bg-white text-dark\" #lastname=\"ngModel\" name=\"lastname\" [(ngModel)]=\"contact.lastname\"\r\n        placeholder=\"Your last name\">\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>\r\n        <h5>Phone:</h5>\r\n      </label>\r\n      <input type=\"number\" pattern=\"^\\d{10}$\" [class.is-invalid]=\"phone.invalid && phone.touched\"\r\n        class=\"form-control bg-white text-dark\" #phone=\"ngModel\" name=\"phone\" [(ngModel)]=\"contact.phone\"\r\n        placeholder=\"Your contact no\">\r\n      <div *ngIf=\"phone.errors && (phone.invalid || phone.touched)\">\r\n        <small class=\"text-danger\" *ngIf=\"phone.errors.required\">Phone number is required</small>\r\n        <small class=\"text-danger\" *ngIf=\"phone.errors.pattern\">Phone number must be 10 digits</small>\r\n      </div>\r\n    </div>\r\n    <div class=\"form-group\">\r\n      <label>\r\n        <h5>Email:</h5>\r\n      </label>\r\n      <input type=\"email\" [class.invalid]=\"email.invalid && email.touched\" required\r\n        class=\"form-control bg-white text-dark\" #email=\"ngModel\" name=\"email\" [(ngModel)]=\"contact.email\"\r\n        placeholder=\"your mail\">\r\n    </div>\r\n    <div class=\"form-group mb-1\">\r\n      <label>\r\n        <h5>Message:</h5>\r\n      </label> <br>\r\n      <textarea type=\"text\" [class.invalid]=\"message.invalid && message.touched\" rows=\"5\"\r\n        class=\"form-control bg-white text-dark\" #message=\"ngModel\" name=\"message\" [(ngModel)]=\"contact.message\"\r\n        placeholder=\"Write something..\"></textarea>\r\n    </div>\r\n    <div class=\"row\">\r\n      <button [disabled]=\"contactForm.form.invalid\" class=\"btn btn-success btn-lg mx-auto\">submit</button>\r\n      <mat-progress-spinner *ngIf=\"isLoading\" diameter=\"27\" strokewidth=\"40\" mode=\"indeterminate\" color=\"accent\">\r\n      </mat-progress-spinner>\r\n    </div>\r\n  </form>\r\n  <!-- BUBBLE-ANIMATION -->\r\n  <div class=\"box\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/donordboard/donordboard.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/donordboard/donordboard.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDonordboardDonordboardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n  <!-- MAT-NAVBAR -->\r\n  <mat-toolbar class=\"app-toolbar mat-elevation-z navbar\" color=\"primary\">\r\n    <button mat-button (click)=\"opened=!opened\" class=\"menu\">\r\n      <mat-icon>menu</mat-icon>\r\n    </button>\r\n    <div class='container-fluid d-flex flex-fill justify-content-end'>\r\n      <button mat-button (click)=\"showNotify()\">\r\n        <i class=\"material-icons\"><span matBadge=\"{{notifCount}}\" matBadgeColor=\"accent\"></span>&#xe7f4;</i>\r\n      </button>\r\n      <button class=\"mx-2\" mat-button (click)=\"openProfile()\">\r\n        <i class=\"material-icons\">&#xe853;</i>\r\n      </button>\r\n      <button class=\"mx-2\" mat-button (click)=\"signOut()\">\r\n        <h3> Sign out </h3>\r\n      </button>\r\n    </div>\r\n  </mat-toolbar>\r\n  <!--MAT-SIDE CONTAINER -->\r\n  <mat-sidenav-container>\r\n    <mat-sidenav [(opened)]=\"opened\">\r\n      <div class=\"container p-2 text-center\">\r\n        <i class=\"material-icons\" style=\"font-size:100px\">&#xe853;</i>\r\n      </div>\r\n      <div *ngIf=\"auth.user | async as data;else log\">\r\n        <h1 class=\"text-center px-2\">Hy {{ data.displayName}} !</h1>\r\n      </div>\r\n      <ng-template #log>\r\n        <h1 class=\"text-center px-2\">Hy {{currentUser.name}} !</h1>\r\n      </ng-template>\r\n      <hr class=\"divider\">\r\n\r\n      <div class=\"container\" *ngIf=\"currentUser.role == 'user'\">\r\n        <button class=\"m-3\" mat-button (click)=\"opened=!opened\" mat-button>\r\n          <h3>\r\n            <i class=\"material-icons p-2\">&#xe871;</i>Dashboard\r\n          </h3>\r\n        </button><br>\r\n\r\n        <button class=\"m-3\" mat-button mat-button (click)=\"bookAppointment()\">\r\n          <h3>\r\n            <i class=\"material-icons p-2\">&#xe85e;</i>Book Appointment\r\n          </h3>\r\n        </button><br>\r\n\r\n        <button class=\"m-3\" mat-button mat-button [routerLink]=\"['news']\">\r\n          <h3>\r\n            <i class=\"material-icons p-2\">&#xe878;</i>View Events\r\n          </h3>\r\n        </button><br>\r\n\r\n        <button class=\"m-3\" mat-button (click)=\"openProfile()\">\r\n          <h3>\r\n            <i class=\"material-icons p-2\">&#xe88f;</i>View Profile\r\n          </h3>\r\n        </button>\r\n      </div>\r\n    </mat-sidenav>\r\n    <!--DASHBOARD-CONTENT-->\r\n    <mat-sidenav-content>\r\n      <div class=\"container-fluid py-4\" *ngIf=\"currentUser.role == 'user'\">\r\n        <div class=\"d-md-flex justify-content-md-between\">\r\n          <!--DONOR-CARD-1 -->\r\n          <div class=\"card shadow rounded-lg m-4 mb-5\">\r\n            <div class=\"card-body\">\r\n              <h3 class=\"card-title text-justify\">\r\n                <div class=\"card bg-danger ml-2 sub-card\"><i class=\"material-icons text-white text-center\">&#xe88f;</i>\r\n                </div>\r\n                Message Alert\r\n              </h3>\r\n              <h5 class=\"card-text\">\r\n                <h6 class=\"text-secondary\">1</h6>\r\n                <hr class=\"divider\">\r\n                Last 24 hours <i class=\"material-icons text-primary sub-icon\">&#xe889;</i>\r\n              </h5>\r\n            </div>\r\n          </div>\r\n          <!--DONOR-CARD-2 -->\r\n          <div class=\"card shadow rounded-lg m-4 mb-5\">\r\n            <div class=\"card-body\">\r\n              <h3 class=\"card-title text-justify\">\r\n                <div class=\"card bg-warning ml-2 sub-card \"><i\r\n                    class=\"material-icons text-white text-center\">&#xe8d1;</i>\r\n                </div>\r\n                Events Participated\r\n              </h3>\r\n              <h5 class=\"card-text\">\r\n                <h6 class=\"text-secondary\">0</h6>\r\n                <hr class=\"divider\">\r\n                Event status <i class=\"material-icons text-primary sub-icon\"> &#xe878;</i>\r\n              </h5>\r\n            </div>\r\n          </div>\r\n          <!--DONOR-CARD-3 -->\r\n          <div class=\"card shadow rounded-lg m-4 mb-5\">\r\n            <div class=\"card-body\">\r\n              <h3 class=\"card-title text-justify\">\r\n                <div class=\"card bg-success ml-2 sub-card \"><i\r\n                    class=\"material-icons text-white text-center\">&#xe85d;</i>\r\n                </div>\r\n                Donation Appointments\r\n              </h3>\r\n              <h6 class=\"text-secondary\">{{value}}</h6>\r\n              <h5 class=\"card-text\">\r\n                <hr class=\"divider\">\r\n                Appointment status <i class=\"material-icons text-primary sub-icon\">&#xe89a;</i>\r\n              </h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n      <!-- HOSPITAL DATA TABLE -->\r\n      <div class=\"container table-responsive mt-4 pt-4\" *ngIf=\"currentUser.role == 'hospital'\">\r\n        <table class=\"table table-striped table-hover table-dark table-bordered shadow\">\r\n          <thead class=\"thead-dark\">\r\n            <tr>\r\n              <th scope=\"col\">\r\n                <h4 [class]='text'>S.no</h4>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <h4 [class]='text'>Patient Name</h4>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <h4 [class]='text'>Age</h4>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <h4 [class]='text'>Location</h4>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <h4 [class]='text'>Date</h4>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <h4 [class]='text'>Type</h4>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <h4 [class]='text'>BloodGroup</h4>\r\n              </th>\r\n              <th scope=\"col\">\r\n                <h4 [class]='text'>Contact</h4>\r\n              </th>\r\n            </tr>\r\n          </thead>\r\n          <tbody *ngIf=\"currentUser.name == Hname;else empty\">\r\n            <tr *ngFor=\"let appointment of appdata;let ielement=index;\">\r\n              <th scope=\"row\" [class]='text'>\r\n                <h5>{{ielement+1}}</h5>\r\n              </th>\r\n              <td>\r\n                <h5 [class]='text'>{{appointment.name | titlecase}}</h5>\r\n              </td>\r\n              <td>\r\n                <h5 [class]='text'>{{appointment.age | titlecase}}</h5>\r\n              </td>\r\n              <td>\r\n                <h5 [class]='text'>{{appointment.location | titlecase}}</h5>\r\n              </td>\r\n              <td>\r\n                <h5 [class]='text'>{{appointment.date | date}}</h5>\r\n              </td>\r\n              <td>\r\n                <h5 [class]='text'>{{appointment.type | titlecase}}</h5>\r\n              </td>\r\n              <td>\r\n                <h5 [class]='text'>{{appointment.bloodGroup | titlecase}}</h5>\r\n              </td>\r\n              <td>\r\n                <h5 [class]='text'>{{appointment.contact}}</h5>\r\n              </td>\r\n            </tr>\r\n            <ng-template #empty>\r\n              <tr>\r\n                <td>No Appointement Scheduled</td>\r\n              </tr>\r\n            </ng-template>\r\n          </tbody>\r\n        </table>\r\n      </div>\r\n      <!--USER DATA-CHARTS -->\r\n      <div class=\"container-fluid-0\">\r\n        <div class=\"d-lg-flex justify-content-lg-around\">\r\n          <!--DATA-CART-1 -->\r\n          <div class=\"card shadow rounded-lg m-4 mb-5 chart\">\r\n            <div class=\"chart\">\r\n              <canvas id=\"myChart\"></canvas>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h3 class=\"card-title text-justify\">\r\n                Patients Attended\r\n              </h3>\r\n              <h5 class=\"card-text text-justify\">\r\n                <hr class=\"divider\">\r\n                Details <i class=\"material-icons text-danger sub-icon\">&#xe8b5;</i>\r\n              </h5>\r\n            </div>\r\n          </div>\r\n          <!--DATA-CART-2 -->\r\n          <div class=\"card shadow rounded-lg m-4 chart\">\r\n            <div class=\"chart\">\r\n              <canvas id=\"chart1\"></canvas>\r\n            </div>\r\n            <div class=\"card-body\">\r\n              <h3 class=\"card-title text-justify\">\r\n                Activity Status\r\n              </h3>\r\n              <h5 class=\"card-text text-justify\">\r\n                <hr class=\"divider\">\r\n                Attended Events <i class=\"material-icons text-danger sub-icon\">&#xe614;</i>\r\n              </h5>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </mat-sidenav-content>\r\n  </mat-sidenav-container>\r\n</body>\r\n\r\n<!--FIRBASE CLOUD-FUNCTION-->\r\n<!-- <div *ngIf=\"user.notifObserve$ | async as notif;then trueblock;else falseblock;\"></div> -->\r\n<!-- <ng-template #falseblock>\r\n  <button mat-button id=\"notify\" (click)=\"showNotify()\" name=\"notification\">\r\n    <mat-icon ><span matBadge=\"{{notifCount}}\" matBadgeColor=\"accent\">notifications</span></mat-icon>\r\n  </button>\r\n  </ng-template> -->";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/dprofile/dprofile.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dprofile/dprofile.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppDprofileDprofileComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- DONOR-TITLE -->\r\n<div class=\"row-0\">\r\n    <h3 class=\"sub-display-1 text-danger\">\r\n        <i class=\"material-icons text-danger\">&#xe891;</i>\r\n        Donor Profile\r\n    </h3>\r\n</div>\r\n<!--DONOR PROFILE-CONTENT-->\r\n<mat-dialog-content>\r\n    <div *ngIf=\"auth.user | async as data;else log\">\r\n        Profile Name:<h3>{{data.displayName}}</h3>\r\n        Email:<h3>{{data.email}}</h3>\r\n    </div>\r\n    <ng-template #log>\r\n        Profile Name:<h3>{{currentUser.name}}</h3>\r\n        Email: <h3>{{currentUser.email}}</h3>\r\n        Donor Type: <h3>{{currentUser.type}}</h3>\r\n        Blood Group: <h3>{{currentUser.bgroup}}</h3>\r\n        Contact no: <h3>{{currentUser.contact}}</h3>\r\n        Age:<h3>{{currentUser.age}}</h3>\r\n    </ng-template>\r\n</mat-dialog-content>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/emergency/emergency.component.html":
  /*!******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/emergency/emergency.component.html ***!
    \******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEmergencyEmergencyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!--GRID LAYOUT-->\r\n<body>\r\n  <div class=\"wrapper\">\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row\">\r\n        <div class=\"col\">\r\n          <button mat-raised-button class=\"card p-2 m-5 float-lg-right\" color=\"warn\" [routerLink]=\"['request']\">\r\n            <img class=\"card-img-top w-75 p-4\" src=\"/assets/images/donate.png\" alt=\"NEED-BLOOD-IMAGE\" />\r\n            <div class=\"card-text\">\r\n              <h3 class=\"text-white text-align-center\">NEED BLOOD</h3>\r\n            </div>\r\n          </button>\r\n        </div>\r\n        <div class=\"col\">\r\n          <button mat-raised-button class=\"card p-2 m-5\" color=\"warn\" [routerLink]=\"['orequest']\">\r\n            <img class=\"card-img-top w-75 p-4\" src=\"/assets/images/receive.png\" alt=\"NEED-ORGAN-IMAGE\" />\r\n            <div class=\"card-text\">\r\n              <h3 class=\"text-white text-align-center\">NEED ORGAN</h3>\r\n            </div>\r\n          </button>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html":
  /*!******************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html ***!
    \******************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFaqFaqComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- TITLE -->\r\n<h1 class=\"text-center p-3\">Frequent Questions !</h1>\r\n<button mat-fab class=\"my-auto mx-2\" color=\"primary\">\r\n    <i class='material-icons' (click)=\"goback()\">&#xe5c4;</i>\r\n</button>\r\n<div class=\"container-fluid\">\r\n    <div class=\"row\">\r\n        <!-- ACCORDIAN's -->\r\n        <div class=\"col-md-3 p-3\">\r\n            <img src=\"/assets/images/faq.jpg\" class=\"shadow float-left mx-auto\" width=\"100%\">\r\n        </div>\r\n        <div class=\"col-md-8 m-2\">\r\n            <div id=\"accordion\">\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"card-link\" data-toggle=\"collapse\" href=\"#collapseOne\">\r\n                            <h4>1.Can I donate,If I have a cold?</h4>\r\n                        </a>\r\n                    </div>\r\n                    <div id=\"collapseOne\" class=\"collapse show\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <h5>No, if you are sneezing and coughing or very congested you should not attend. It is\r\n                                important that you do not\r\n                                have any infection at the time of donating. If you are unsure it is best not to give\r\n                                blood.</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link p-2\" data-toggle=\"collapse\" href=\"#collapseTwo\">\r\n                            <h4>2.Can I donate,If I feel ill,or have a cold sore?</h4>\r\n                        </a>\r\n                    </div>\r\n                    <div id=\"collapseTwo\" class=\"collapse\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <h5>If you are feeling under the weather with any of these things it’s best that you wait\r\n                                until you feel better\r\n                                before you give blood.</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link p-2\" data-toggle=\"collapse\" href=\"#collapseThree\">\r\n                            <h4>3.Can I donate blood,If I am taking antibiotics ?</h4>\r\n                        </a>\r\n                    </div>\r\n                    <div id=\"collapseThree\" class=\"collapse\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <h5>You must be completely healed or recovered from any infection for at least 14 days\r\n                                before you give blood. If you\r\n                                are taking antibiotics you may need to wait a period of time after your last tablet.\r\n                            </h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link p-2\" data-toggle=\"collapse\" href=\"#collapseFour\">\r\n                            <h4>4.Can I donate,If I am pregnant ?</h4>\r\n                        </a>\r\n                    </div>\r\n                    <div id=\"collapseFour\" class=\"collapse\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <h5> During your pregnancy, you are not able to give blood. If you had a blood transfusion\r\n                                during your pregnancy or\r\n                                at delivery then you will not be able to become a blood donor.</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link p-2\" data-toggle=\"collapse\" href=\"#collapseFive\">\r\n                            <h4>5.Can I give blood after receiving medication ?</h4>\r\n                        </a>\r\n                    </div>\r\n                    <div id=\"collapseFive\" class=\"collapse\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <h5>We’ll need to check that you can donate. Whether or not you can donate will depend on\r\n                                the medication you are\r\n                                receiving as well as the condition for which you are being treated.</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link p-2\" data-toggle=\"collapse\" href=\"#collapseSix\">\r\n                            <h4>6.Can I give blood,If I have a heart condition?</h4>\r\n                        </a>\r\n                    </div>\r\n                    <div id=\"collapseSix\" class=\"collapse\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <h5>We will need to have more information to know if you can give blood. It will depend on\r\n                                your specific heart\r\n                                condition</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link p-2\" data-toggle=\"collapse\" href=\"#collapseSeven\">\r\n                            <h4>7.How much blood does a person have?</h4>\r\n                        </a>\r\n                    </div>\r\n                    <div id=\"collapseSeven\" class=\"collapse\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <h5>Blood is the red coloured fluid flowing continuously in our body's circulatory system.\r\n                                About 1/12th of the body\r\n                                weight of a healthy individual is blood. On an average there are about 5 - 6 litres of\r\n                                blood present.</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"card\">\r\n                    <div class=\"card-header\">\r\n                        <a class=\"collapsed card-link p-2\" data-toggle=\"collapse\" href=\"#collapseEight\">\r\n                            <h4>8.How long can blood be stored?</h4>\r\n                        </a>\r\n                    </div>\r\n                    <div id=\"collapseEight\" class=\"collapse\" data-parent=\"#accordion\">\r\n                        <div class=\"card-body\">\r\n                            <h5>Whole blood can be stored up to 35 days, when kept in CPDA anti coagulant solution and\r\n                                refrigerated at 2 - 4 deg.\r\n                                But the demand is so great that blood hardly ever remains in storage for so long and is\r\n                                used much before\r\n                                expiry</h5>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHomeHomeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- HEADER -->\r\n<header class=\"container-fluid pt-2 pb-1\">\r\n  <nav class=\"navbar navbar-expand-xl shadow bg-white navbar-light\">\r\n    <a class=\"navbar-brand p-2 pt-4\" [routerLink]=\"['/']\">\r\n      <img src=\"/assets/images/logo.jpg\" class=\"d-inline\" width=\"35vw\" height=\"35vh\" alt=\"logo\">\r\n      <h4 class=\"d-inline text-justify text-danger px-3 text-bold\">Anil</h4>\r\n    </a>\r\n    <!-- Toggler/collapsibe Button -->\r\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#collapsibleNavbar\">\r\n      <span class=\"navbar-toggler-icon\"></span>\r\n    </button>\r\n    <!-- Navbar links -->\r\n    <div class=\"collapse navbar-collapse\" id=\"collapsibleNavbar\">\r\n      <ul class=\"navbar-nav\">\r\n        <li class=\"nav-item pt-2\">\r\n          <button class=\"nav-link\" mat-flat-button [routerLink]=\"['/']\">\r\n            <h5 class=\"d-inline\"><span class=\"fas fa-home text-danger p-3\"></span></h5>\r\n            <h5 class=\"d-inline text-dark\">Home</h5>\r\n          </button>\r\n        </li>\r\n        <li class=\"nav-item pt-2\">\r\n          <button class=\"nav-link\" mat-flat-button [routerLink]=\"['blooddonation']\">\r\n            <h5 class=\"d-inline\"><span class=\"fas fa-burn text-danger p-3\"></span></h5>\r\n            <h5 class=\"d-inline text-dark\">Blood Donation</h5>\r\n          </button>\r\n        </li>\r\n        <li class=\"nav-item pt-2\">\r\n          <button class=\"nav-link\" mat-flat-button [routerLink]=\"['organdonation']\">\r\n            <h5 class=\"d-inline\"><span class=\"fas fa-brain text-danger p-3\"></span></h5>\r\n            <h5 class=\"d-inline text-dark\">Organ Donation</h5>\r\n          </button>\r\n        </li>\r\n        <li class=\"nav-item pt-2\">\r\n          <button class=\"nav-link\" mat-flat-button [routerLink]=\"['news']\">\r\n            <h5 class=\"d-inline\"><span class=\"far fa-newspaper text-danger p-3\"></span></h5>\r\n            <h5 class=\"d-inline text-dark\">News & Events</h5>\r\n          </button>\r\n        </li>\r\n        <li class=\"nav-item pt-2\">\r\n          <button class=\"nav-link\" mat-flat-button [routerLink]=\"['whytodonate']\">\r\n            <h5 class=\"d-inline\"><span class=\"fas fa-american-sign-language-interpreting text-danger p-3\"></span></h5>\r\n            <h5 class=\"d-inline text-dark\">Why To Donate</h5>\r\n          </button>\r\n        </li>\r\n        <li class=\"nav-item pt-2\">\r\n          <button class=\"nav-link\" mat-flat-button [routerLink]=\"['aboutus']\">\r\n            <h5 class=\"d-inline\"><span class=\"fab fa-autoprefixer text-danger p-3\"></span></h5>\r\n            <h5 class=\"d-inline text-dark\">About Us</h5>\r\n          </button>\r\n        </li>\r\n        <li class=\"nav-item pt-2\">\r\n          <button class=\"nav-link\" mat-flat-button [routerLink]=\"['login']\">\r\n            <h5 class=\"d-inline\"><span class=\"fab fa-google text-danger p-3\"></span></h5>\r\n            <h5 class=\"d-inline text-dark\" color=\"accent\">Login Here!</h5>\r\n          </button>\r\n        </li>\r\n      </ul>\r\n    </div>\r\n  </nav>\r\n</header>\r\n\r\n<!--COVER IMAGE-->\r\n<div class=\"container-fluid shadow rounded p-0 mb-2\">\r\n  <img src=\"assets/images/cover.jpg\" class=\"rounded-lg\" height=\"100%\" width=\"100%\" alt=\"cover-image\">\r\n</div>\r\n\r\n<!--EMERGENCY BUTTON-->\r\n<h4 class=\"font-weight-bolder d-inline m-4 p-2 text-danger text-justify\" mat-display-4>Emergency Need !</h4>\r\n<button class=\"btn btn-outline-danger rounded-lg btn-lg m-4 p-2 text-justify font-weight-bold\"\r\n  [routerLink]=\"['emergency']\">CLICK HERE\r\n</button>\r\n\r\n<!-- BODY -->\r\n<!-- CARD FLEX-LAYOUT-1--> \r\n<div class=\"container-fluid p-0\">\r\n  <div class=\"d-md-flex justify-content-md-between\">\r\n    <!-- CARD-1 -->\r\n    <div class=\"card shadow-lg rounded-lg h-50 m-4\" [@cardAnimator]=\"animationState\"\r\n      (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('swing')\" matTooltip=\"Click Me!\" matTooltipPosition=\"above\">\r\n      <img class=\"card-img-top\" src=\"/assets/images/card1.jpg\" height=\"100%\" width=\"100%\" alt=\"card-image-1\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title font-weight-bold text-justify\"><i class='fas text-danger p-2'>&#xf47e;</i>HOSPITALS</h4>\r\n        <h5 class=\"card-text text-justify\">\r\n          Hospitals can register here and view scheduled appointment provided by the patient and can check their\r\n          inventory\r\n          stock.\r\n        </h5>\r\n      </div>\r\n      <button mat-raised-button color=\"primary\" [routerLink]=\"['hsignup']\">\r\n        <h5 class=\"d-inline\">Register</h5><i class=\"fas text-danger p-3\" color=\"accent\">&#xf004;</i>\r\n      </button>\r\n    </div>\r\n    <!-- CARD-2-->\r\n    <div class=\"card shadow-lg rounded-lg h-50 m-4\" [@cardAnimator]=\"animationState\"\r\n      (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('jello')\" matTooltip=\"Click Me!\" matTooltipPosition=\"below\">\r\n      <img class=\"card-img-top\" src=\"/assets/images/card2.jpeg\" height=\"80%\" width=\"100%\" alt=\"card-image-2\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title font-weight-bold text-justify\"><i class='fas text-danger p-2'>&#xf481;</i>DONORS</h4>\r\n        <h5 class=\"card-text text-justify\">\r\n          You can register here as a blood donor or an organ donar to donate and also view your activity\r\n          chart.\r\n        </h5>\r\n      </div>\r\n      <button [routerLink]=\"['blooddonation']\" mat-raised-button color=\"primary\">\r\n        <h5 class=\"d-inline\">Be a Donor</h5><i class=\"fas text-danger p-3\" color=\"accent\">&#xf004;</i>\r\n      </button>\r\n    </div>\r\n    <!--CARD-3-->\r\n    <div class=\"card shadow-lg rounded-lg h-25 m-4\" [@cardAnimator]=\"animationState\"\r\n      (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('pulse')\" matTooltip=\"Click Me!\" matTooltipcolor=\"accent\" matTooltipPosition=\"below\">\r\n      <img class=\"card-img-top\" src=\"/assets/images/card3.jpg\" height=\"100%\" width=\"100%\" alt=\"card-image-3\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title font-weight-bold text-justify\"><i class='fas text-danger p-2'>&#xf1ea;</i>NEWS & EVENTS\r\n        </h4>\r\n        <h5 class=\"card-text text-justify\">\r\n          Know about the latest news in the medical field provided by media sources and event updates about any donation\r\n          camp.\r\n        </h5>\r\n      </div>\r\n      <button [routerLink]=\"['news']\" mat-raised-button color=\"primary\">\r\n        <h5 class=\"d-inline\">Know More</h5><i class=\"fas text-danger p-3\" color=\"accent\">&#xf004;</i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!--PROCESS STEPS-LAYOUT-->\r\n<div class=\"container mx-auto m-4\">\r\n  <div class=\"d-flex\">\r\n    <mat-tab-group color=\"accent\">\r\n      <mat-tab label=\"Step 1\"><img src=\"/assets/images/step1.jpeg\" width=\"100%\" height=\"60%\" alt=\"mat-tab-image-1\">\r\n        <h4 class=\"text-justify\">User who can donate needs to know the donation guidelines.</h4>\r\n        <button class=\"mx-5\" mat-raised-button color=\"primary\" [routerLink]=\"['whytodonate']\">View guidelines\r\n          <mat-icon color=\"accent\">favorite</mat-icon>\r\n        </button>\r\n      </mat-tab>\r\n      <mat-tab label=\"Step 2\"><img src=\"/assets/images/step2.jpg\" width=\"60%\" height=\"60%\" alt=\"mat-tab-image-2\">\r\n        <h4 class=\"text-justify\">Schedule an appointment in the registered hospitals.</h4>\r\n        <button class=\"mx-5\" mat-raised-button color=\"primary\" [routerLink]=\"['signup']\">Donor registeration\r\n          <mat-icon color=\"accent\">favorite</mat-icon>\r\n        </button>\r\n      </mat-tab>\r\n      <mat-tab label=\"Step 3\"><img src=\"/assets/images/step3.jpg\" width=\"100%\" height=\"60%\" alt=\"mat-tab-image-3\">\r\n        <h4 class=\"text-justify\">Register as an organ donor to donate organs.</h4>\r\n        <button class=\"mx-5\" mat-raised-button color=\"primary\" [routerLink]=\"['organdonation']\">Organ donor\r\n          <mat-icon color=\"accent\">favorite</mat-icon>\r\n        </button>\r\n      </mat-tab>\r\n    </mat-tab-group>\r\n  </div>\r\n</div>\r\n\r\n<!--CARD FLEX-LAYOUT-2-->\r\n<div class=\"container mx-auto m-2 mb-5\">\r\n  <div class=\"d-md-flex flex-row justify-content-md-between\">\r\n    <!-- CARD-4-->\r\n    <div class=\"card shadow rounded-lg h-50 m-4\" [@cardAnimator]=\"animationState\"\r\n      (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('rubberBand')\" matTooltip=\"Click Me!\" matTooltipPosition=\"above\">\r\n      <img class=\"card-img-top\" src=\"/assets/images/card4.jpg\" height=\"50%\" width=\"40%\" alt=\"card-image-4\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title font-weight-bold text-justify\"><i class='fas text-danger p-2'>&#xf271;</i>EVENTS</h4>\r\n        <h5 class=\"card-text text-justify\">\r\n          Be a volunteer by participating in a event.Get updates about the upcoming events by registering as a donor\r\n        </h5>\r\n      </div>\r\n      <button [routerLink]=\"['news']\" mat-raised-button color=\"primary\">\r\n        <h5 class=\"d-inline\">View Events</h5><i class=\"fas text-danger p-3\" color=\"accent\">&#xf004;</i>\r\n      </button>\r\n    </div>\r\n    <!-- CARD-5-->\r\n    <div class=\"card shadow-lg rounded-lg h-50 m-4\" [@cardAnimator]=\"animationState\"\r\n      (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('jello')\" matTooltip=\"Click Me!\" matTooltipPosition=\"below\">\r\n      <img class=\"card-img-top\" src=\"/assets/images/card5.jpg\" height=\"50%\" width=\"40%\" alt=\"card-image-5\">\r\n      <div class=\"card-body\">\r\n        <h4 class=\"card-title font-weight-bold text-justify\"><i class='fas text-danger p-2'>&#xf21e;</i>BLOOD BANKS</h4>\r\n        <h5 class=\"card-text text-justify\">\r\n          Blood banks which are registered can share rare blood group and organ donation related information to the\r\n          victims.\r\n        </h5>\r\n      </div>\r\n      <button [routerLink]=\"['blooddonation']\" mat-raised-button color=\"primary\">\r\n        <h5 class=\"d-inline\">Blood Banks</h5><i class=\"fas text-danger p-3\" color=\"accent\">&#xf004;</i>\r\n      </button>\r\n    </div>\r\n  </div>\r\n</div>\r\n\r\n<!-- FOOTER GRID-LAYOUT-->\r\n<div class=\"footer col-12 p-4\">\r\n  <h3 class=\"text-center\" style=\"color:greenyellow\">DO DONATE , DO SAVE LIFE !</h3>\r\n  <button class=\"submit btn btn-outline-danger text-white m-3\" [routerLink]=\"['contactus']\">\r\n    <h3>Contact us</h3>\r\n  </button>\r\n  <button class=\"submit btn btn-outline-danger text-white m-2 mx-4\" [routerLink]=\"['faq']\">\r\n    <h3>Frequent Questions</h3>\r\n  </button>\r\n  <div class=\"float-lg-right d-inline-block\">\r\n    <h2 class=\"text-right px-4 mb-0\">Follow @</h2>\r\n    <a href=\"https://www.facebook.com\">\r\n      <i class='fab text-info rounded-circle text-justify p-2 m-2'>&#xf09a;</i>\r\n    </a>\r\n    <a href=\"https://github.com/Adityaukumar\">\r\n      <i class='fab text-body rounded-circle text-justify p-2 m-2'>&#xf09b;</i>\r\n    </a>\r\n    <a href=\"https://www.linkedin.com/in/aditya-kumar-046760168/\">\r\n      <i class='fab text-primary rounded-circle text-justify p-2 m-2'>\t&#xf08c;</i>\r\n    </a>\r\n  </div>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hsignup/hsignup.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hsignup/hsignup.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHsignupHsignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- MAIN BACKGROUND -->\r\n<body>\r\n    <div class=\"container-fluid p-0 p-2\">\r\n        <!-- FORM GRID LAYOUT -->\r\n        <div class=\"container col col-sm-6 col-md-8 col-lg-5 py-4 p-2\">\r\n            <div class=\"register-div\">\r\n                <form id=\"HregisterForm\" [formGroup]=\"HregisterForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <h2 class=\"text-center pt-2\">Hospital Register</h2>\r\n                    <hr class=\"divider\">\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputEmail\">Hospital Name</label>\r\n                        <input type=\"text\"\r\n                            [ngClass]=\"{'is-invalid' :HregisterForm.get('name').touched && HregisterForm.get('name').errors &&HregisterForm.get('name').invalid }\"\r\n                            class=\"form-control text-capitalize\" formControlName=\"name\" placeholder=\"Hospital name\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('name').invalid && HregisterForm.get('name').touched\">Please enter\r\n                            valid name\r\n                        </div>\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('name').hasError('required') && HregisterForm.get('name').touched\">\r\n                            Please enter\r\n                            hospital name</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputEmail\">Hospital ID</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"hid\" placeholder=\"Hospital License no.\"\r\n                            [ngClass]=\"{'is-invalid' : HregisterForm.get('hid').invalid\r\n                  && HregisterForm.get('hid').touched\r\n                || HregisterForm.get('hid').touched &&  HregisterForm.get('hid').hasError('hid')   \r\n                }\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('hid').invalid && HregisterForm.get('hid').touched\">Please enter\r\n                            valid\r\n                            hospital\r\n                            Id</div>\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('hid').hasError('required') && HregisterForm.get('hid').touched\">\r\n                            Please\r\n                            enter\r\n                            hospital Id</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputEmail\">Password</label>\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\" placeholder=\"Password\"\r\n                            [ngClass]=\"{'is-invalid' : HregisterForm.get('password').errors && HregisterForm.get('password').touched && HregisterForm.get('password').invalid}\">\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('password').hasError('required') && HregisterForm.get('password').touched\">\r\n                            Password is required</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"inputEmail\">Confirm Password</label>\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\r\n                            placeholder=\"Confirm Password\" [ngClass]=\"{'is-invalid' : HregisterForm.get('confirmPassword').errors && HregisterForm.get('confirmPassword').touched\r\n                  || HregisterForm.get('confirmPassword').touched && HregisterForm.hasError('mismatch')}\">\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.hasError('mismatch') && HregisterForm.get('confirmPassword').touched\">\r\n                            Password must\r\n                            match</div>\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('confirmPassword').hasError('required') && HregisterForm.get('confirmPassword').touched\">\r\n                            Password is required</div>\r\n\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"area\">Location</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"location\"\r\n                            placeholder=\"Hospital Location\"\r\n                            [ngClass]=\"{'is-invalid' : HregisterForm.get('location').errors && HregisterForm.get('location').touched}\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('location').hasError('required') && HregisterForm.get('location').touched\">\r\n                            location is required</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"conatct\">Contact</label>\r\n                        <input type=\"text\" class=\"form-control\" formControlName=\"contact\" placeholder=\"Hospital Number\"\r\n                            [ngClass]=\"{'is-invalid' : HregisterForm.get('contact').errors && HregisterForm.get('contact').touched}\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('contact').hasError('required') && HregisterForm.get('contact').touched\">\r\n                            contact is required</div>\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('contact').invalid && HregisterForm.get('contact').touched\">Contact\r\n                            must be\r\n                            valid 10 digits</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <label for=\"profilePic\">Picture</label>\r\n                        <input type=\"file\" formControlName=\"profilePic\" class=\"form-control-file\" id=\"profilePic\"\r\n                            accept=\"image/png, image/jpeg\" [ngClass]=\"{'is-invalid': HregisterForm.get('profilePic').errors && HregisterForm.get('profilePic').touched \r\n                    || HregisterForm.get('profilePic').touched && HregisterForm.hasError('fileextension')}\">\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.hasError('fileextension')  && HregisterForm.get('profilePic').touched\">\r\n                            Only\r\n                            jpeg/jpg.png allowed</div>\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"HregisterForm.get('profilePic').hasError('required') && HregisterForm.get('profilePic').touched\">\r\n                            Please select a file</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group text-center pt-2\">\r\n                        <button [disabled]=\"!HregisterForm.valid\" (click)=\"onSubmit()\" class=\"btn btn-block\"\r\n                            type=\"submit\">Submit</button>\r\n                        <mat-progress-spinner *ngIf=\"isLoading\" color=\"accent\" diameter=\"27\" strokewidth=\"40\"\r\n                            mode=\"indeterminate\" color=\"primary\"></mat-progress-spinner>\r\n                    </div>\r\n\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
  /*!**********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
    \**********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n    <button mat-fab class=\"m-2\" color=\"primary\">\r\n        <i class='material-icons' [routerLink]=\"['/home']\">\t&#xe88a;</i>\r\n    </button>\r\n    <!-- FORM GRID LAYOUT -->\r\n    <div class=\"container col col-md-6 col-sm-5 col-lg-4 justify-content-center p-3 pt-4\">\r\n        <div class=\"login-div\">\r\n            <div class=\"text-center text-dark\">\r\n                <h2 class=\"p-2\">Welcome</h2>\r\n            </div>\r\n            <div class=\"img text-center\">\r\n                <img src=\"/assets/images/login.png\" class=\"rounded-circle\" width=\"100vw\" height=\"100vh\"\r\n                    alt=\"login-avatar-image\">\r\n            </div>\r\n             <!-- FORM -->\r\n            <form [formGroup]=\"loginForm\" class=\"form\" (ngSubmit)=\"onSubmit()\">\r\n                <div class=\"form-group\">\r\n                    <input type=\"username\" placeholder=\"username\" autocomplete=\"username\" formControlName=\"name\"\r\n                        class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && f.name.errors }\" />\r\n                    <div *ngIf=\"submitted && f.name.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.name.errors.required\">Username is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"form-group\">\r\n                    <input type=\"password\" placeholder=\"password\" autocomplete=\"current-password\"\r\n                        formControlName=\"password\" class=\"form-control\"\r\n                        [ngClass]=\"{'is-invalid': submitted && f.password.errors }\" />\r\n                    <div *ngIf=\"submitted && f.password.errors\" class=\"invalid-feedback\">\r\n                        <div *ngIf=\"f.password.errors.required\">Password is required</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"btn-head\">\r\n                    <a class=\"text-primary p-4\" [routerLink]=\"['signup']\">Not Registered! Click Here</a>\r\n                    <button [disabled]=\"!loginForm.valid\" class=\"login-btn\" (click)=\"onSubmit()\">\r\n                        Login <span class=\"fas fa-lock px-2\"></span>\r\n                    </button>\r\n                    <button class=\"btn btn-block g-button\" type=\"button\" (click)=\"auth.googleSignin()\">\r\n                        Google Sign-in <span class=\"fab fa-google-plus-g px-2\"></span>\r\n                    </button>\r\n                    <mat-progress-spinner *ngIf=\"isLoading\" strokewidth=\"40\" diameter=\"27\" mode=\"indeterminate\" color=\"accent\">\r\n                    </mat-progress-spinner>\r\n                </div>\r\n            </form>\r\n        </div>\r\n    </div>\r\n</body>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html":
  /*!********************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html ***!
    \********************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNewsNewsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n    <!-- BACKGROUND-COVER -->\r\n    <div class=\"container-fluid p-0\">\r\n        <button mat-fab class=\"m-2\">\r\n            <i class='material-icons' (click)=\"goback()\">&#xe5c4;</i>\r\n        </button>\r\n        <div class=\"row justify-content-center m-0 p-2\">\r\n            <div class=\"col-md-6\">\r\n                <img src=\"/assets/images/news-cover.jpg\" class=\"img-fluid rounded-lg shadow-lg img-responsive\"\r\n                    alt=\"why-to-donate-cover\">\r\n            </div>\r\n            <div class=\"col-md-3 align-self-center py-4\">\r\n                <h3>\r\n                    Recent news.\r\n                </h3>\r\n                <hr class=\"divider\">\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--  NEWS-CARD FLEX-LAYOUT-1-->\r\n    <div class=\"container-fluid p-0\">\r\n        <div class=\"d-sm-flex flex-fill justify-content-sm-between\">\r\n            <!-- CARD-1 -->\r\n            <div class=\"card shadow-lg rounded-lg mx-2 mt-4\">\r\n                <iframe src=\"https://www.youtube.com/embed/65knq_e4_ds\" frameborder=\"0\"\r\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n                    allowfullscreen></iframe>\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-text text-justify\">\r\n                        <b>C</b>orona virus vaccine to be out in september in india.Latest information about the vaccine\r\n                        is released.\r\n                    </h5>\r\n                </div>\r\n            </div>\r\n            <!-- CARD-2-->\r\n            <div class=\"card shadow-lg rounded-lg mx-2 mt-4\">\r\n                <iframe src=\"https://www.youtube.com/embed/8qg6l8P5A3A\" frameborder=\"0\"\r\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n                    allowfullscreen></iframe>\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-text text-justify\">\r\n                        <b>O</b>rgan donation campaign needs to be promoted in huge scale for more organ donors.\r\n                    </h5>\r\n                </div>\r\n            </div>\r\n            <!-- CARD-3 -->\r\n            <div class=\"card shadow-lg rounded-lg mx-2 mt-4\">\r\n                <iframe src=\"https://www.youtube.com/embed/ypiETe0LdXw\" frameborder=\"0\"\r\n                    allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\"\r\n                    allowfullscreen></iframe>\r\n                <div class=\"card-body\">\r\n                    <h5 class=\"card-text text-justify\">\r\n                        <b>M</b>ore blood donars are required for blood banks in need of emergency blood donation.\r\n                    </h5>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!--INFO-CARD-1-->\r\n    <div class=\"container-fluid pt-5\">\r\n        <div class=\"card shadow-lg rounded bg-dark\">\r\n            <div class=\"card-text p-4\">\r\n                <h1 class=\"text-capitalize text-success font-weight-bold\"> Coronavirus (COVID-19) advice :-</h1>\r\n                <p class=\"text-info\">\r\n                    <q>keep donating. You can still travel to donate. Giving blood and platelets is essential to the\r\n                        NHS and vulnerable patients.\r\n                        Coronavirus symptoms:\r\n                        Dry cough and/or shortness of breath Extreme tiredness Sore/aching muscles and joints Sickness\r\n                        or\r\n                        diarrhoea Sore throat</q>\r\n                </p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- EVENT-LAYOUT -->\r\n    <div class=\"container-fluid p-0\">\r\n        <div class=\"event-container justify-content-center py-4\">\r\n            <div class=\"title text-center p-5\">\r\n                <h3>NEW EVENTS</h3>\r\n                <hr class=\"divider w-25\">\r\n            </div>\r\n            <!-- EVENT-LAYOUT-->\r\n            <div class=\"event d-flex shadow-lg rounded m-4\">\r\n                <div class=\"event-left\">\r\n                    <div class=\"event-date\">\r\n                        <div class=\"date\">15</div>\r\n                        <div class=\"month\">Sep</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"event-right p-2 d-flex justify-content-center\">\r\n                    <h4 class=\"event-title text-uppercase text-danger font-weight-bold sub-display-1\"><q>blood donor\r\n                            camp</q></h4>\r\n                    <div class=\"event-timing text-secondary\">\r\n                        <i class=\"fas fa-clock\"></i>\r\n                        8.00 A.M S.G Colony-Shivaji roads\r\n                    </div>\r\n                    <div class=\"event-description p-2\">\r\n                        <p>\r\n                            Volunteers can give their active participation in this donor camp.This camp is organized for\r\n                            funding cancer treatments.As long as their is an active participation of donors , many lives\r\n                            depending on donation can be saved.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"event d-flex shadow-lg rounded m-4\">\r\n                <div class=\"event-left\">\r\n                    <div class=\"event-date\">\r\n                        <div class=\"date\">23</div>\r\n                        <div class=\"month\">Sep</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"event-right p-2 d-flex justify-content-center\">\r\n                    <h4 class=\"event-title text-uppercase text-danger font-weight-bold sub-display-1\"><q>Organ Donation\r\n                            Volunteers</q></h4>\r\n                    <div class=\"event-timing text-secondary\">\r\n                        <i class=\"fas fa-clock\"></i>\r\n                        10.00 A.M Yashoda hospitals-Banjara Hills\r\n                    </div>\r\n                    <div class=\"event-description\">\r\n                        <p>\r\n                            This event is about the individuals who want to be after life organ donor.By conducting this\r\n                            event individuals\r\n                            who are interested to give their organs after life can choose to be a volunteer in this\r\n                            event.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"event d-flex shadow-lg rounded m-4\">\r\n                <div class=\"event-left\">\r\n                    <div class=\"event-date\">\r\n                        <div class=\"date\">05</div>\r\n                        <div class=\"month\">Oct</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"event-right p-2 d-flex justify-content-center\">\r\n                    <h4 class=\"event-title text-uppercase text-danger font-weight-bold sub-display-1\"><q>Charity 1k\r\n                            run</q></h4>\r\n                    <div class=\"event-timing text-secondary\">\r\n                        <i class=\"fas fa-clock\"></i>\r\n                        9.00 A.M Necklace roads.\r\n                    </div>\r\n                    <div class=\"event-description\">\r\n                        <p>\r\n                            This event is organized for a free charitable 1k run for all the volunteers.Where the cost\r\n                            of participation is\r\n                            at affordable price.By attending in this event , the charitable trusts and NGO's can\r\n                            contribute that amount for conducting heart surgeries and cancer treatment.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n            <div class=\"event d-flex rounded shadow-lg mt-4 mx-4\">\r\n                <div class=\"event-left\">\r\n                    <div class=\"event-date\">\r\n                        <div class=\"date\">15</div>\r\n                        <div class=\"month\">Dec</div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"event-right p-2 d-flex justify-content-center\">\r\n                    <h4 class=\"event-title text-uppercase text-danger font-weight-bold sub-display-1\"><q>2k RUN FOR\r\n                            CAUSE</q></h4>\r\n                    <div class=\"event-timing text-secondary\">\r\n                        <i class=\"fas fa-clock\"></i>\r\n                        8.00 A.M Tank bund-R.K Math.\r\n                    </div>\r\n                    <div class=\"event-description\">\r\n                        <p>\r\n                            As the best way to be healthy is to do physical excercises.So why not ,do it for a better\r\n                            cause.This event is all about\r\n                            the volunteers who want to run for a cause.This 2k run is organized to gather more people\r\n                            and\r\n                            let them run for a noble cause.\r\n                        </p>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n    <!-- BUBBLE EFFECT -->\r\n    <div class=\"box\">\r\n        <div></div>\r\n        <div></div>\r\n        <div></div>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/notify/notify.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/notify/notify.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppNotifyNotifyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<span *ngIf=\"currentUser.name==value.name;then notifblock;else emptyblock\"></span>\r\n<ng-template #emptyblock>\r\n    <h1 mat-dialog-title mat-display-3 class=\"text-danger text-center\">No Notifications</h1>\r\n</ng-template>\r\n<ng-template #notifblock>\r\n    <h1 mat-dialog-title class=\"text-danger text-center\">Notification</h1>\r\n    <mat-dialog-content *ngIf=\"request$ | async as request\">\r\n        <h4>Sender Name:    <b>{{request.name | titlecase}}</b></h4>\r\n        <h4>Patient Name:   <b>{{request.pname | titlecase}}</b></h4>\r\n        <h4>Sender Contact: <b>{{request.contact}}</b></h4>\r\n        <div *ngIf=\"request.type=='bdonor'\">\r\n            <h4>Request For:    <b>{{request.requestFor | titlecase}}</b></h4>\r\n            <h4>Blood Group:    <b>{{request.bloodGroup | titlecase}}</b></h4>\r\n            <h4>Units:          <b>{{request.units}}</b></h4>\r\n        </div>\r\n        <div *ngIf=\"request.type=='odonor'\">\r\n            <h4>Organ:  <b>{{request.organ | titlecase}}</b></h4>\r\n        </div>\r\n        <h4>Age:    <b>{{request.page}}</b></h4>\r\n        <h4>Gender: <b>{{request.gender | titlecase}}</b></h4>\r\n        <h4>Location:   <b>{{request.location | titlecase}}</b></h4>\r\n        <h4>Required Date:  <b>{{request.requiredDate | date}}</b></h4>\r\n\r\n        <button mat-dialog-close class=\"btn btn-lg btn-success m-4\" mat-raised-button\r\n            (click)=\"attendRequest(request.id,request.type)\">ACCEPT</button>\r\n\r\n        <button mat-dialog-close class=\"btn1 btn-lg btn-danger m-4\" mat-raised-button\r\n            (click)=\"ignoreRequest()\">IGNORE</button>\r\n    </mat-dialog-content>\r\n</ng-template>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/orequest/orequest.component.html":
  /*!****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/orequest/orequest.component.html ***!
    \****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrequestOrequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid py-4 background\">\r\n  <button mat-fab class=\"m-2\" color=\"primary\">\r\n    <i class='material-icons' (click)=\"goback()\">&#xe5c4;</i>\r\n  </button>\r\n  <!-- FORM -->\r\n  <form class=\"request-form mat-typography col-lg-4 col-sm-5 m-auto\" [formGroup]=\"requestForm\" fxLayout=\"row wrap\"\r\n    (ngSubmit)=\"saveRequest()\">\r\n    <h2>Sender Details</h2>\r\n    <div class=\"request-form-group w-100\" fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\" fxLayoutGap=\"10px\">\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"text\" placeholder=\"Name\" class=\"text-capitalize\"\r\n          [class.is-invalid]=\"requestForm.get('name').invalid && requestForm.get('name').touched\"\r\n          formControlName=\"name\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"number\" placeholder=\"Conatct no\" formControlName=\"contact\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"number\" placeholder=\"valid GOVT. ID (Adhaar Card)\" formControlName=\"id\">\r\n      </mat-form-field>\r\n    </div>\r\n    <h2>Patient details</h2>\r\n    <div class=\"request-form-group w-100\" fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\" fxLayoutGap=\"10px\">\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"text\" placeholder=\"Name\" class=\"text-capitalize\" formControlName=\"pname\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"number\" placeholder=\"Age\" formControlName=\"page\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <mat-select placeholder=\"Gender\" formControlName=\"gender\">\r\n          <mat-option value=\"male\">Male</mat-option>\r\n          <mat-option value=\"female\">Female</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <mat-form-field class=\"request-form-field disabled\">\r\n      <mat-select placeholder=\"ORGAN DONOR\" formControlName=\"type\">\r\n        <mat-option value=\"odonor\" disabled>ORGAN DONOR</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n    <h2>Request details</h2>\r\n    <div class=\"request-form-group w-100\" fxLayout=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap=\"10px\">\r\n      <mat-form-field class=\"request-form-field\">\r\n        <mat-select placeholder=\"Organs for transplantation\" formControlName=\"organ\">\r\n          <mat-option value=\"heart\">Heart</mat-option>\r\n          <mat-option value=\"kidney\">Kidney</mat-option>\r\n          <mat-option value=\"liver\">Liver</mat-option>\r\n          <mat-option value=\"cornea\">Cornea</mat-option>\r\n          <mat-option value=\"pancrea\">Pancreas</mat-option>\r\n          <mat-option value=\"other\">Other Organ</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"location\" placeholder=\"Location\" class=\"text-uppercase\" formControlName=\"location\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput name=\"requiredDate\" [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]='picker'\r\n          formControlName=\"requiredDate\">\r\n        <mat-datepicker-toggle class=\"dateicon\" mat-suffix [for]='picker'></mat-datepicker-toggle>\r\n        <mat-datepicker #picker touchUi startView=\"month\"></mat-datepicker>\r\n      </mat-form-field>\r\n    </div>\r\n    <div class=\"request-form-actions\">\r\n      <button [disabled]=\"!requestForm.valid\" class=\"mat-btn\" mat-raised-button color=\"primary\" (click)=\"saveRequest()\">SUBMIT\r\n      </button>\r\n      <mat-progress-spinner *ngIf=\"isLoading\" diameter=\"27\" strokewidth=\"40\" color=\"accent\" mode=\"indeterminate\">\r\n      </mat-progress-spinner>\r\n    </div>\r\n  </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/organdonation/organdonation.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/organdonation/organdonation.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppOrgandonationOrgandonationComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n  <div class=\"container-fluid p-0 pt-2\">\r\n    <button mat-mini-fab class=\"m-2\">\r\n      <i class='material-icons' (click)=\"goback()\">&#xe314;</i>\r\n    </button>\r\n    <div class=\"container col-sm-6 col-md-8 col-lg-7 justify-content-center p-2\">\r\n      <!--CONATAINER LAYOUT -->\r\n      <div class=\"card rounded shadow-lg p-2\" [@cardAnimator]=\"animationState\"\r\n        (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('tada')\" matTooltip=\"Click Me!\" matTooltipPosition=\"above\">\r\n        <div class=\"card-body\">\r\n          <h2 class=\"card-title font-weight-bold text-justify text-center\">\r\n            Organ Donation\r\n          </h2>\r\n          <hr class=\"divider\">\r\n          <p class=\"card-text text-justify p-2\">\r\n            Organ Donation is the donation of one or more organ from a living or dead person to a living recipient\r\n            that is in need of a transplant.\r\n            Transplantable organs and tissues are removed in a surgical procedure after\r\n            determining if the organs are suitable for a transplant.\r\n            One organ donor can save about 8 lives.\r\n          </p>\r\n        </div>\r\n        <img class=\"card-img-bottom mx-auto\" src=\"/assets/images/organ_donation-1.jpg\" alt=\"organ-donation\">\r\n      </div>\r\n      <div class=\"card rounded shadow-lg p-2 mt-4\" [@cardAnimator]=\"animationState\"\r\n        (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('bounceIn')\" matTooltip=\"Click Me!\" matTooltipPosition=\"left\">\r\n        <div class=\"card-body\">\r\n          <h2 class=\"card-title font-weight-bold text-capitalize text-justify text-center\">\r\n            Why is an Organ transplant done?\r\n          </h2>\r\n          <hr class=\"divider\">\r\n          <p class=\"card-text text-justify p-2\">\r\n            An organ transplant is done when a critical organ in the body is functioning very poorly, and determined\r\n            to\r\n            ultimately fail and cause mortality. To prevent the death of a patient whose organ failure is already\r\n            determined,\r\n            doctors will suggest organ transplantation as an end state measure, after determining suitability of such\r\n            a\r\n            procedure on the patient.\r\n          </p>\r\n        </div>\r\n        <img class=\"card-img-bottom mx-auto\" src=\"/assets/images/organ_donation-2.jpg\" height=\"100%\"\r\n          alt=\"organ-donation\">\r\n      </div>\r\n      <div class=\"card rounded shadow-lg p-2 mt-4\" [@cardAnimator]=\"animationState\"\r\n        (@cardAnimator.done)='resetAnimationState()' (tap)=\"startAnimation('bounceOut')\" matTooltip=\"Click Me!\" matTooltipPosition=\"right\">\r\n        <div class=\"card-body\">\r\n          <h2 class=\"card-title font-weight-bold text-capitalize text-justify text-center\">\r\n            The Living Donation Process\r\n          </h2>\r\n          <hr class=\"divider\">\r\n          <p class=\"card-text text-justify p-2\">\r\n            Most organ and tissue donations occur after the donor has died. But some organs and tissues can be donated\r\n            while the\r\n            donor is alive. Nearly 6,000 living donations take place each year.\r\n            That's about 4 out of every 10 donations.\r\n            Most living donations happen among family members or between close friends. Some people become altruistic\r\n            living\r\n            donors by choosing to donate to someone they don’t know.\r\n          </p>\r\n        </div>\r\n        <img class=\"card-img-bottom mx-auto pb-4\" src=\"/assets/images/organ_donation-3.jpg\" height=\"100%\"\r\n          alt=\"organ-donation\">\r\n        <button class=\"btn btn-md mx-auto\" mat-raised-button color=\"primary\" [routerLink]=\"['signup']\">Register as Donor\r\n          <mat-icon color=\"accent\">favorite</mat-icon>\r\n        </button>\r\n      </div>\r\n    </div>\r\n  </div>\r\n  <!-- BUBBLE-ANIMATION -->\r\n  <div class=\"box\">\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n    <div></div>\r\n  </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/request/request.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/request/request.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRequestRequestComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid py-4 background\">\r\n  <button mat-fab class=\"m-2\" color=\"primary\">\r\n    <i class='material-icons' (click)=\"goback()\">&#xe5c4;</i>\r\n  </button>\r\n  <!-- FORM -->\r\n  <form id=\"requestForm\" [formGroup]=\"requestForm\" class=\"request-form mat-typography col-lg-4 col-sm-5 m-auto\"\r\n    fxLayout=\"row wrap\" (ngSubmit)=\"saveRequest()\">\r\n    <h2>Sender Details</h2>\r\n    <div class=\"request-form-group w-100\" fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\" fxLayoutGap=\"10px\">\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput class=\"text-capitalize\" type=\"text\" placeholder=\"Name\"\r\n          [class.is-invalid]=\"requestForm.get('name').invalid && requestForm.get('name').touched\"\r\n          formControlName=\"name\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"number\" placeholder=\"Conatct no\" formControlName=\"contact\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"number\" placeholder=\"valid GOVT. ID (Adhaar Card)\" formControlName=\"id\">\r\n      </mat-form-field>\r\n    </div>\r\n    <h2>Patient details</h2>\r\n    <div class=\"request-form-group w-100\" fxLayout=\"row wrap\" fxLayout.xs=\"column wrap\" fxLayoutGap=\"10px\">\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput placeholder=\"Name\" type=\"text\" class=\"text-capitalize\" formControlName=\"pname\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput placeholder=\"Age\" type=\"number\" formControlName=\"page\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <mat-select placeholder=\"Gender\" formControlName=\"gender\">\r\n          <mat-option value=\"male\">Male</mat-option>\r\n          <mat-option value=\"female\">Female</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field disabled\">\r\n        <mat-select placeholder=\"Blood Donor\" formControlName=\"type\">\r\n          <mat-option value=\"bdonor\" disabled>BLOOD DONOR</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n    </div>\r\n    <h2>Request details</h2>\r\n    <div class=\"request-form-group w-100\" fxLayout=\"row wrap\" fxLayout.xs=\"row wrap\" fxLayoutGap=\"10px\">\r\n      <mat-button-toggle-group class=\"request-for-button\" formControlName=\"requestFor\" aria-label=\"Request for\">\r\n        <mat-button-toggle value=\"blood\">Blood</mat-button-toggle>\r\n        <mat-button-toggle value=\"platelets\">Platelets</mat-button-toggle>\r\n      </mat-button-toggle-group>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <mat-select placeholder=\"Blood group\" formControlName=\"bloodGroup\">\r\n          <mat-option value=\"A+\">A +ve</mat-option>\r\n          <mat-option value=\"A-\">A -ve</mat-option>\r\n          <mat-option value=\"B+\">B +ve</mat-option>\r\n          <mat-option value=\"B-\">B -ve</mat-option>\r\n          <mat-option value=\"AB+\">AB +ve</mat-option>\r\n          <mat-option value=\"AB-\">AB -ve</mat-option>\r\n          <mat-option value=\"O+\">O +ve</mat-option>\r\n          <mat-option value=\"O-\">O -ve</mat-option>\r\n          <mat-option value=\"other\">Other group</mat-option>\r\n        </mat-select>\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"number\" placeholder=\"Number of Units\" formControlName=\"units\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput type=\"text\" placeholder=\"Location\" class=\"text-uppercase\" formControlName=\"location\">\r\n      </mat-form-field>\r\n      <mat-form-field class=\"request-form-field\">\r\n        <input matInput name=\"requiredDate\" [min]=\"minDate\" [max]=\"maxDate\" [matDatepicker]='picker'\r\n          formControlName=\"requiredDate\">\r\n        <mat-datepicker-toggle class=\"dateicon\" mat-suffix [for]='picker'></mat-datepicker-toggle>\r\n        <mat-datepicker #picker touchUi startView=\"month\"></mat-datepicker>\r\n      </mat-form-field>\r\n      <div class=\"request-form-actions\">\r\n        <button [disabled]=\"!requestForm.valid\" class=\"mat-btn\" mat-raised-button color=\"primary\" (click)=\"saveRequest()\">SUBMIT\r\n        </button>\r\n        <mat-progress-spinner *ngIf=\"isLoading\" color=\"accent\" diameter=\"27\" strokewidth=\"40\" mode=\"indeterminate\">\r\n        </mat-progress-spinner>\r\n      </div>\r\n    </div>\r\n  </form>\r\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n    <!-- FORM GRID LAYOUT -->\r\n    <div class=\"container-fluid p-0 p-2\">\r\n        <div class=\"container col col-md-8 col-lg-5 col-sm-8 p-2 py-4 justify-content-center\">\r\n            <div class=\"signup-div\">\r\n                <div class=\"text-center text-dark text-uppercase\">\r\n                    <h2 class=\"pt-4 p-2\">Sign Up</h2>\r\n                </div>\r\n                <div class=\"img text-center\">\r\n                    <img src=\"/assets/images/login.png\" class=\"rounded-circle\" width=\"100vw\" height=\"100vh\"\r\n                        alt=\"login-avatar-image\">\r\n                </div>\r\n                <!-- FORM -->\r\n                <form id=\"registerForm\" class=\"form\" [formGroup]=\"registerForm\" (ngSubmit)=\"onSubmit()\">\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\"\r\n                            [ngClass]=\"{'is-invalid' : registerForm.get('name').errors && registerForm.get('name').touched && registerForm.get('name').invalid}\"\r\n                            class=\"form-control text-capitalize\" formControlName=\"name\" placeholder=\"type your name ..\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('name').hasError('required') && registerForm.get('name').touched\">\r\n                            Name is required</div>\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('name').invalid && registerForm.get('name').touched\">\r\n                            Name must be valid</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"email\" class=\"form-control\" formControlName=\"email\"\r\n                            placeholder=\"Type Your Email (Username) ..\" [ngClass]=\"{'is-invalid' : registerForm.get('email').errors\r\n                          && registerForm.get('email').touched\r\n                        || registerForm.get('email').touched &&  registerForm.get('email').hasError('email')   \r\n                        }\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('email').hasError('email') && registerForm.get('email').touched\">\r\n                            Please enter valid email address</div>\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('email').hasError('required') && registerForm.get('email').touched\">\r\n                            Please enter email address</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"password\"\r\n                            placeholder=\"Type Password ..\"\r\n                            [ngClass]=\"{'is-invalid' : registerForm.get('password').errors && registerForm.get('password').touched}\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('password').hasError('required') && registerForm.get('password').touched\">\r\n                            Password is required</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"password\" class=\"form-control\" formControlName=\"confirmPassword\"\r\n                            placeholder=\"Confirm Password ..\" [ngClass]=\"{'is-invalid' : registerForm.get('confirmPassword').errors && registerForm.get('confirmPassword').touched\r\n                          || registerForm.get('confirmPassword').touched && registerForm.hasError('mismatch')}\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.hasError('mismatch') && registerForm.get('confirmPassword').touched\">\r\n                            Password must match</div>\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('confirmPassword').hasError('required') && registerForm.get('confirmPassword').touched\">\r\n                            Password is required</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" formControlName=\"type\" required\r\n                            [ngClass]=\"{'is-invalid' : registerForm.get('type').errors && registerForm.get('type').touched}\">\r\n                            <div class=\"invalid-feedback text-danger\"\r\n                                *ngIf=\"registerForm.get('type').hasError('required') && registerForm.get('type').touched\">\r\n                                selection is required</div>\r\n                            <option disabled selected value>Select type of donor</option>\r\n                            <option value=\"bdonor\" class=\"font-weight-bold\">BLOOD DONAR</option>\r\n                            <option value=\"odonor\" class=\"font-weight-bold\">ORGAN DONAR</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control location text-capitalize\" formControlName=\"location\"\r\n                            placeholder=\"Type Your City Name ..\"\r\n                            [ngClass]=\"{'is-invalid' : registerForm.get('location').errors && registerForm.get('location').touched && registerForm.get('location').invalid}\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('location').hasError('required') && registerForm.get('location').touched\">\r\n                            Location is required</div>\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('location').invalid && registerForm.get('location').touched\">\r\n                            Loction must be more than 3 characters</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <select class=\"form-control\" formControlName=\"bgroup\"\r\n                            [ngClass]=\"{'is-invalid' : registerForm.get('bgroup').errors && registerForm.get('bgroup').touched}\">\r\n                            <div class=\"invalid-feedback text-danger\"\r\n                                *ngIf=\"registerForm.get('bgroup').hasError('required') && registerForm.get('bgroup').touched\">\r\n                                selection is required</div>\r\n                            <option disabled selected value>Select your blood group</option>\r\n                            <option value=\"A+\">A +ve</option>\r\n                            <option value=\"A-\">A -ve</option>\r\n                            <option value=\"B+\">B +ve</option>\r\n                            <option value=\"B-\">B -ve</option>\r\n                            <option value=\"AB+\">AB +ve</option>\r\n                            <option value=\"AB-\">AB -ve</option>\r\n                            <option value=\"O+\">O +ve</option>\r\n                            <option value=\"O-\">O -ve</option>\r\n                            <option value=\"other\">Other group</option>\r\n                        </select></div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"text\" class=\"form-control\" requried formControlName=\"contact\"\r\n                            placeholder=\"Your Contact Number ..\"\r\n                            [ngClass]=\"{'is-invalid' : registerForm.get('contact').errors && registerForm.get('contact').touched && registerForm.get('contact').invalid}\">\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('contact').hasError('required') && registerForm.get('contact').touched\">\r\n                            Contact is required</div>\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('contact').invalid && registerForm.get('contact').touched\">\r\n                            Contact must be valid 10 digits</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"number\" class=\"form-control\" name=\"age\" formControlName=\"age\"\r\n                            placeholder=\"Enter Your Age ..\" [ngClass]=\"{'is-invalid': registerForm.get('age').errors && registerForm.get('age').touched \r\n                    || registerForm.get('age').touched && registerForm.hasError('age')}\">\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.hasError('age')  && registerForm.get('age').touched\">\r\n                            Donor must be 18 years old\r\n                            and\r\n                            less than 60 years</div>\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('age').hasError('required') && registerForm.get('age').touched\">\r\n                            Please select an Age</div>\r\n                    </div>\r\n\r\n                    <div class=\"form-group row p-3 mx-0\">\r\n                        <h5 class=\"p-3 font-weight-bold\">Gender:</h5>\r\n                        <input type=\"radio\" name=\"gender\" value=\"male\">\r\n                        <h5 class=\"p-3\">Male</h5>\r\n                        <input type=\"radio\" name=\"gender\" value=\"female\">\r\n                        <h5 class=\"p-3\">Female</h5>\r\n                    </div>\r\n\r\n                    <div class=\"form-group\">\r\n                        <input type=\"file\" formControlName=\"profilePic\" class=\"form-control-file \" id=\"profilePic\"\r\n                            accept=\"image/png, image/jpeg\" [ngClass]=\"{'is-invalid': registerForm.get('profilePic').errors && registerForm.get('profilePic').touched \r\n                        || registerForm.get('profilePic').touched && registerForm.hasError('fileextension')}\">\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.hasError('fileextension')  && registerForm.get('profilePic').touched\">\r\n                            Only jpeg/jpg.png allowed</div>\r\n\r\n                        <div class=\"invalid-feedback text-danger\"\r\n                            *ngIf=\"registerForm.get('profilePic').hasError('required') && registerForm.get('profilePic').touched\">\r\n                            Please select a file</div>\r\n                    </div>\r\n                    <div class=\"btn-head\">\r\n                        <button [disabled]=\"!registerForm.valid\" (click)=\"onSubmit()\" type=\"submit\">\r\n                            Submit <span class=\"fas fa-lock px-2\"></span>\r\n                        </button>\r\n                        <mat-progress-spinner *ngIf=\"isLoading\" strokewidth=\"40\" diameter=\"27\" mode=\"indeterminate\"\r\n                            color=\"accent\">\r\n                        </mat-progress-spinner>\r\n                    </div>\r\n                </form>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</body>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/view-patients/view-patients.component.html":
  /*!**************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/view-patients/view-patients.component.html ***!
    \**************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppViewPatientsViewPatientsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<!-- NAVBAR -->\r\n<nav class='navbar navbar-expand-xl navbar-light px-8'>\r\n  <button mat-button [routerLink]=\"['/']\">\r\n    <mat-icon class=\"d-inline p-2 text-warning\">home</mat-icon>\r\n    <h6 class=\"d-inline text-white\">Home</h6>\r\n  </button>\r\n  <h3 class=\"text-warning mx-auto p-2\">Donor List</h3>\r\n</nav>\r\n<!-- TABLE CONTAINER -->\r\n<div class=\"container table-responsive mt-4 pt-4\">\r\n  <table class=\"table table-striped table-hover table-dark table-bordered shadow\">\r\n    <thead class=\"thead-dark\">\r\n      <tr>\r\n        <th scope=\"col\">\r\n          <h4 [class]='text'>S.no</h4>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h4 [class]='text'>Donor Name</h4>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h4 [class]='text'>Donor Type</h4>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h4 [class]='text'>Blood Group</h4>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h4 [class]='text'>Location</h4>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h4 [class]='text'>Contact</h4>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h4 [class]='text'>Operations</h4>\r\n        </th>\r\n        <th scope=\"col\">\r\n          <h4 [class]='text'>Message</h4>\r\n        </th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let donor of donors;let ielement=index;\">\r\n        <th scope=\"row\" [class]='text'>\r\n          <h5>{{ielement+1}}</h5>\r\n        </th>\r\n        <td>\r\n          <h5 [class]='text'>{{donor.name | titlecase}}</h5>\r\n        </td>\r\n        <td>\r\n          <h5 [class]='text'>{{donor.type | titlecase}}</h5>\r\n        </td>\r\n        <td>\r\n          <h5 [class]='text'>{{donor.bgroup | titlecase}}</h5>\r\n        </td>\r\n        <td>\r\n          <h5 [class]='text'>{{donor.location | titlecase}}</h5>\r\n        </td>\r\n        <td>\r\n          <h5 [class]='text'>{{donor.contact}}</h5>\r\n        </td>\r\n        <td><button (click)=\"send(donor,accept.value,ignore.value)\" class=\"btn btn-success btn-md mx-4\">Send</button>\r\n        </td>\r\n        <td>\r\n          <input type='radio' #accept [value]='donor.id' [checked]=\"message1 == donor.id ? attending : null\" disabled>\r\n          <label for='accept'>\r\n            <h5 class=\"text-wrap p-1 p-xl-3\" id=\"accept\">ACCEPTED</h5>\r\n          </label>\r\n          <input type='radio' #ignore [value]='donor.id' [checked]=\"message2 == donor.id ? ignored : null\" disabled>\r\n          <label for='ignore'>\r\n            <h5 class=\"text-wrap p-1 p-xl-3\" id=\"ignore\">IGNORED</h5>\r\n          </label>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n</div>\r\n<mat-progress-spinner class=\"text-center\" *ngIf=\"isLoading\" strokewidth=\"40\" diameter=\"25\" mode=\"indeterminate\"\r\n  color=\"accent\">\r\n</mat-progress-spinner>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/whytodonate/whytodonate.component.html":
  /*!**********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/whytodonate/whytodonate.component.html ***!
    \**********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppWhytodonateWhytodonateComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<body>\r\n  <div class=\"container-fluid p-0\">\r\n    <button mat-fab class=\"m-2\" color=\"primary\">\r\n      <i class='material-icons' (click)=\"goback()\">&#xe5c4;</i>\r\n  </button>\r\n    <!-- IMAGE WITH CONTENT-CONTAINER GRID -->\r\n    <div class=\"container-fluid\">\r\n      <div class=\"row justify-content-center\">\r\n        <div class=\"col-md-6 p-2\">\r\n          <img src=\"/assets/images/WhyToDonateCover.jpg\" class=\"img-fluid img-responsive\" alt=\"why-to-donate-cover\">\r\n        </div>\r\n        <div class=\"col-md-5 align-self-center py-4\">\r\n          <h4>\r\n            Giving blood saves lives. The blood you give is a lifeline in an emergency.\r\n          </h4>\r\n          <div class=\"bubble mx-auto mt-4\"></div>\r\n        </div>\r\n      </div>\r\n      <div class=\"row justify-content-center mt-4\">\r\n        <div class=\"col-md-6 align-self-center\">\r\n          <p>\r\n            We need new blood donors from all backgrounds to ensure there is the right blood available for\r\n            patients who need it.More young people have to start giving their blood so we can make sure we have\r\n            enough blood in the future.Some patients, particularly those who require on-going transfusions, need blood\r\n            that closely matches their blood.\r\n          </p>\r\n        </div>\r\n        <div class=\"col-md-5\">\r\n          <h4>\r\n            <img src=\"/assets/images/whyToDonate_1.jpg\" class=\"img-rounded img-fluid img-responsive\"\r\n              alt=\"why-to-donate-image\">\r\n          </h4>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- PROGRESS BARS -->\r\n    <div class=\"container-fluid mt-4\">\r\n      <div class=\"card shadow-lg rounded\">\r\n        <h3 class=\"p-4 text-left\">Blood Groups Available</h3>\r\n        <div class=\"card-body\">\r\n          <h5 class=\"text-info\">1. O Positive(+):</h5>\r\n          <div class=\"progress m-4\">\r\n            <div class=\"progress-bar progress-bar-striped bg-info progress-bar-animated\" style=\"width:65%\">65%</div>\r\n          </div>\r\n          <h5 class=\"text-success\">2. B positive(+):</h5>\r\n          <div class=\"progress m-4\">\r\n            <div class=\"progress-bar progress-bar-striped bg-success progress-bar-animated\" style=\"width:78%\">78%</div>\r\n          </div>\r\n          <h5 class=\"text-danger\">3. AB negative(-ve):</h5>\r\n          <div class=\"progress m-4\">\r\n            <div class=\"progress-bar progress-bar-striped bg-danger progress-bar-animated\" style=\"width:15%\">15%</div>\r\n          </div>\r\n          <h5 class=\"text-warning\">4. A positive(+):</h5>\r\n          <div class=\"progress m-4\">\r\n            <div class=\"progress-bar progress-bar-striped bg-warning progress-bar-animated\" style=\"width:56%\">56%</div>\r\n          </div>\r\n          <h5 class=\"text-success\">5. B negative(-ve)</h5>\r\n          <div class=\"progress m-4\">\r\n            <div class=\"progress-bar progress-bar-striped bg-sucess progress-bar-animated\" style=\"width:68%\">68%</div>\r\n          </div>\r\n          <h5 class=\"text-danger\">6. AB positive(+)</h5>\r\n          <div class=\"progress m-4\">\r\n            <div class=\"progress-bar progress-bar-striped bg-danger progress-bar-animated\" style=\"width:25%\">19%</div>\r\n          </div>\r\n        </div>\r\n        <div class=\"card-text p-4\">\r\n          <p>You also have antibodies in the clear part of blood called plasma.\r\n            Antibodies are important in transfusion because they are the body’s natural defence system. They recognise\r\n            any ‘foreign’antigens and tell your immune system to destroy them.\r\n          </p>\r\n        </div>\r\n      </div>\r\n    </div>\r\n    <!-- FEEDBACK-COMMENTS-SECTION-->\r\n    <div class=\"container-fluid\">\r\n      <div class=\"container mt-4 mx-auto\">\r\n        <div class=\"row justify-content-around\">\r\n          <div class=\"media col-md-5 shadow-lg rounded-lg p-2 my-4 bg-white\">\r\n            <img src=\"/assets/images/img_avatar.png\" width=\"45px\" alt=\"Avatar\" alt=\"Avatar\"\r\n              class=\"avatar mr-3 mt-3 rounded-circle\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"text-primary\">Alexis Leon <small><i>Posted on June 3, 2020</i></small></h4>\r\n              <p class=\"feedback\"><q>By registering in this web application,I got the update about the victim for\r\n                  emergency\r\n                  donation.</q></p>\r\n            </div>\r\n          </div>\r\n          <div class=\"media col-md-5 rounded-lg shadow-lg bg-white p-2 my-4\">\r\n            <img src=\"/assets/images/img_avatar2.png\" width=\"45px\" alt=\"Avatar\" alt=\"Avatar\"\r\n              class=\"avatar mr-3 mt-3 rounded-circle\">\r\n            <div class=\"media-body\">\r\n              <h4 class=\"text-primary\">R.Sudha <small><i>Posted on July 10, 2020</i></small></h4>\r\n              <p class=\"feedback\"><q>This application provides a social interface to connect with donors and patients\r\n                  easily.</q></p>\r\n            </div>\r\n          </div>\r\n        </div>\r\n      </div>\r\n    </div>\r\n  </div>\r\n</body>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
    }

    function __classPrivateFieldGet(receiver, privateMap) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
      }

      return privateMap.get(receiver);
    }

    function __classPrivateFieldSet(receiver, privateMap, value) {
      if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
      }

      privateMap.set(receiver, value);
      return value;
    }
    /***/

  },

  /***/
  "./src/app/aboutus/aboutus.component.css":
  /*!***********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAboutusAboutusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Esteban&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Allura&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');\r\n/* TEXT STYLES */\r\np{\r\n    font-size:larger;\r\n    font-family: 'Esteban', serif;\r\n}\r\nq{\r\n    font-family: 'Major Mono Display', monospace;\r\n    color: #ff6739;\r\n    font-size:large;\r\n    font-weight:bolder;\r\n    letter-spacing: 0.5px;\r\n}\r\nb{\r\n    position:relative;\r\n    top:3px;\r\n    -webkit-animation:bounce .3s ease infinite alternate;\r\n            animation:bounce .3s ease infinite alternate; \r\n}\r\n.content{\r\n    font-family: 'Times New Roman', Times, serif;\r\n    color:white;\r\n}\r\nh1{\r\n    color:rgb(255, 78, 14);\r\n    font-family: 'Allura', cursive;\r\n    font-size:30px;\r\n    margin-bottom:15px;\r\n    text-align:center;\r\n    font-weight:bolder;\r\n    font-size:xxx-large;\r\n}\r\nh2{\r\n    font-weight:bold;\r\n    color: rgb(255, 78, 14);\r\n}\r\n.title{\r\n    font-family:'Times New Roman', Times, serif;\r\n    color:greenyellow;\r\n}\r\np.role{\r\n    font-weight:500;\r\n    color:#dbd1d1;\r\n}\r\n/* BOUNCE TEXT ANIMATION */\r\nb:nth-child(2){\r\n    -webkit-animation-delay:.1s;\r\n            animation-delay:.1s;\r\n}\r\nb:nth-child(3){\r\n    -webkit-animation-delay:.2s;\r\n            animation-delay:.2s;\r\n}\r\nb:nth-child(4){\r\n    -webkit-animation-delay:.3s;\r\n            animation-delay:.3s;\r\n}\r\n@-webkit-keyframes bounce{\r\n    100%{\r\n        top:-3px;\r\n    }\r\n}\r\n@keyframes bounce{\r\n    100%{\r\n        top:-3px;\r\n    }\r\n}\r\n/* SECTION-1 STYLES */\r\n.section_subtitle{\r\n    margin-bottom:7px;\r\n    padding-left:7px;\r\n    font-size:16px;\r\n    line-height:1;\r\n    text-transform:uppercase;\r\n    color:#aaaaaa;\r\n    border-left:3px solid rgb(23, 119, 136);\r\n    font-size:700;\r\n    font-family:tahoma;\r\n}\r\n.section_main_title{\r\n    margin-top:0px;\r\n    margin-bottom:3px;\r\n    font-size:30px;\r\n    line-height:1.27;\r\n    font-weight:300;\r\n}\r\n.divider{\r\n    width:250px;\r\n    margin-bottom:30px;\r\n}\r\n/* LAYOUT-3 TEAM STYLES */\r\n.team{\r\n    background-color:#2F3542;\r\n}\r\nimg{\r\n    border:3px solid white;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsNEVBQTRFO0FBQzVFLDJFQUEyRTtBQUMzRSx1RkFBdUY7QUFDdkYsZ0JBQWdCO0FBQ2hCO0lBQ0ksZ0JBQWdCO0lBQ2hCLDZCQUE2QjtBQUNqQztBQUNBO0lBQ0ksNENBQTRDO0lBQzVDLGNBQWM7SUFDZCxlQUFlO0lBQ2Ysa0JBQWtCO0lBQ2xCLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLE9BQU87SUFDUCxvREFBNEM7WUFBNUMsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSw0Q0FBNEM7SUFDNUMsV0FBVztBQUNmO0FBQ0E7SUFDSSxzQkFBc0I7SUFDdEIsOEJBQThCO0lBQzlCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGdCQUFnQjtJQUNoQix1QkFBdUI7QUFDM0I7QUFDQTtJQUNJLDJDQUEyQztJQUMzQyxpQkFBaUI7QUFDckI7QUFDQTtJQUNJLGVBQWU7SUFDZixhQUFhO0FBQ2pCO0FBQ0EsMEJBQTBCO0FBQzFCO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksMkJBQW1CO1lBQW5CLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7QUFDSjtBQUpBO0lBQ0k7UUFDSSxRQUFRO0lBQ1o7QUFDSjtBQUNBLHFCQUFxQjtBQUNyQjtJQUNJLGlCQUFpQjtJQUNqQixnQkFBZ0I7SUFDaEIsY0FBYztJQUNkLGFBQWE7SUFDYix3QkFBd0I7SUFDeEIsYUFBYTtJQUNiLHVDQUF1QztJQUN2QyxhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxjQUFjO0lBQ2QsaUJBQWlCO0lBQ2pCLGNBQWM7SUFDZCxnQkFBZ0I7SUFDaEIsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksV0FBVztJQUNYLGtCQUFrQjtBQUN0QjtBQUNBLHlCQUF5QjtBQUN6QjtJQUNJLHdCQUF3QjtBQUM1QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCIiwiZmlsZSI6InNyYy9hcHAvYWJvdXR1cy9hYm91dHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Fc3RlYmFuJmRpc3BsYXk9c3dhcCcpO1xyXG5AaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1BbGx1cmEmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1ham9yK01vbm8rRGlzcGxheSZkaXNwbGF5PXN3YXAnKTtcclxuLyogVEVYVCBTVFlMRVMgKi9cclxucHtcclxuICAgIGZvbnQtc2l6ZTpsYXJnZXI7XHJcbiAgICBmb250LWZhbWlseTogJ0VzdGViYW4nLCBzZXJpZjtcclxufVxyXG5xe1xyXG4gICAgZm9udC1mYW1pbHk6ICdNYWpvciBNb25vIERpc3BsYXknLCBtb25vc3BhY2U7XHJcbiAgICBjb2xvcjogI2ZmNjczOTtcclxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIGxldHRlci1zcGFjaW5nOiAwLjVweDtcclxufVxyXG5ie1xyXG4gICAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgICB0b3A6M3B4O1xyXG4gICAgYW5pbWF0aW9uOmJvdW5jZSAuM3MgZWFzZSBpbmZpbml0ZSBhbHRlcm5hdGU7IFxyXG59XHJcbi5jb250ZW50e1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbiAgICBjb2xvcjp3aGl0ZTtcclxufVxyXG5oMXtcclxuICAgIGNvbG9yOnJnYigyNTUsIDc4LCAxNCk7XHJcbiAgICBmb250LWZhbWlseTogJ0FsbHVyYScsIGN1cnNpdmU7XHJcbiAgICBmb250LXNpemU6MzBweDtcclxuICAgIG1hcmdpbi1ib3R0b206MTVweDtcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgZm9udC13ZWlnaHQ6Ym9sZGVyO1xyXG4gICAgZm9udC1zaXplOnh4eC1sYXJnZTtcclxufVxyXG5oMntcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICBjb2xvcjogcmdiKDI1NSwgNzgsIDE0KTtcclxufVxyXG4udGl0bGV7XHJcbiAgICBmb250LWZhbWlseTonVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gICAgY29sb3I6Z3JlZW55ZWxsb3c7XHJcbn1cclxucC5yb2xle1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgY29sb3I6I2RiZDFkMTtcclxufVxyXG4vKiBCT1VOQ0UgVEVYVCBBTklNQVRJT04gKi9cclxuYjpudGgtY2hpbGQoMil7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6LjFzO1xyXG59XHJcbmI6bnRoLWNoaWxkKDMpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5Oi4ycztcclxufVxyXG5iOm50aC1jaGlsZCg0KXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTouM3M7XHJcbn1cclxuQGtleWZyYW1lcyBib3VuY2V7XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRvcDotM3B4O1xyXG4gICAgfVxyXG59XHJcbi8qIFNFQ1RJT04tMSBTVFlMRVMgKi9cclxuLnNlY3Rpb25fc3VidGl0bGV7XHJcbiAgICBtYXJnaW4tYm90dG9tOjdweDtcclxuICAgIHBhZGRpbmctbGVmdDo3cHg7XHJcbiAgICBmb250LXNpemU6MTZweDtcclxuICAgIGxpbmUtaGVpZ2h0OjE7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTp1cHBlcmNhc2U7XHJcbiAgICBjb2xvcjojYWFhYWFhO1xyXG4gICAgYm9yZGVyLWxlZnQ6M3B4IHNvbGlkIHJnYigyMywgMTE5LCAxMzYpO1xyXG4gICAgZm9udC1zaXplOjcwMDtcclxuICAgIGZvbnQtZmFtaWx5OnRhaG9tYTtcclxufVxyXG4uc2VjdGlvbl9tYWluX3RpdGxle1xyXG4gICAgbWFyZ2luLXRvcDowcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjNweDtcclxuICAgIGZvbnQtc2l6ZTozMHB4O1xyXG4gICAgbGluZS1oZWlnaHQ6MS4yNztcclxuICAgIGZvbnQtd2VpZ2h0OjMwMDtcclxufVxyXG4uZGl2aWRlcntcclxuICAgIHdpZHRoOjI1MHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4O1xyXG59XHJcbi8qIExBWU9VVC0zIFRFQU0gU1RZTEVTICovXHJcbi50ZWFte1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojMkYzNTQyO1xyXG59XHJcbmltZ3tcclxuICAgIGJvcmRlcjozcHggc29saWQgd2hpdGU7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/aboutus/aboutus.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/aboutus/aboutus.component.ts ***!
    \**********************************************/

  /*! exports provided: AboutusComponent */

  /***/
  function srcAppAboutusAboutusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AboutusComponent", function () {
      return AboutusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AboutusComponent = /*#__PURE__*/function () {
      function AboutusComponent() {
        _classCallCheck(this, AboutusComponent);
      }

      _createClass(AboutusComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AboutusComponent;
    }();

    AboutusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-aboutus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./aboutus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/aboutus/aboutus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./aboutus.component.css */
      "./src/app/aboutus/aboutus.component.css"))["default"]]
    })], AboutusComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule, routingComponents */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "routingComponents", function () {
      return routingComponents;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./home/home.component */
    "./src/app/home/home.component.ts");
    /* harmony import */


    var _emergency_emergency_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./emergency/emergency.component */
    "./src/app/emergency/emergency.component.ts");
    /* harmony import */


    var _blooddonation_blooddonation_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./blooddonation/blooddonation.component */
    "./src/app/blooddonation/blooddonation.component.ts");
    /* harmony import */


    var _organdonation_organdonation_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./organdonation/organdonation.component */
    "./src/app/organdonation/organdonation.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _whytodonate_whytodonate_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./whytodonate/whytodonate.component */
    "./src/app/whytodonate/whytodonate.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./faq/faq.component */
    "./src/app/faq/faq.component.ts");
    /* harmony import */


    var _request_request_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./request/request.component */
    "./src/app/request/request.component.ts");
    /* harmony import */


    var _orequest_orequest_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./orequest/orequest.component */
    "./src/app/orequest/orequest.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./view-patients/view-patients.component */
    "./src/app/view-patients/view-patients.component.ts");
    /* harmony import */


    var _hsignup_hsignup_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./hsignup/hsignup.component */
    "./src/app/hsignup/hsignup.component.ts");
    /* harmony import */


    var _donordboard_donordboard_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./donordboard/donordboard.component */
    "./src/app/donordboard/donordboard.component.ts");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");

    var routes = [{
      path: '',
      redirectTo: '/home',
      pathMatch: 'full'
    }, {
      path: 'home',
      component: _home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]
    }, {
      path: 'home/login',
      component: _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"]
    }, {
      path: 'home/login/dashboard',
      component: _donordboard_donordboard_component__WEBPACK_IMPORTED_MODULE_18__["DonordboardComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    }, {
      path: 'home/login/dashboard/news',
      component: _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"],
      canActivate: [_auth_guard__WEBPACK_IMPORTED_MODULE_19__["AuthGuard"]]
    }, {
      path: 'home/login/signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
    }, {
      path: 'home/signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
    }, {
      path: 'home/emergency',
      component: _emergency_emergency_component__WEBPACK_IMPORTED_MODULE_4__["EmergencyComponent"]
    }, {
      path: 'home/blooddonation',
      component: _blooddonation_blooddonation_component__WEBPACK_IMPORTED_MODULE_5__["BlooddonationComponent"]
    }, {
      path: 'home/organdonation',
      component: _organdonation_organdonation_component__WEBPACK_IMPORTED_MODULE_6__["OrgandonationComponent"]
    }, {
      path: 'home/news',
      component: _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"]
    }, {
      path: 'home/whytodonate',
      component: _whytodonate_whytodonate_component__WEBPACK_IMPORTED_MODULE_8__["WhytodonateComponent"]
    }, {
      path: 'home/aboutus',
      component: _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"]
    }, {
      path: 'home/contactus',
      component: _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"]
    }, {
      path: 'home/faq',
      component: _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"]
    }, {
      path: 'home/emergency/request',
      component: _request_request_component__WEBPACK_IMPORTED_MODULE_12__["RequestComponent"]
    }, {
      path: 'home/emergency/request/:value',
      component: _view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_16__["ViewPatientsComponent"]
    }, {
      path: 'home/emergency/orequest',
      component: _orequest_orequest_component__WEBPACK_IMPORTED_MODULE_13__["OrequestComponent"]
    }, {
      path: 'home/emergency/orequest/:value',
      component: _view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_16__["ViewPatientsComponent"]
    }, {
      path: 'home/blooddonation/signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
    }, {
      path: 'home/organdonation/signup',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"]
    }, {
      path: 'home/hsignup',
      component: _hsignup_hsignup_component__WEBPACK_IMPORTED_MODULE_17__["HsignupComponent"]
    }, {
      path: '**',
      component: _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"]
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    var routingComponents = [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"], _emergency_emergency_component__WEBPACK_IMPORTED_MODULE_4__["EmergencyComponent"], _blooddonation_blooddonation_component__WEBPACK_IMPORTED_MODULE_5__["BlooddonationComponent"], _organdonation_organdonation_component__WEBPACK_IMPORTED_MODULE_6__["OrgandonationComponent"], _whytodonate_whytodonate_component__WEBPACK_IMPORTED_MODULE_8__["WhytodonateComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_9__["AboutusComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_10__["ContactusComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_11__["FaqComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_7__["NewsComponent"], _request_request_component__WEBPACK_IMPORTED_MODULE_12__["RequestComponent"], _orequest_orequest_component__WEBPACK_IMPORTED_MODULE_13__["OrequestComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_14__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_15__["SignupComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_20__["PageNotFoundComponent"]];
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'Major';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: MyHammerConfig, AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MyHammerConfig", function () {
      return MyHammerConfig;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _material_material_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./material/material.module */
    "./src/app/material/material.module.ts");
    /* harmony import */


    var _blooddonation_blooddonation_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./blooddonation/blooddonation.component */
    "./src/app/blooddonation/blooddonation.component.ts");
    /* harmony import */


    var _organdonation_organdonation_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./organdonation/organdonation.component */
    "./src/app/organdonation/organdonation.component.ts");
    /* harmony import */


    var _news_news_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./news/news.component */
    "./src/app/news/news.component.ts");
    /* harmony import */


    var _whytodonate_whytodonate_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./whytodonate/whytodonate.component */
    "./src/app/whytodonate/whytodonate.component.ts");
    /* harmony import */


    var _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./aboutus/aboutus.component */
    "./src/app/aboutus/aboutus.component.ts");
    /* harmony import */


    var _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./contactus/contactus.component */
    "./src/app/contactus/contactus.component.ts");
    /* harmony import */


    var _faq_faq_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./faq/faq.component */
    "./src/app/faq/faq.component.ts");
    /* harmony import */


    var _orequest_orequest_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./orequest/orequest.component */
    "./src/app/orequest/orequest.component.ts");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/signup/signup.component.ts");
    /* harmony import */


    var _view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./view-patients/view-patients.component */
    "./src/app/view-patients/view-patients.component.ts");
    /* harmony import */


    var _hsignup_hsignup_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./hsignup/hsignup.component */
    "./src/app/hsignup/hsignup.component.ts");
    /* harmony import */


    var _donordboard_donordboard_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./donordboard/donordboard.component */
    "./src/app/donordboard/donordboard.component.ts");
    /* harmony import */


    var _dprofile_dprofile_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./dprofile/dprofile.component */
    "./src/app/dprofile/dprofile.component.ts");
    /* harmony import */


    var _appform_appform_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./appform/appform.component */
    "./src/app/appform/appform.component.ts");
    /* harmony import */


    var _notify_notify_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./notify/notify.component */
    "./src/app/notify/notify.component.ts");
    /* harmony import */


    var _agm_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! @agm/core */
    "./node_modules/@agm/core/fesm2015/agm-core.js");
    /* harmony import */


    var _auth_guard__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./auth.guard */
    "./src/app/auth.guard.ts");
    /* harmony import */


    var _angular_fire__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! @angular/fire */
    "./node_modules/@angular/fire/es2015/index.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./page-not-found/page-not-found.component */
    "./src/app/page-not-found/page-not-found.component.ts");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_31___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_31__); // COMPONENTS


    var MyHammerConfig = /*#__PURE__*/function (_angular_platform_bro) {
      _inherits(MyHammerConfig, _angular_platform_bro);

      var _super = _createSuper(MyHammerConfig);

      function MyHammerConfig() {
        var _this;

        _classCallCheck(this, MyHammerConfig);

        _this = _super.apply(this, arguments);
        _this.overrides = {
          'swipe': {
            direction: hammerjs__WEBPACK_IMPORTED_MODULE_31__["DIRECTION_ALL"]
          }
        };
        return _this;
      }

      return MyHammerConfig;
    }(_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HammerGestureConfig"]); // FIREBASE AUTH CONFIG


    var firebaseConfig = {
      // For Firebase JS SDK v7.20.0 and later, measurementId is optional
      apiKey: "AIzaSyDY1QX-ZzUwRr8BDIwt2FQHWYG0-LmH8zU",
      authDomain: "blooddonation-bf54c.firebaseapp.com",
      databaseURL: "https://blooddonation-bf54c.firebaseio.com",
      projectId: "blooddonation-bf54c",
      storageBucket: "blooddonation-bf54c.appspot.com",
      messagingSenderId: "1030357417339",
      appId: "1:1030357417339:web:94b6d4085a7e86e511d1de",
      measurementId: "G-PWYSL42CMR"
    };

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["routingComponents"], _blooddonation_blooddonation_component__WEBPACK_IMPORTED_MODULE_9__["BlooddonationComponent"], _organdonation_organdonation_component__WEBPACK_IMPORTED_MODULE_10__["OrgandonationComponent"], _view_patients_view_patients_component__WEBPACK_IMPORTED_MODULE_19__["ViewPatientsComponent"], _news_news_component__WEBPACK_IMPORTED_MODULE_11__["NewsComponent"], _whytodonate_whytodonate_component__WEBPACK_IMPORTED_MODULE_12__["WhytodonateComponent"], _aboutus_aboutus_component__WEBPACK_IMPORTED_MODULE_13__["AboutusComponent"], _contactus_contactus_component__WEBPACK_IMPORTED_MODULE_14__["ContactusComponent"], _faq_faq_component__WEBPACK_IMPORTED_MODULE_15__["FaqComponent"], _orequest_orequest_component__WEBPACK_IMPORTED_MODULE_16__["OrequestComponent"], _login_login_component__WEBPACK_IMPORTED_MODULE_17__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_18__["SignupComponent"], _hsignup_hsignup_component__WEBPACK_IMPORTED_MODULE_20__["HsignupComponent"], _donordboard_donordboard_component__WEBPACK_IMPORTED_MODULE_21__["DonordboardComponent"], _dprofile_dprofile_component__WEBPACK_IMPORTED_MODULE_22__["DprofileComponent"], _appform_appform_component__WEBPACK_IMPORTED_MODULE_23__["AppformComponent"], _notify_notify_component__WEBPACK_IMPORTED_MODULE_24__["NotifyComponent"], _page_not_found_page_not_found_component__WEBPACK_IMPORTED_MODULE_30__["PageNotFoundComponent"]],
      entryComponents: [_dprofile_dprofile_component__WEBPACK_IMPORTED_MODULE_22__["DprofileComponent"], _appform_appform_component__WEBPACK_IMPORTED_MODULE_23__["AppformComponent"], _notify_notify_component__WEBPACK_IMPORTED_MODULE_24__["NotifyComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ReactiveFormsModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"], _material_material_module__WEBPACK_IMPORTED_MODULE_8__["MaterialModule"], _agm_core__WEBPACK_IMPORTED_MODULE_25__["AgmCoreModule"].forRoot({
        apiKey: 'AIzaSyDY1QX-ZzUwRr8BDIwt2FQHWYG0-LmH8zU'
      }), _angular_fire__WEBPACK_IMPORTED_MODULE_27__["AngularFireModule"].initializeApp(firebaseConfig)],
      providers: [_auth_guard__WEBPACK_IMPORTED_MODULE_26__["AuthGuard"], _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_29__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_28__["AngularFireAuth"], {
        provide: _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["HAMMER_GESTURE_CONFIG"],
        useClass: MyHammerConfig
      }],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/appform/appform.component.css":
  /*!***********************************************!*\
    !*** ./src/app/appform/appform.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppformAppformComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcGZvcm0vYXBwZm9ybS5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/appform/appform.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/appform/appform.component.ts ***!
    \**********************************************/

  /*! exports provided: AppformComponent */

  /***/
  function srcAppAppformAppformComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppformComponent", function () {
      return AppformComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var AppformComponent = /*#__PURE__*/function () {
      function AppformComponent(fb, snackBar, router, user) {
        _classCallCheck(this, AppformComponent);

        this.fb = fb;
        this.snackBar = snackBar;
        this.router = router;
        this.user = user;
        this.requestForm = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]*')]],
          email: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{10}$')]],
          gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          age: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]],
          hospital: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          bloodGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          date: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(AppformComponent, [{
        key: "saveRequest",
        value: function saveRequest() {
          var _this2 = this;

          this.openSpinner();
          this.user.sendForm(this.requestForm.value).subscribe(function (data) {
            return console.log(data, "Successfully submitted!", _this2.submitted = true);
          }, function (error) {
            return console.log(error, _this2.submitted = false);
          });
        }
      }, {
        key: "openSpinner",
        value: function openSpinner() {
          var _this3 = this;

          this.isLoading = true;
          setTimeout(function () {
            _this3.isLoading = false;

            if (_this3.submitted == true) {
              _this3.openSnackBar("Form Submitted", 'Dismiss');
            }
          }, 1000);
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return AppformComponent;
    }();

    AppformComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    AppformComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-appform',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./appform.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/appform/appform.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./appform.component.css */
      "./src/app/appform/appform.component.css"))["default"]]
    })], AppformComponent);
    /***/
  },

  /***/
  "./src/app/auth.guard.ts":
  /*!*******************************!*\
    !*** ./src/app/auth.guard.ts ***!
    \*******************************/

  /*! exports provided: AuthGuard */

  /***/
  function srcAppAuthGuardTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthGuard", function () {
      return AuthGuard;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./services */
    "./src/app/services/index.ts");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthGuard = /*#__PURE__*/function () {
      function AuthGuard(auth, authService, router) {
        _classCallCheck(this, AuthGuard);

        this.auth = auth;
        this.authService = authService;
        this.router = router;
      }

      _createClass(AuthGuard, [{
        key: "canActivate",
        value: function canActivate() {
          var _this4 = this;

          if (this.authService.currentUserValue) {
            return true;
          } else if (this.auth.user) {
            console.log(this.auth.user);
            return this.auth.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["map"])(function (user) {
              return !!user;
            }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["tap"])(function (loggedIn) {
              if (!loggedIn) {
                console.log("Google access denied");

                _this4.router.navigate(['/home/login']);
              }
            }));
          } else {
            this.router.navigate(['/home/login']);
            console.log("Access Denied");
            return false;
          }
        }
      }]);

      return AuthGuard;
    }();

    AuthGuard.ctorParameters = function () {
      return [{
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthGuard);
    /***/
  },

  /***/
  "./src/app/blooddonation/blooddonation.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/blooddonation/blooddonation.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppBlooddonationBlooddonationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n/* MAIN BACKGROUND */\r\nbody,.container-fluid{\r\n    background: #0f0c29;  /* fallback for old browsers */\r\n    background: linear-gradient(to right, #8e2de2, #4a00e0); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */\r\n}\r\n/* TEXT STYLES */\r\nh2,h4{\r\n    font-family: 'Julius Sans One', sans-serif;\r\n    font-weight:600;\r\n}\r\nhr{\r\n    width:60%;\r\n    background-color: crimson;\r\n}\r\n.card-text{\r\n    font-family:'Montserrat', sans-serif;\r\n    font-size:large;\r\n    font-weight:500;\r\n}\r\n/* BUBBLES ANIMATION */\r\n.box div{\r\n    position:absolute;\r\n    width:70px;\r\n    height:70px;\r\n  }\r\n.box div:nth-child(1){\r\n    top:87%;\r\n    left:6%;\r\n    background-color:rgb(255, 221, 28);\r\n    -webkit-animation:animate 11s linear infinite;\r\n            animation:animate 11s linear infinite;\r\n    border-radius:50%;\r\n  }\r\n.box div:nth-child(2){\r\n    top:35%;\r\n    left:8%;\r\n    background-color:rgb(39, 130, 250);\r\n    -webkit-animation:animate 12s linear infinite;\r\n            animation:animate 12s linear infinite;\r\n  }\r\n.box div:nth-child(3){\r\n    top:40%;\r\n    left:79%;\r\n    background-color: rgb(255, 86, 86);\r\n    -webkit-animation:animate 6s linear infinite;\r\n            animation:animate 6s linear infinite;\r\n    border-radius:50%;\r\n  }\r\n.box div:nth-child(4){\r\n    top:10%;\r\n    left:5%;\r\n    background-color:#fd3477;\r\n    -webkit-animation:animate 11s linear infinite;\r\n            animation:animate 11s linear infinite;\r\n    border-radius:50%;\r\n  }\r\n.box div:nth-child(5){\r\n    top:80%;\r\n    left:77%;\r\n    background-color:rgb(61, 215, 253); \r\n    -webkit-animation:animate 8s linear infinite; \r\n            animation:animate 8s linear infinite;\r\n  }\r\n@-webkit-keyframes animate{\r\n    0%{\r\n      transform: scale(0) translateY(0) rotate(0);\r\n      opacity:1;\r\n    }\r\n    100%{\r\n      transform: scale(1.0) translateY(-90px) rotate(360deg);\r\n      opacity:0;\r\n    }\r\n  }\r\n@keyframes animate{\r\n    0%{\r\n      transform: scale(0) translateY(0) rotate(0);\r\n      opacity:1;\r\n    }\r\n    100%{\r\n      transform: scale(1.0) translateY(-90px) rotate(360deg);\r\n      opacity:0;\r\n    }\r\n  }\r\nagm-map{\r\n    width:300px;\r\n    height: 300px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYmxvb2Rkb25hdGlvbi9ibG9vZGRvbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GO0FBQ3BGLCtFQUErRTtBQUMvRSxvQkFBb0I7QUFDcEI7SUFDSSxtQkFBbUIsR0FBRyw4QkFBOEI7SUFDcEQsdURBQXVELEVBQUUscUVBQXFFO0FBQ2xJO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLFNBQVM7SUFDVCx5QkFBeUI7QUFDN0I7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBLHNCQUFzQjtBQUNwQjtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0E7SUFDRSxPQUFPO0lBQ1AsT0FBTztJQUNQLGtDQUFrQztJQUNsQyw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsT0FBTztJQUNQLE9BQU87SUFDUCxrQ0FBa0M7SUFDbEMsNkNBQXFDO1lBQXJDLHFDQUFxQztFQUN2QztBQUNBO0lBQ0UsT0FBTztJQUNQLFFBQVE7SUFDUixrQ0FBa0M7SUFDbEMsNENBQW9DO1lBQXBDLG9DQUFvQztJQUNwQyxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLE9BQU87SUFDUCxPQUFPO0lBQ1Asd0JBQXdCO0lBQ3hCLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGtDQUFrQztJQUNsQyw0Q0FBb0M7WUFBcEMsb0NBQW9DO0VBQ3RDO0FBQ0E7SUFDRTtNQUNFLDJDQUEyQztNQUMzQyxTQUFTO0lBQ1g7SUFDQTtNQUNFLHNEQUFzRDtNQUN0RCxTQUFTO0lBQ1g7RUFDRjtBQVRBO0lBQ0U7TUFDRSwyQ0FBMkM7TUFDM0MsU0FBUztJQUNYO0lBQ0E7TUFDRSxzREFBc0Q7TUFDdEQsU0FBUztJQUNYO0VBQ0Y7QUFFRjtJQUNJLFdBQVc7SUFDWCxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvYmxvb2Rkb25hdGlvbi9ibG9vZGRvbmF0aW9uLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KdWxpdXMrU2FucytPbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XHJcbi8qIE1BSU4gQkFDS0dST1VORCAqL1xyXG5ib2R5LC5jb250YWluZXItZmx1aWR7XHJcbiAgICBiYWNrZ3JvdW5kOiAjMGYwYzI5OyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjOGUyZGUyLCAjNGEwMGUwKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqL1xyXG59XHJcbi8qIFRFWFQgU1RZTEVTICovXHJcbmgyLGg0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbmhye1xyXG4gICAgd2lkdGg6NjAlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogY3JpbXNvbjtcclxufVxyXG4uY2FyZC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOmxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG59XHJcbi8qIEJVQkJMRVMgQU5JTUFUSU9OICovXHJcbiAgLmJveCBkaXZ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBoZWlnaHQ6NzBweDtcclxuICB9XHJcbiAgLmJveCBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gICAgdG9wOjg3JTtcclxuICAgIGxlZnQ6NiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNTUsIDIyMSwgMjgpO1xyXG4gICAgYW5pbWF0aW9uOmFuaW1hdGUgMTFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIH1cclxuICAuYm94IGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICB0b3A6MzUlO1xyXG4gICAgbGVmdDo4JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDM5LCAxMzAsIDI1MCk7XHJcbiAgICBhbmltYXRpb246YW5pbWF0ZSAxMnMgbGluZWFyIGluZmluaXRlO1xyXG4gIH1cclxuICAuYm94IGRpdjpudGgtY2hpbGQoMyl7XHJcbiAgICB0b3A6NDAlO1xyXG4gICAgbGVmdDo3OSU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA4NiwgODYpO1xyXG4gICAgYW5pbWF0aW9uOmFuaW1hdGUgNnMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgYm9yZGVyLXJhZGl1czo1MCU7XHJcbiAgfVxyXG4gIC5ib3ggZGl2Om50aC1jaGlsZCg0KXtcclxuICAgIHRvcDoxMCU7XHJcbiAgICBsZWZ0OjUlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmQzNDc3O1xyXG4gICAgYW5pbWF0aW9uOmFuaW1hdGUgMTFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIH1cclxuICAuYm94IGRpdjpudGgtY2hpbGQoNSl7XHJcbiAgICB0b3A6ODAlO1xyXG4gICAgbGVmdDo3NyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYig2MSwgMjE1LCAyNTMpOyBcclxuICAgIGFuaW1hdGlvbjphbmltYXRlIDhzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBhbmltYXRle1xyXG4gICAgMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWSgwKSByb3RhdGUoMCk7XHJcbiAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKSB0cmFuc2xhdGVZKC05MHB4KSByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbmFnbS1tYXB7XHJcbiAgICB3aWR0aDozMDBweDtcclxuICAgIGhlaWdodDogMzAwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/blooddonation/blooddonation.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/blooddonation/blooddonation.component.ts ***!
    \**********************************************************/

  /*! exports provided: BlooddonationComponent */

  /***/
  function srcAppBlooddonationBlooddonationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlooddonationComponent", function () {
      return BlooddonationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _keyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keyframes */
    "./src/app/blooddonation/keyframes.ts");

    var BlooddonationComponent = /*#__PURE__*/function () {
      function BlooddonationComponent() {
        _classCallCheck(this, BlooddonationComponent);

        this.latitude = 17.4274;
        this.longitude = 78.4189;
      } // (mapClick)=Needs Billing account


      _createClass(BlooddonationComponent, [{
        key: "goback",
        value: function goback() {
          window.history.back();
        }
      }, {
        key: "startAnimation",
        value: function startAnimation(state) {
          if (!this.animationState) {
            this.animationState = state;
          }
        }
      }, {
        key: "resetAnimationState",
        value: function resetAnimationState() {
          this.animationState = '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "onChooseLoc",
        value: function onChooseLoc(event) {
          console.log(event);
        }
      }]);

      return BlooddonationComponent;
    }();

    BlooddonationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blooddonation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blooddonation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/blooddonation/blooddonation.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardAnimator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => tada', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["tada"]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => fadeL', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["fadeLeft"]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => fadeR', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["fadeRight"]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => jello', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["jello"])))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blooddonation.component.css */
      "./src/app/blooddonation/blooddonation.component.css"))["default"]]
    })], BlooddonationComponent);
    /***/
  },

  /***/
  "./src/app/blooddonation/keyframes.ts":
  /*!********************************************!*\
    !*** ./src/app/blooddonation/keyframes.ts ***!
    \********************************************/

  /*! exports provided: tada, fadeLeft, fadeRight, jello */

  /***/
  function srcAppBlooddonationKeyframesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tada", function () {
      return tada;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeLeft", function () {
      return fadeLeft;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "fadeRight", function () {
      return fadeRight;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jello", function () {
      return jello;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var tada = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      offset: .1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      offset: .2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: .3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: .4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: .5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: .6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: .7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: .8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: .9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'none',
      offset: 1
    })];
    var fadeLeft = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1,
      offset: .0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0,
      transform: 'translate3d(-100%,0,0)',
      offset: 1
    })];
    var fadeRight = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 1,
      offset: .0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      opacity: 0,
      transform: 'translate3d(100%,0,0)',
      offset: 1
    })];
    var jello = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(-12.5deg) skewY(-12.5deg)',
      offset: .22
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(6.25deg) skewY(6.25deg)',
      offset: .33
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(-3.125deg) skewY(-3.125deg)',
      offset: .44
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(1.5625deg) skewY(1.5625deg)',
      offset: .55
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
      offset: .66
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(0.390625deg) skewY(0.390625deg)',
      offset: .77
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
      offset: .88
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'none',
      offset: 1
    })];
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.css":
  /*!***************************************************!*\
    !*** ./src/app/contactus/contactus.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppContactusContactusComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MAIN BACKGROUND */\r\n.container-fluid{\r\n  background:rgb(248, 248, 248);\r\n}\r\n/* TEXT STYLES */\r\nh2{\r\n  color:#e91e63;\r\n  font-family: 'Times New Roman', Times, serif;\r\n}\r\nh5{\r\n  font-family:'Courier New', Courier, monospace;\r\n  font-weight:bold;\r\n}\r\n/* FORM STYLES */\r\nlabel{\r\n  color:rgb(15, 14, 14);\r\n}\r\nhr{\r\n  width:60%;\r\n}\r\nmat-progress-spinner{\r\n  position:absolute;\r\n  left:60%;\r\n}\r\n.form-control{\r\n  border-radius:30px !important;\r\n  box-shadow: inset 2px 2px 5px #babecc,\r\n              inset -5px -5px 5px #ffffff73\r\n}\r\n/* BUBBLES ANIMATION */\r\n.wrapper{\r\n  position:absolute;\r\n  width: 100%;\r\n  height: 100%;\r\n  overflow:hidden;\r\n}\r\n.box div{\r\n  position:absolute;\r\n  width:60px;\r\n  height:60px;\r\n  border-radius:50%;\r\n}\r\n.box div:nth-child(1){\r\n  top:70%;\r\n  left:10%;\r\n  background-color: rgb(41, 7, 133);\r\n  -webkit-animation:animate 11s linear infinite;\r\n          animation:animate 11s linear infinite;\r\n}\r\n.box div:nth-child(2){\r\n  top:35%;\r\n  left:16%;\r\n  background-color:#fd3477;\r\n  -webkit-animation:animate 12s linear infinite;\r\n          animation:animate 12s linear infinite;\r\n}\r\n.box div:nth-child(3){\r\n  top:40%;\r\n  left:80%;\r\n  background-color: rgb(52, 245, 78);\r\n  -webkit-animation:animate 12s linear infinite;\r\n          animation:animate 12s linear infinite;\r\n}\r\n.box div:nth-child(4){\r\n  top:70%;\r\n  left:85%;\r\n  background-color:rgb(248, 218, 47);\r\n  -webkit-animation:animate 11s linear infinite;\r\n          animation:animate 11s linear infinite;\r\n}\r\n.box div:nth-child(5){\r\n  top:10%;\r\n  left:5%;\r\n  background-color:rgb(39, 130, 250);\r\n  -webkit-animation:animate 11s linear infinite;\r\n          animation:animate 11s linear infinite;\r\n}\r\n.box div:nth-child(6){\r\n  top:10%;\r\n  left:85%;\r\n  background-color:orangered;\r\n  -webkit-animation:animate 11s linear infinite;\r\n          animation:animate 11s linear infinite;\r\n}\r\n@-webkit-keyframes animate{\r\n  0%{\r\n    transform: scale(0) translateY(0) rotate(0);\r\n    opacity:1;\r\n  }\r\n  100%{\r\n    transform: scale(1.3) translateY(-90px) rotate(360deg);\r\n    opacity:0;\r\n  }\r\n}\r\n@keyframes animate{\r\n  0%{\r\n    transform: scale(0) translateY(0) rotate(0);\r\n    opacity:1;\r\n  }\r\n  100%{\r\n    transform: scale(1.3) translateY(-90px) rotate(360deg);\r\n    opacity:0;\r\n  }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29udGFjdHVzL2NvbnRhY3R1cy5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG9CQUFvQjtBQUNwQjtFQUNFLDZCQUE2QjtBQUMvQjtBQUNBLGdCQUFnQjtBQUNoQjtFQUNFLGFBQWE7RUFDYiw0Q0FBNEM7QUFDOUM7QUFDQTtFQUNFLDZDQUE2QztFQUM3QyxnQkFBZ0I7QUFDbEI7QUFDQSxnQkFBZ0I7QUFDaEI7RUFDRSxxQkFBcUI7QUFDdkI7QUFDQTtFQUNFLFNBQVM7QUFDWDtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFFBQVE7QUFDVjtBQUNBO0VBQ0UsNkJBQTZCO0VBQzdCOztBQUVGO0FBQ0Esc0JBQXNCO0FBQ3RCO0VBQ0UsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLFVBQVU7RUFDVixXQUFXO0VBQ1gsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLGlDQUFpQztFQUNqQyw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLHdCQUF3QjtFQUN4Qiw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLGtDQUFrQztFQUNsQyw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLGtDQUFrQztFQUNsQyw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsT0FBTztFQUNQLGtDQUFrQztFQUNsQyw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsUUFBUTtFQUNSLDBCQUEwQjtFQUMxQiw2Q0FBcUM7VUFBckMscUNBQXFDO0FBQ3ZDO0FBQ0E7RUFDRTtJQUNFLDJDQUEyQztJQUMzQyxTQUFTO0VBQ1g7RUFDQTtJQUNFLHNEQUFzRDtJQUN0RCxTQUFTO0VBQ1g7QUFDRjtBQVRBO0VBQ0U7SUFDRSwyQ0FBMkM7SUFDM0MsU0FBUztFQUNYO0VBQ0E7SUFDRSxzREFBc0Q7SUFDdEQsU0FBUztFQUNYO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb250YWN0dXMvY29udGFjdHVzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBNQUlOIEJBQ0tHUk9VTkQgKi9cclxuLmNvbnRhaW5lci1mbHVpZHtcclxuICBiYWNrZ3JvdW5kOnJnYigyNDgsIDI0OCwgMjQ4KTtcclxufVxyXG4vKiBURVhUIFNUWUxFUyAqL1xyXG5oMntcclxuICBjb2xvcjojZTkxZTYzO1xyXG4gIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG59XHJcbmg1e1xyXG4gIGZvbnQtZmFtaWx5OidDb3VyaWVyIE5ldycsIENvdXJpZXIsIG1vbm9zcGFjZTtcclxuICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi8qIEZPUk0gU1RZTEVTICovXHJcbmxhYmVse1xyXG4gIGNvbG9yOnJnYigxNSwgMTQsIDE0KTtcclxufVxyXG5ocntcclxuICB3aWR0aDo2MCU7XHJcbn1cclxubWF0LXByb2dyZXNzLXNwaW5uZXJ7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgbGVmdDo2MCU7XHJcbn1cclxuLmZvcm0tY29udHJvbHtcclxuICBib3JkZXItcmFkaXVzOjMwcHggIWltcG9ydGFudDtcclxuICBib3gtc2hhZG93OiBpbnNldCAycHggMnB4IDVweCAjYmFiZWNjLFxyXG4gICAgICAgICAgICAgIGluc2V0IC01cHggLTVweCA1cHggI2ZmZmZmZjczXHJcbn1cclxuLyogQlVCQkxFUyBBTklNQVRJT04gKi9cclxuLndyYXBwZXJ7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG4gIG92ZXJmbG93OmhpZGRlbjtcclxufVxyXG4uYm94IGRpdntcclxuICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICB3aWR0aDo2MHB4O1xyXG4gIGhlaWdodDo2MHB4O1xyXG4gIGJvcmRlci1yYWRpdXM6NTAlO1xyXG59XHJcbi5ib3ggZGl2Om50aC1jaGlsZCgxKXtcclxuICB0b3A6NzAlO1xyXG4gIGxlZnQ6MTAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig0MSwgNywgMTMzKTtcclxuICBhbmltYXRpb246YW5pbWF0ZSAxMXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5ib3ggZGl2Om50aC1jaGlsZCgyKXtcclxuICB0b3A6MzUlO1xyXG4gIGxlZnQ6MTYlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6I2ZkMzQ3NztcclxuICBhbmltYXRpb246YW5pbWF0ZSAxMnMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbi5ib3ggZGl2Om50aC1jaGlsZCgzKXtcclxuICB0b3A6NDAlO1xyXG4gIGxlZnQ6ODAlO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYig1MiwgMjQ1LCA3OCk7XHJcbiAgYW5pbWF0aW9uOmFuaW1hdGUgMTJzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG4uYm94IGRpdjpudGgtY2hpbGQoNCl7XHJcbiAgdG9wOjcwJTtcclxuICBsZWZ0Ojg1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyNDgsIDIxOCwgNDcpO1xyXG4gIGFuaW1hdGlvbjphbmltYXRlIDExcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLmJveCBkaXY6bnRoLWNoaWxkKDUpe1xyXG4gIHRvcDoxMCU7XHJcbiAgbGVmdDo1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigzOSwgMTMwLCAyNTApO1xyXG4gIGFuaW1hdGlvbjphbmltYXRlIDExcyBsaW5lYXIgaW5maW5pdGU7XHJcbn1cclxuLmJveCBkaXY6bnRoLWNoaWxkKDYpe1xyXG4gIHRvcDoxMCU7XHJcbiAgbGVmdDo4NSU7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjpvcmFuZ2VyZWQ7XHJcbiAgYW5pbWF0aW9uOmFuaW1hdGUgMTFzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIGFuaW1hdGV7XHJcbiAgMCV7XHJcbiAgICB0cmFuc2Zvcm06IHNjYWxlKDApIHRyYW5zbGF0ZVkoMCkgcm90YXRlKDApO1xyXG4gICAgb3BhY2l0eToxO1xyXG4gIH1cclxuICAxMDAle1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgxLjMpIHRyYW5zbGF0ZVkoLTkwcHgpIHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgb3BhY2l0eTowO1xyXG4gIH1cclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/contactus/contactus.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/contactus/contactus.component.ts ***!
    \**************************************************/

  /*! exports provided: ContactusComponent */

  /***/
  function srcAppContactusContactusComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ContactusComponent", function () {
      return ContactusComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _models_contact__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/contact */
    "./src/app/models/contact.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var ContactusComponent = /*#__PURE__*/function () {
      function ContactusComponent(route, user, snackBar) {
        _classCallCheck(this, ContactusComponent);

        this.route = route;
        this.user = user;
        this.snackBar = snackBar;
        this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
        this.submitted = false;
      }

      _createClass(ContactusComponent, [{
        key: "goback",
        value: function goback() {
          window.history.back();
        }
      }, {
        key: "con",
        value: function con() {
          this.submitted = false;
          this.contact = new _models_contact__WEBPACK_IMPORTED_MODULE_2__["Contact"]();
        }
      }, {
        key: "save",
        value: function save() {
          var _this5 = this;

          this.openSpinner();
          this.user.sendContact(this.contact).subscribe(function (data) {
            return console.log(data, _this5.submitted = true);
          }, function (error) {
            console.log(error), _this5.submitted = false;
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "openSpinner",
        value: function openSpinner() {
          var _this6 = this;

          this.isLoading = true;
          setTimeout(function () {
            _this6.isLoading = false;

            if (_this6.submitted == true) {
              _this6.openSnackBar("Message Submitted", 'Dismiss');
            }
          }, 1000);
        }
      }, {
        key: "openSnackBar",
        value: function openSnackBar(message, action) {
          this.snackBar.open(message, action);

          if (action == 'Dismiss') {
            this.route.navigate(['/home']);
          }
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.save();
        }
      }]);

      return ContactusComponent;
    }();

    ContactusComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_5__["MatSnackBar"]
      }];
    };

    ContactusComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-contactus',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./contactus.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/contactus/contactus.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./contactus.component.css */
      "./src/app/contactus/contactus.component.css"))["default"]]
    })], ContactusComponent);
    /***/
  },

  /***/
  "./src/app/donordboard/donordboard.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/donordboard/donordboard.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDonordboardDonordboardComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');\r\nbody{\r\n    background-color:#fafafa !important;\r\n}\r\n/* TEXT STYLE */\r\nh1{\r\n    font-family:'Times New Roman', Times, serif;\r\n}\r\nh3{\r\n    font-family:'Raleway', sans-serif;\r\n}\r\n.menu{\r\n    position:absolute;\r\n}\r\n/* CARD STYLES */\r\n.card{\r\nposition:relative;\r\n}\r\n.sub-card{\r\n    float:right;\r\n    width:65px;\r\n    height:30px;\r\n}\r\n.sub-icon{\r\n    position:absolute;\r\n    padding-left:10px;\r\n}\r\n@media(min-width:992px){\r\n    .chart{\r\n        width:40vw;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZG9ub3JkYm9hcmQvZG9ub3JkYm9hcmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxxRkFBcUY7QUFDckY7SUFDSSxtQ0FBbUM7QUFDdkM7QUFDQSxlQUFlO0FBQ2Y7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLGlDQUFpQztBQUNyQztBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7QUFDZjtBQUNBO0lBQ0ksaUJBQWlCO0lBQ2pCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0k7UUFDSSxVQUFVO0lBQ2Q7QUFDSiIsImZpbGUiOiJzcmMvYXBwL2Rvbm9yZGJvYXJkL2Rvbm9yZGJvYXJkLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1SYWxld2F5OndnaHRANTAwJmRpc3BsYXk9c3dhcCcpO1xyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZmFmYWZhICFpbXBvcnRhbnQ7XHJcbn1cclxuLyogVEVYVCBTVFlMRSAqL1xyXG5oMXtcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuaDN7XHJcbiAgICBmb250LWZhbWlseTonUmFsZXdheScsIHNhbnMtc2VyaWY7XHJcbn1cclxuLm1lbnV7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxufVxyXG4vKiBDQVJEIFNUWUxFUyAqL1xyXG4uY2FyZHtcclxucG9zaXRpb246cmVsYXRpdmU7XHJcbn1cclxuLnN1Yi1jYXJke1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICB3aWR0aDo2NXB4O1xyXG4gICAgaGVpZ2h0OjMwcHg7XHJcbn1cclxuLnN1Yi1pY29ue1xyXG4gICAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MTBweDtcclxufVxyXG5AbWVkaWEobWluLXdpZHRoOjk5MnB4KXtcclxuICAgIC5jaGFydHtcclxuICAgICAgICB3aWR0aDo0MHZ3O1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/donordboard/donordboard.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/donordboard/donordboard.component.ts ***!
    \******************************************************/

  /*! exports provided: DonordboardComponent */

  /***/
  function srcAppDonordboardDonordboardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DonordboardComponent", function () {
      return DonordboardComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! node_modules/chart.js */
    "./node_modules/chart.js/dist/Chart.js");
    /* harmony import */


    var node_modules_chart_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(node_modules_chart_js__WEBPACK_IMPORTED_MODULE_7__);
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _dprofile_dprofile_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ../dprofile/dprofile.component */
    "./src/app/dprofile/dprofile.component.ts");
    /* harmony import */


    var _appform_appform_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ../appform/appform.component */
    "./src/app/appform/appform.component.ts");
    /* harmony import */


    var _notify_notify_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ../notify/notify.component */
    "./src/app/notify/notify.component.ts");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var DonordboardComponent = /*#__PURE__*/function () {
      function DonordboardComponent(router, auth, authentication, dialog, user) {
        var _this7 = this;

        _classCallCheck(this, DonordboardComponent);

        this.router = router;
        this.auth = auth;
        this.authentication = authentication;
        this.dialog = dialog;
        this.user = user;
        this.opened = false;
        this.text = "text-center";
        this.currentUserSubscription = this.authentication.currentUser.subscribe(function (user) {
          _this7.currentUser = user;
        });

        if (this.currentUser.role == 'hospital') {
          this.user.getAppointments().subscribe(function (data) {
            _this7.appdata = data, _this7.Hname = _this7.appdata[0].hospital;
          }, function (error) {
            return console.log(error);
          });
        }
      }

      _createClass(DonordboardComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.showchart();
          this.nextChart();
          this.count();
          this.notifCount = 1;
        }
      }, {
        key: "openProfile",
        value: function openProfile() {
          this.dialog.open(_dprofile_dprofile_component__WEBPACK_IMPORTED_MODULE_9__["DprofileComponent"]);
        }
      }, {
        key: "showNotify",
        value: function showNotify() {
          this.notifCount = 0;
          this.dialog.open(_notify_notify_component__WEBPACK_IMPORTED_MODULE_11__["NotifyComponent"]);
        }
      }, {
        key: "bookAppointment",
        value: function bookAppointment() {
          this.dialog.open(_appform_appform_component__WEBPACK_IMPORTED_MODULE_10__["AppformComponent"]);
        }
      }, {
        key: "count",
        value: function count() {
          var _this8 = this;

          this.user.count().subscribe(function (count) {
            _this8.value = count;
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "signOut",
        value: function signOut() {
          if (this.auth.user) {
            this.auth.signOut();
          }

          if (this.currentUser) {
            this.authentication.logout();
            this.router.navigate(['/home/login']);
          }
        }
      }, {
        key: "showchart",
        value: function showchart() {
          var ctx = document.getElementById('myChart');
          var chart = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"](ctx, {
            // The type of chart we want to create
            type: 'bar',
            // The data for our dataset
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [{
                label: 'Patients Attended',
                backgroundColor: 'rgb(255,134, 53)',
                borderColor: 'rgb(255,134, 53)',
                data: [5, 10, 15, 2, 40, 22, 30, 28, 12, 25, 50, 80]
              }]
            },
            // Configuration options go here
            options: {}
          });
        }
      }, {
        key: "nextChart",
        value: function nextChart() {
          var ctx = document.getElementById('chart1');
          var chart = new node_modules_chart_js__WEBPACK_IMPORTED_MODULE_7__["Chart"](ctx, {
            // The type of chart we want to create
            type: 'line',
            // The data for our dataset
            data: {
              labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
              datasets: [{
                label: 'Attended Events',
                backgroundColor: 'rgb(255,80, 80)',
                borderColor: 'rgb(255,80, 80)',
                data: [0, 10, 5, 33, 25, 28, 40, 12, 25, 50, 80, 35]
              }]
            },
            // Configuration options go here
            options: {}
          });
        }
      }]);

      return DonordboardComponent;
    }();

    DonordboardComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_8__["MatDialog"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_12__["UserService"]
      }];
    };

    DonordboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-donordboard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./donordboard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/donordboard/donordboard.component.html"))["default"],
      providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./donordboard.component.css */
      "./src/app/donordboard/donordboard.component.css"))["default"]]
    })], DonordboardComponent);
    /***/
  },

  /***/
  "./src/app/dprofile/dprofile.component.css":
  /*!*************************************************!*\
    !*** ./src/app/dprofile/dprofile.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppDprofileDprofileComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rwcm9maWxlL2Rwcm9maWxlLmNvbXBvbmVudC5jc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/dprofile/dprofile.component.ts":
  /*!************************************************!*\
    !*** ./src/app/dprofile/dprofile.component.ts ***!
    \************************************************/

  /*! exports provided: DprofileComponent */

  /***/
  function srcAppDprofileDprofileComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DprofileComponent", function () {
      return DprofileComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var DprofileComponent = /*#__PURE__*/function () {
      function DprofileComponent(router, auth, authentication) {
        var _this9 = this;

        _classCallCheck(this, DprofileComponent);

        this.router = router;
        this.auth = auth;
        this.authentication = authentication;
        this.currentUserSubscription = this.authentication.currentUser.subscribe(function (user) {
          _this9.currentUser = user;
        });
      }

      _createClass(DprofileComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DprofileComponent;
    }();

    DprofileComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_6__["AuthenticationService"]
      }];
    };

    DprofileComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dprofile',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dprofile.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/dprofile/dprofile.component.html"))["default"],
      providers: [_angular_fire_firestore__WEBPACK_IMPORTED_MODULE_4__["AngularFirestore"], _angular_fire_auth__WEBPACK_IMPORTED_MODULE_3__["AngularFireAuth"], _services_auth_service__WEBPACK_IMPORTED_MODULE_5__["AuthService"]],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dprofile.component.css */
      "./src/app/dprofile/dprofile.component.css"))["default"]]
    })], DprofileComponent);
    /***/
  },

  /***/
  "./src/app/emergency/emergency.component.css":
  /*!***************************************************!*\
    !*** ./src/app/emergency/emergency.component.css ***!
    \***************************************************/

  /*! exports provided: default */

  /***/
  function srcAppEmergencyEmergencyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');\n/* You can add global styles to this file, and also import other style files */\n/* MAIN BACKGROUND */\nbody{\r\n  background: linear-gradient(to bottom right, #fff2f1 0%, #ff6e6e 100%);\r\n}\n/* TEXT STYLES */\nh3{\r\n  font-family: 'Luckiest Guy', cursive;\r\n  text-shadow:3px 3px 7px red;\r\n  -webkit-animation-name:text;\r\n          animation-name:text;\r\n  -webkit-animation-duration:1s;\r\n          animation-duration:1s;\r\n}\n@-webkit-keyframes text{\r\n  from{opacity:0.1;}\r\n  to{opacity:0.3;}\r\n}\n@keyframes text{\r\n  from{opacity:0.1;}\r\n  to{opacity:0.3;}\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZW1lcmdlbmN5L2VtZXJnZW5jeS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFDQSxpRkFBaUY7QUFEakYsOEVBQThFO0FBRTlFLG9CQUFvQjtBQUNwQjtFQUNFLHNFQUFzRTtBQUN4RTtBQUNBLGdCQUFnQjtBQUNoQjtFQUNFLG9DQUFvQztFQUNwQywyQkFBMkI7RUFDM0IsMkJBQW1CO1VBQW5CLG1CQUFtQjtFQUNuQiw2QkFBcUI7VUFBckIscUJBQXFCO0FBQ3ZCO0FBQ0E7RUFDRSxLQUFLLFdBQVcsQ0FBQztFQUNqQixHQUFHLFdBQVcsQ0FBQztBQUNqQjtBQUhBO0VBQ0UsS0FBSyxXQUFXLENBQUM7RUFDakIsR0FBRyxXQUFXLENBQUM7QUFDakIiLCJmaWxlIjoic3JjL2FwcC9lbWVyZ2VuY3kvZW1lcmdlbmN5LmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBZb3UgY2FuIGFkZCBnbG9iYWwgc3R5bGVzIHRvIHRoaXMgZmlsZSwgYW5kIGFsc28gaW1wb3J0IG90aGVyIHN0eWxlIGZpbGVzICovXHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUx1Y2tpZXN0K0d1eSZkaXNwbGF5PXN3YXAnKTtcclxuLyogTUFJTiBCQUNLR1JPVU5EICovXHJcbmJvZHl7XHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2ZmZjJmMSAwJSwgI2ZmNmU2ZSAxMDAlKTtcclxufVxyXG4vKiBURVhUIFNUWUxFUyAqL1xyXG5oM3tcclxuICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XHJcbiAgdGV4dC1zaGFkb3c6M3B4IDNweCA3cHggcmVkO1xyXG4gIGFuaW1hdGlvbi1uYW1lOnRleHQ7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjFzO1xyXG59XHJcbkBrZXlmcmFtZXMgdGV4dHtcclxuICBmcm9te29wYWNpdHk6MC4xO31cclxuICB0b3tvcGFjaXR5OjAuMzt9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/emergency/emergency.component.ts":
  /*!**************************************************!*\
    !*** ./src/app/emergency/emergency.component.ts ***!
    \**************************************************/

  /*! exports provided: EmergencyComponent */

  /***/
  function srcAppEmergencyEmergencyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EmergencyComponent", function () {
      return EmergencyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EmergencyComponent = /*#__PURE__*/function () {
      function EmergencyComponent() {
        _classCallCheck(this, EmergencyComponent);
      }

      _createClass(EmergencyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EmergencyComponent;
    }();

    EmergencyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-emergency',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./emergency.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/emergency/emergency.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./emergency.component.css */
      "./src/app/emergency/emergency.component.css"))["default"]]
    })], EmergencyComponent);
    /***/
  },

  /***/
  "./src/app/faq/faq.component.css":
  /*!***************************************!*\
    !*** ./src/app/faq/faq.component.css ***!
    \***************************************/

  /*! exports provided: default */

  /***/
  function srcAppFaqFaqComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');\r\n/* Text Style */\r\nh1{\r\n    font-family: 'Luckiest Guy', cursive;\r\n    color:rgb(255, 79, 15);\r\n}\r\nh4{\r\n    padding:8px;\r\n    font-family: 'Times New Roman', Times, serif;\r\n}\r\nh5{\r\n    font-family:'Courier New', Courier, monospace;\r\n    font-weight:bold;\r\n}\r\n/* Accordian Style */\r\n.card,.card-header{\r\n    background-color:transparent !important;\r\n    border:none;\r\n    padding:0px !important;\r\n    margin-bottom:20px;\r\n}\r\n.card{\r\n    box-shadow:0px 2px 25px 0px rgba(110,130,208,.18);\r\n}\r\n.card-link{\r\n    width:100%;\r\n    height:60px;\r\n    color:#000 !important;\r\n    font-weight:bold !important;\r\n    text-align:left !important;\r\n    text-decoration:none !important;\r\n}\r\n.card-body{\r\n    background:#e8eeff;\r\n}\r\n.card-link:after{\r\n    content:'\\2212';\r\n    text-align:center;\r\n    width:30px;\r\n    font-size:25px;\r\n    border-radius:5px;\r\n    right:5px;\r\n    top:2px;\r\n    position: absolute;\r\n    background:#e8eeff;\r\n}\r\n.card-link.collapsed:after{\r\n    content:'\\002B';\r\n    text-align:center;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlGQUFpRjtBQUNqRixlQUFlO0FBQ2Y7SUFDSSxvQ0FBb0M7SUFDcEMsc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxXQUFXO0lBQ1gsNENBQTRDO0FBQ2hEO0FBQ0E7SUFDSSw2Q0FBNkM7SUFDN0MsZ0JBQWdCO0FBQ3BCO0FBQ0Esb0JBQW9CO0FBQ3BCO0lBQ0ksdUNBQXVDO0lBQ3ZDLFdBQVc7SUFDWCxzQkFBc0I7SUFDdEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxpREFBaUQ7QUFDckQ7QUFDQTtJQUNJLFVBQVU7SUFDVixXQUFXO0lBQ1gscUJBQXFCO0lBQ3JCLDJCQUEyQjtJQUMzQiwwQkFBMEI7SUFDMUIsK0JBQStCO0FBQ25DO0FBQ0E7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7SUFDZixpQkFBaUI7SUFDakIsVUFBVTtJQUNWLGNBQWM7SUFDZCxpQkFBaUI7SUFDakIsU0FBUztJQUNULE9BQU87SUFDUCxrQkFBa0I7SUFDbEIsa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCIiwiZmlsZSI6InNyYy9hcHAvZmFxL2ZhcS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9THVja2llc3QrR3V5JmRpc3BsYXk9c3dhcCcpO1xyXG4vKiBUZXh0IFN0eWxlICovXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xyXG4gICAgY29sb3I6cmdiKDI1NSwgNzksIDE1KTtcclxufVxyXG5oNHtcclxuICAgIHBhZGRpbmc6OHB4O1xyXG4gICAgZm9udC1mYW1pbHk6ICdUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuaDV7XHJcbiAgICBmb250LWZhbWlseTonQ291cmllciBOZXcnLCBDb3VyaWVyLCBtb25vc3BhY2U7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbi8qIEFjY29yZGlhbiBTdHlsZSAqL1xyXG4uY2FyZCwuY2FyZC1oZWFkZXJ7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIHBhZGRpbmc6MHB4ICFpbXBvcnRhbnQ7XHJcbiAgICBtYXJnaW4tYm90dG9tOjIwcHg7XHJcbn1cclxuLmNhcmR7XHJcbiAgICBib3gtc2hhZG93OjBweCAycHggMjVweCAwcHggcmdiYSgxMTAsMTMwLDIwOCwuMTgpO1xyXG59XHJcbi5jYXJkLWxpbmt7XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgaGVpZ2h0OjYwcHg7XHJcbiAgICBjb2xvcjojMDAwICFpbXBvcnRhbnQ7XHJcbiAgICBmb250LXdlaWdodDpib2xkICFpbXBvcnRhbnQ7XHJcbiAgICB0ZXh0LWFsaWduOmxlZnQgIWltcG9ydGFudDtcclxuICAgIHRleHQtZGVjb3JhdGlvbjpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQ6I2U4ZWVmZjtcclxufVxyXG4uY2FyZC1saW5rOmFmdGVye1xyXG4gICAgY29udGVudDonXFwyMjEyJztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG4gICAgd2lkdGg6MzBweDtcclxuICAgIGZvbnQtc2l6ZToyNXB4O1xyXG4gICAgYm9yZGVyLXJhZGl1czo1cHg7XHJcbiAgICByaWdodDo1cHg7XHJcbiAgICB0b3A6MnB4O1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgYmFja2dyb3VuZDojZThlZWZmO1xyXG59XHJcbi5jYXJkLWxpbmsuY29sbGFwc2VkOmFmdGVye1xyXG4gICAgY29udGVudDonXFwwMDJCJztcclxuICAgIHRleHQtYWxpZ246Y2VudGVyO1xyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/faq/faq.component.ts":
  /*!**************************************!*\
    !*** ./src/app/faq/faq.component.ts ***!
    \**************************************/

  /*! exports provided: FaqComponent */

  /***/
  function srcAppFaqFaqComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FaqComponent", function () {
      return FaqComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FaqComponent = /*#__PURE__*/function () {
      function FaqComponent() {
        _classCallCheck(this, FaqComponent);
      }

      _createClass(FaqComponent, [{
        key: "goback",
        value: function goback() {
          window.history.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FaqComponent;
    }();

    FaqComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-faq',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./faq.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/faq/faq.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./faq.component.css */
      "./src/app/faq/faq.component.css"))["default"]]
    })], FaqComponent);
    /***/
  },

  /***/
  "./src/app/home/home.component.css":
  /*!*****************************************!*\
    !*** ./src/app/home/home.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppHomeHomeComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@700&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Raleway:wght@500&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');\r\n/* TEXT STYLES*/\r\ni{\r\n  font-size:24px;\r\n}\r\na i:first-of-type{\r\n  font-size:32px;\r\n}\r\nh3:first-of-type{\r\n  font-family: 'Luckiest Guy', cursive;\r\n  text-shadow:3px 3px 7px black;\r\n}\r\nbutton h3:first-child{\r\n  font-family: 'Luckiest Guy', cursive;\r\n  text-shadow:3px 3px 7px red;\r\n}\r\nh2{\r\n  font-family: 'Luckiest Guy', cursive;\r\n  color:rgb(255, 79, 15);\r\n  text-shadow:3px 3px 7px black;\r\n}\r\nh4{\r\n  font-family:'Libre Baskerville', serif;\r\n}\r\nh5{\r\n  font-family:'Raleway', sans-serif;\r\n}\r\n/* NAVBAR STYLE */\r\nnav{\r\n  position: -webkit-sticky;\r\n  position: sticky;\r\n}\r\n.navbar{\r\n  -webkit-animation-name:navbar;\r\n          animation-name:navbar;\r\n  -webkit-animation-duration:1s;\r\n          animation-duration:1s;\r\n  position:relative;\r\n  border-radius: 18px;\r\n}\r\n@-webkit-keyframes navbar{\r\n  from{opacity:0.1;}\r\n  to{opacity:0.3;}\r\n}\r\n@keyframes navbar{\r\n  from{opacity:0.1;}\r\n  to{opacity:0.3;}\r\n}\r\n.nav-link{\r\n  font-family: 'Libre Baskerville', serif;\r\n  width:-webkit-fit-content;\r\n  width:-moz-fit-content;\r\n  width:fit-content;\r\n  height:auto;\r\n  border-bottom-width:fit-content;\r\n}\r\n.nav-link::after{\r\n  content:\"\";\r\n  width:0%;\r\n  height:4px;\r\n  position:absolute;\r\n  bottom:0%;\r\n  left:50%;\r\n  background:rgb(229,9,20);\r\n  border-radius:10px;\r\n  transition:all 500ms ease;\r\n}\r\n.nav-link:hover::after{\r\n  left:0%;\r\n  width:100%;\r\n}\r\n/*MOBILE NAVIGATION STYLE*/\r\n@media(max-width:1199px){\r\n#collapsibleNavbar ul{\r\n  position:static;\r\n  width:100%;\r\n  height:75vh;\r\n  background:#eceff1;\r\n  top:100px;\r\n  left:0px;\r\n}\r\n#collapsibleNavbar ul li{\r\n  display:block;\r\n  margin:5px 0px 10px 20px;\r\n  text-align:justify;\r\n  -webkit-animation-name:mobile-navbar;\r\n          animation-name:mobile-navbar;\r\n  -webkit-animation-duration:0.3s;\r\n          animation-duration:0.3s;\r\n}\r\n@-webkit-keyframes mobile-navbar{\r\n  from{opacity:0;}\r\n  to{opacity:0.3;}\r\n}\r\n@keyframes mobile-navbar{\r\n  from{opacity:0;}\r\n  to{opacity:0.3;}\r\n}\r\n.nav-link{\r\n  background-color: #eceff1;\r\n  margin:auto;\r\n  width:-webkit-fit-content;\r\n  width:-moz-fit-content;\r\n  width:fit-content;\r\n}\r\n}\r\n/* FOOTER */\r\n.footer{\r\n  background: #c31432;  /* fallback for old browsers */  /* Chrome 10-25, Safari 5.1-6 */\r\n  background: linear-gradient(to right, #240b36, #c31432); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */ \r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsK0ZBQStGO0FBQy9GLHFGQUFxRjtBQUNyRixpRkFBaUY7QUFDakYsZUFBZTtBQUNmO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztBQUNoQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDZCQUE2QjtBQUMvQjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLDJCQUEyQjtBQUM3QjtBQUNBO0VBQ0Usb0NBQW9DO0VBQ3BDLHNCQUFzQjtFQUN0Qiw2QkFBNkI7QUFDL0I7QUFDQTtFQUNFLHNDQUFzQztBQUN4QztBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0EsaUJBQWlCO0FBQ2pCO0VBQ0Usd0JBQWdCO0VBQWhCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsNkJBQXFCO1VBQXJCLHFCQUFxQjtFQUNyQiw2QkFBcUI7VUFBckIscUJBQXFCO0VBQ3JCLGlCQUFpQjtFQUNqQixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLEtBQUssV0FBVyxDQUFDO0VBQ2pCLEdBQUcsV0FBVyxDQUFDO0FBQ2pCO0FBSEE7RUFDRSxLQUFLLFdBQVcsQ0FBQztFQUNqQixHQUFHLFdBQVcsQ0FBQztBQUNqQjtBQUNBO0VBQ0UsdUNBQXVDO0VBQ3ZDLHlCQUFpQjtFQUFqQixzQkFBaUI7RUFBakIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCwrQkFBK0I7QUFDakM7QUFDQTtFQUNFLFVBQVU7RUFDVixRQUFRO0VBQ1IsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixTQUFTO0VBQ1QsUUFBUTtFQUNSLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsVUFBVTtBQUNaO0FBQ0EsMEJBQTBCO0FBQzFCO0FBQ0E7RUFDRSxlQUFlO0VBQ2YsVUFBVTtFQUNWLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsU0FBUztFQUNULFFBQVE7QUFDVjtBQUNBO0VBQ0UsYUFBYTtFQUNiLHdCQUF3QjtFQUN4QixrQkFBa0I7RUFDbEIsb0NBQTRCO1VBQTVCLDRCQUE0QjtFQUM1QiwrQkFBdUI7VUFBdkIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxLQUFLLFNBQVMsQ0FBQztFQUNmLEdBQUcsV0FBVyxDQUFDO0FBQ2pCO0FBSEE7RUFDRSxLQUFLLFNBQVMsQ0FBQztFQUNmLEdBQUcsV0FBVyxDQUFDO0FBQ2pCO0FBQ0E7RUFDRSx5QkFBeUI7RUFDekIsV0FBVztFQUNYLHlCQUFpQjtFQUFqQixzQkFBaUI7RUFBakIsaUJBQWlCO0FBQ25CO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7RUFDRSxtQkFBbUIsR0FBRyw4QkFBOEIsR0FDYywrQkFBK0I7RUFDakcsdURBQXVELEVBQUUscUVBQXFFO0FBQ2hJIiwiZmlsZSI6InNyYy9hcHAvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MaWJyZStCYXNrZXJ2aWxsZTp3Z2h0QDcwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9UmFsZXdheTp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9THVja2llc3QrR3V5JmRpc3BsYXk9c3dhcCcpO1xyXG4vKiBURVhUIFNUWUxFUyovXHJcbml7XHJcbiAgZm9udC1zaXplOjI0cHg7XHJcbn1cclxuYSBpOmZpcnN0LW9mLXR5cGV7XHJcbiAgZm9udC1zaXplOjMycHg7XHJcbn1cclxuaDM6Zmlyc3Qtb2YtdHlwZXtcclxuICBmb250LWZhbWlseTogJ0x1Y2tpZXN0IEd1eScsIGN1cnNpdmU7XHJcbiAgdGV4dC1zaGFkb3c6M3B4IDNweCA3cHggYmxhY2s7XHJcbn1cclxuYnV0dG9uIGgzOmZpcnN0LWNoaWxke1xyXG4gIGZvbnQtZmFtaWx5OiAnTHVja2llc3QgR3V5JywgY3Vyc2l2ZTtcclxuICB0ZXh0LXNoYWRvdzozcHggM3B4IDdweCByZWQ7XHJcbn1cclxuaDJ7XHJcbiAgZm9udC1mYW1pbHk6ICdMdWNraWVzdCBHdXknLCBjdXJzaXZlO1xyXG4gIGNvbG9yOnJnYigyNTUsIDc5LCAxNSk7XHJcbiAgdGV4dC1zaGFkb3c6M3B4IDNweCA3cHggYmxhY2s7XHJcbn1cclxuaDR7XHJcbiAgZm9udC1mYW1pbHk6J0xpYnJlIEJhc2tlcnZpbGxlJywgc2VyaWY7XHJcbn1cclxuaDV7XHJcbiAgZm9udC1mYW1pbHk6J1JhbGV3YXknLCBzYW5zLXNlcmlmO1xyXG59XHJcbi8qIE5BVkJBUiBTVFlMRSAqL1xyXG5uYXZ7XHJcbiAgcG9zaXRpb246IHN0aWNreTtcclxufVxyXG4ubmF2YmFye1xyXG4gIGFuaW1hdGlvbi1uYW1lOm5hdmJhcjtcclxuICBhbmltYXRpb24tZHVyYXRpb246MXM7XHJcbiAgcG9zaXRpb246cmVsYXRpdmU7XHJcbiAgYm9yZGVyLXJhZGl1czogMThweDtcclxufVxyXG5Aa2V5ZnJhbWVzIG5hdmJhcntcclxuICBmcm9te29wYWNpdHk6MC4xO31cclxuICB0b3tvcGFjaXR5OjAuMzt9XHJcbn1cclxuLm5hdi1saW5re1xyXG4gIGZvbnQtZmFtaWx5OiAnTGlicmUgQmFza2VydmlsbGUnLCBzZXJpZjtcclxuICB3aWR0aDpmaXQtY29udGVudDtcclxuICBoZWlnaHQ6YXV0bztcclxuICBib3JkZXItYm90dG9tLXdpZHRoOmZpdC1jb250ZW50O1xyXG59XHJcbi5uYXYtbGluazo6YWZ0ZXJ7XHJcbiAgY29udGVudDpcIlwiO1xyXG4gIHdpZHRoOjAlO1xyXG4gIGhlaWdodDo0cHg7XHJcbiAgcG9zaXRpb246YWJzb2x1dGU7XHJcbiAgYm90dG9tOjAlO1xyXG4gIGxlZnQ6NTAlO1xyXG4gIGJhY2tncm91bmQ6cmdiKDIyOSw5LDIwKTtcclxuICBib3JkZXItcmFkaXVzOjEwcHg7XHJcbiAgdHJhbnNpdGlvbjphbGwgNTAwbXMgZWFzZTtcclxufVxyXG4ubmF2LWxpbms6aG92ZXI6OmFmdGVye1xyXG4gIGxlZnQ6MCU7XHJcbiAgd2lkdGg6MTAwJTtcclxufVxyXG4vKk1PQklMRSBOQVZJR0FUSU9OIFNUWUxFKi9cclxuQG1lZGlhKG1heC13aWR0aDoxMTk5cHgpe1xyXG4jY29sbGFwc2libGVOYXZiYXIgdWx7XHJcbiAgcG9zaXRpb246c3RhdGljO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0Ojc1dmg7XHJcbiAgYmFja2dyb3VuZDojZWNlZmYxO1xyXG4gIHRvcDoxMDBweDtcclxuICBsZWZ0OjBweDtcclxufVxyXG4jY29sbGFwc2libGVOYXZiYXIgdWwgbGl7XHJcbiAgZGlzcGxheTpibG9jaztcclxuICBtYXJnaW46NXB4IDBweCAxMHB4IDIwcHg7XHJcbiAgdGV4dC1hbGlnbjpqdXN0aWZ5O1xyXG4gIGFuaW1hdGlvbi1uYW1lOm1vYmlsZS1uYXZiYXI7XHJcbiAgYW5pbWF0aW9uLWR1cmF0aW9uOjAuM3M7XHJcbn1cclxuQGtleWZyYW1lcyBtb2JpbGUtbmF2YmFye1xyXG4gIGZyb217b3BhY2l0eTowO31cclxuICB0b3tvcGFjaXR5OjAuMzt9XHJcbn1cclxuLm5hdi1saW5re1xyXG4gIGJhY2tncm91bmQtY29sb3I6ICNlY2VmZjE7XHJcbiAgbWFyZ2luOmF1dG87XHJcbiAgd2lkdGg6Zml0LWNvbnRlbnQ7XHJcbn1cclxufVxyXG4vKiBGT09URVIgKi9cclxuLmZvb3RlcntcclxuICBiYWNrZ3JvdW5kOiAjYzMxNDMyOyAgLyogZmFsbGJhY2sgZm9yIG9sZCBicm93c2VycyAqL1xyXG4gIGJhY2tncm91bmQ6IC13ZWJraXQtbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQwYjM2LCAjYzMxNDMyKTsgIC8qIENocm9tZSAxMC0yNSwgU2FmYXJpIDUuMS02ICovXHJcbiAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LCAjMjQwYjM2LCAjYzMxNDMyKTsgLyogVzNDLCBJRSAxMCsvIEVkZ2UsIEZpcmVmb3ggMTYrLCBDaHJvbWUgMjYrLCBPcGVyYSAxMissIFNhZmFyaSA3KyAqLyBcclxufVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/home/home.component.ts":
  /*!****************************************!*\
    !*** ./src/app/home/home.component.ts ***!
    \****************************************/

  /*! exports provided: HomeComponent */

  /***/
  function srcAppHomeHomeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HomeComponent", function () {
      return HomeComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _keyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keyframes */
    "./src/app/home/keyframes.ts");

    var HomeComponent = /*#__PURE__*/function () {
      function HomeComponent() {
        _classCallCheck(this, HomeComponent);
      }

      _createClass(HomeComponent, [{
        key: "startAnimation",
        value: function startAnimation(state) {
          if (!this.animationState) {
            this.animationState = state;
          }
        }
      }, {
        key: "resetAnimationState",
        value: function resetAnimationState() {
          this.animationState = '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HomeComponent;
    }();

    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-home',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./home.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/home/home.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardAnimator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => swing', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["swing"]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => jello', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["jello"]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => pulse', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["pulse"]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => rubberBand', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["rubberBand"])))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./home.component.css */
      "./src/app/home/home.component.css"))["default"]]
    })], HomeComponent);
    /***/
  },

  /***/
  "./src/app/home/keyframes.ts":
  /*!***********************************!*\
    !*** ./src/app/home/keyframes.ts ***!
    \***********************************/

  /*! exports provided: swing, jello, pulse, rubberBand */

  /***/
  function srcAppHomeKeyframesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "swing", function () {
      return swing;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "jello", function () {
      return jello;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "pulse", function () {
      return pulse;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "rubberBand", function () {
      return rubberBand;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var swing = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'rotate3d(0,0,1,15deg)',
      offset: .2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'rotate3d(0,0,1,-10deg)',
      offset: .4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'rotate3d(0,0,1,5deg)',
      offset: .6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'rotate3d(0,0,1,-5deg)',
      offset: .8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'none',
      offset: 1
    })];
    var jello = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(-12.5deg) skewY(-12.5deg)',
      offset: .22
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(6.25deg) skewY(6.25deg)',
      offset: .33
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(-3.125deg) skewY(-3.125deg)',
      offset: .44
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(1.5625deg) skewY(1.5625deg)',
      offset: .55
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(-0.78125deg) skewY(-0.78125deg)',
      offset: .66
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(0.390625deg) skewY(0.390625deg)',
      offset: .77
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'skewX(-0.1953125deg) skewY(-0.1953125deg)',
      offset: .88
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'none',
      offset: 1
    })];
    var pulse = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.05, 1.05, 1.05)',
      offset: .5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'none',
      offset: 1
    })];
    var rubberBand = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.25, 0.75, 1)',
      offset: .3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(0.75, 1.25, 1)',
      offset: .4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.15, 0.85, 1)',
      offset: .5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(0.95, 1.05, 1)',
      offset: .65
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.05, 0.95, 1)',
      offset: .75
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'none',
      offset: 1
    })];
    /***/
  },

  /***/
  "./src/app/hsignup/hsignup.component.css":
  /*!***********************************************!*\
    !*** ./src/app/hsignup/hsignup.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHsignupHsignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&family=Alata&display=swap');\r\n/* MAIN BACKGROUND */\r\n.container-fluid,body{\r\n    background:#131419;\r\n}\r\n/* TEXT STYLES */\r\nh2{\r\n    font-family:'Major Mono Display', monospace;\r\n    color:#f74b16;\r\n}\r\nlabel{\r\n    font-family: 'Alata', sans-serif;\r\n    letter-spacing: 1.3px;\r\n    color:#d63c0e;\r\n}\r\nhr{\r\n    width:70%;\r\n    background:#5d06ad;\r\n}\r\n/* FORM STYLES */\r\n.register-div{\r\n    background:#131419;\r\n    border-radius:40px;\r\n    box-shadow:-5px -5px 10px rgba(255,255,255,0.05),5px 5px 15px rgba(0,0,0,0.5)\r\n}\r\nform{\r\n    padding:20px;\r\n}\r\n.form-group input{\r\n    border:none;\r\n    outline:none;\r\n    background:#131419;\r\n    border-radius:40px;\r\n    padding:12px 15px;\r\n    font-size:18px;\r\n    color:#128ff5;\r\n    height:60px;\r\n    box-shadow:inset -2px -2px 6px rgba(255,255,255,0.5),inset 5px 5px 15px rgba(0,0,0,0.6);\r\n}\r\n/* BUTTON EFFECTS */\r\nbutton{\r\n    font-size:18px;\r\n    color:#f74b16;\r\n    box-shadow:-2px -2px 6px rgba(255,255,255,0.1),2px 2px 6px rgba(0,0,0,0.8);\r\n}\r\nbutton:focus{\r\n    color:#d63c0e;\r\n    box-shadow:inset -2px -2px 6px rgba(255,255,255,0.1),inset 2px 2px 6px rgba(0,0,0,0.8);\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaHNpZ251cC9oc2lnbnVwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0dBQW9HO0FBQ3BHLG9CQUFvQjtBQUNwQjtJQUNJLGtCQUFrQjtBQUN0QjtBQUNBLGdCQUFnQjtBQUNoQjtJQUNJLDJDQUEyQztJQUMzQyxhQUFhO0FBQ2pCO0FBQ0E7SUFDSSxnQ0FBZ0M7SUFDaEMscUJBQXFCO0lBQ3JCLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7SUFDVCxrQkFBa0I7QUFDdEI7QUFDQSxnQkFBZ0I7QUFDaEI7SUFDSSxrQkFBa0I7SUFDbEIsa0JBQWtCO0lBQ2xCO0FBQ0o7QUFDQTtJQUNJLFlBQVk7QUFDaEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQixpQkFBaUI7SUFDakIsY0FBYztJQUNkLGFBQWE7SUFDYixXQUFXO0lBQ1gsdUZBQXVGO0FBQzNGO0FBQ0EsbUJBQW1CO0FBQ25CO0lBQ0ksY0FBYztJQUNkLGFBQWE7SUFDYiwwRUFBMEU7QUFDOUU7QUFDQTtJQUNJLGFBQWE7SUFDYixzRkFBc0Y7QUFDMUYiLCJmaWxlIjoic3JjL2FwcC9oc2lnbnVwL2hzaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1ham9yK01vbm8rRGlzcGxheSZmYW1pbHk9QWxhdGEmZGlzcGxheT1zd2FwJyk7XHJcbi8qIE1BSU4gQkFDS0dST1VORCAqL1xyXG4uY29udGFpbmVyLWZsdWlkLGJvZHl7XHJcbiAgICBiYWNrZ3JvdW5kOiMxMzE0MTk7XHJcbn1cclxuLyogVEVYVCBTVFlMRVMgKi9cclxuaDJ7XHJcbiAgICBmb250LWZhbWlseTonTWFqb3IgTW9ubyBEaXNwbGF5JywgbW9ub3NwYWNlO1xyXG4gICAgY29sb3I6I2Y3NGIxNjtcclxufVxyXG5sYWJlbHtcclxuICAgIGZvbnQtZmFtaWx5OiAnQWxhdGEnLCBzYW5zLXNlcmlmO1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xyXG4gICAgY29sb3I6I2Q2M2MwZTtcclxufVxyXG5ocntcclxuICAgIHdpZHRoOjcwJTtcclxuICAgIGJhY2tncm91bmQ6IzVkMDZhZDtcclxufVxyXG4vKiBGT1JNIFNUWUxFUyAqL1xyXG4ucmVnaXN0ZXItZGl2e1xyXG4gICAgYmFja2dyb3VuZDojMTMxNDE5O1xyXG4gICAgYm9yZGVyLXJhZGl1czo0MHB4O1xyXG4gICAgYm94LXNoYWRvdzotNXB4IC01cHggMTBweCByZ2JhKDI1NSwyNTUsMjU1LDAuMDUpLDVweCA1cHggMTVweCByZ2JhKDAsMCwwLDAuNSlcclxufVxyXG5mb3Jte1xyXG4gICAgcGFkZGluZzoyMHB4O1xyXG59XHJcbi5mb3JtLWdyb3VwIGlucHV0e1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOiMxMzE0MTk7XHJcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbiAgICBwYWRkaW5nOjEycHggMTVweDtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY29sb3I6IzEyOGZmNTtcclxuICAgIGhlaWdodDo2MHB4O1xyXG4gICAgYm94LXNoYWRvdzppbnNldCAtMnB4IC0ycHggNnB4IHJnYmEoMjU1LDI1NSwyNTUsMC41KSxpbnNldCA1cHggNXB4IDE1cHggcmdiYSgwLDAsMCwwLjYpO1xyXG59XHJcbi8qIEJVVFRPTiBFRkZFQ1RTICovXHJcbmJ1dHRvbntcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgY29sb3I6I2Y3NGIxNjtcclxuICAgIGJveC1zaGFkb3c6LTJweCAtMnB4IDZweCByZ2JhKDI1NSwyNTUsMjU1LDAuMSksMnB4IDJweCA2cHggcmdiYSgwLDAsMCwwLjgpO1xyXG59XHJcbmJ1dHRvbjpmb2N1c3tcclxuICAgIGNvbG9yOiNkNjNjMGU7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IC0ycHggLTJweCA2cHggcmdiYSgyNTUsMjU1LDI1NSwwLjEpLGluc2V0IDJweCAycHggNnB4IHJnYmEoMCwwLDAsMC44KTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/hsignup/hsignup.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/hsignup/hsignup.component.ts ***!
    \**********************************************/

  /*! exports provided: HsignupComponent */

  /***/
  function srcAppHsignupHsignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HsignupComponent", function () {
      return HsignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var HsignupComponent = /*#__PURE__*/function () {
      function HsignupComponent(_router, fb, el, user) {
        _classCallCheck(this, HsignupComponent);

        this._router = _router;
        this.fb = fb;
        this.el = el;
        this.user = user;
      }

      _createClass(HsignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createRegisterForm();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          this.openSpinner();
          this.register();
        }
      }, {
        key: "openSpinner",
        value: function openSpinner() {
          var _this10 = this;

          this.isLoading = true;
          setTimeout(function () {
            _this10.isLoading = false;

            _this10.login();
          }, 5000);
        }
      }, {
        key: "login",
        value: function login() {
          this._router.navigate(['/home/login']);
        }
      }, {
        key: "createRegisterForm",
        value: function createRegisterForm() {
          this.HregisterForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z]*')]],
            hid: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(12)]],
            password: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern("^[0-9]{10}")]],
            profilePic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['hospital']
          }, {
            validator: [this.fileUploadType, this.passwordMatchValidator]
          });
        }
      }, {
        key: "passwordMatchValidator",
        value: function passwordMatchValidator(g) {
          return g.get('password').value === g.get('confirmPassword').value ? null : {
            'mismatch': true
          };
        }
      }, {
        key: "fileUploadType",
        value: function fileUploadType(g) {
          var file = g.get('profilePic').value;

          if (file) {
            var extension = file.split('.');
            var val = extension[extension.length - 1];

            if (val === "jpeg" || val === "png" || val === "jpg") {
              return null;
            } else return {
              'fileextension': true
            };
          }

          return null;
        }
      }, {
        key: "register",
        value: function register() {
          //   // this.openSpinner(true);
          var formData = new FormData(); //locate the file element meant for the file upload.

          var inputEl = this.el.nativeElement.querySelector('#profilePic'); //get the total amount of files attached to the file input.

          var fileCount = inputEl.files.length; //check if the filecount is greater than zero, to be sure a file was selected.

          if (fileCount > 0) {
            // a file was selected
            //append the key name 'photo' with the first file in the element
            formData.append('photo', inputEl.files.item(0));
          } // formData.append('name', this.HregisterForm.value.name);
          // formData.append('email', this.HregisterForm.value.email);
          // formData.append('password', this.HregisterForm.value.password);


          this.user.registertion(this.HregisterForm.value).subscribe(function (data) {
            return console.log(data, "Successfully submitted!");
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return HsignupComponent;
    }();

    HsignupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    HsignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hsignup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hsignup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hsignup/hsignup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hsignup.component.css */
      "./src/app/hsignup/hsignup.component.css"))["default"]]
    })], HsignupComponent);
    /***/
  },

  /***/
  "./src/app/login/login.component.css":
  /*!*******************************************!*\
    !*** ./src/app/login/login.component.css ***!
    \*******************************************/

  /*! exports provided: default */

  /***/
  function srcAppLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Major+Mono+Display&display=swap');\r\n/* MAIN BACKGROUND  */\r\nbody{\r\n    background:#ecf0f3;\r\n}\r\n/* TEXT STYLES */\r\nh2{\r\n    font-family:'Major Mono Display', monospace;\r\n    font-weight:bolder;\r\n    font-size:40px;\r\n    letter-spacing: 0.5px;\r\n}\r\n/* FORM STYLES */\r\n.login-div{\r\n    border-radius:40px;\r\n    background:#ecf0f3;\r\n    box-shadow:13px 13px 20px #cbced1,\r\n               -13px -13px 20px #ffffff \r\n}\r\nimg{\r\n    box-shadow:0px 0px 2px #5f5f5f,\r\n               0px 0px 0px 5px #ecf0f3,\r\n               8px 8px 15px #a7aaaf,\r\n               -8px -8px 15px #ffffff \r\n}\r\n.form{\r\n    padding:20px;\r\n}\r\n.form-group{\r\n    border-radius:25px;\r\n    box-shadow:inset 8px 8px 8px #cbced1,inset -8px -8px 8px #ffffff; \r\n}\r\n.form-group input{\r\n    border:none;\r\n    outline:none;\r\n    background:none;\r\n    font-size:18px;\r\n    height: 55px;\r\n    color:#555;\r\n    padding:20px 10px 20px 20px;\r\n}\r\n/* FORM BUTTON EFFECT */\r\n.login-btn,.g-button{\r\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size:18px;\r\n    font-weight:800;\r\n    color:#595959;\r\n    background:#dde1e7;\r\n    margin:15px 0;\r\n    width:100%;\r\n    height:45px;\r\n    border:none;\r\n    outline:none;\r\n    cursor:pointer;\r\n    border-radius:25px;\r\n    box-shadow:2px 2px 5px #cbced1,-5px -5px 10px #ffffff;\r\n}\r\n.login-btn:focus,.g-button:focus{\r\n    box-shadow:inset 2px 2px 5px #babeec,inset -5px -5px 10px #ffffff73;\r\n}\r\n/* BUTTON ICONS */\r\nspan{\r\n    font-size:20px;\r\n}\r\n\r\n\r\n\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSx1RkFBdUY7QUFDdkYscUJBQXFCO0FBQ3JCO0lBQ0ksa0JBQWtCO0FBQ3RCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksMkNBQTJDO0lBQzNDLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjs7QUFFSjtBQUNBO0lBQ0k7Ozs7QUFJSjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksa0JBQWtCO0lBQ2xCLGdFQUFnRTtBQUNwRTtBQUNBO0lBQ0ksV0FBVztJQUNYLFlBQVk7SUFDWixlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixVQUFVO0lBQ1YsMkJBQTJCO0FBQy9CO0FBQ0EsdUJBQXVCO0FBQ3ZCO0lBQ0kscUhBQXFIO0lBQ3JILGNBQWM7SUFDZCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsVUFBVTtJQUNWLFdBQVc7SUFDWCxXQUFXO0lBQ1gsWUFBWTtJQUNaLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIscURBQXFEO0FBQ3pEO0FBQ0E7SUFDSSxtRUFBbUU7QUFDdkU7QUFDQSxpQkFBaUI7QUFDakI7SUFDSSxjQUFjO0FBQ2xCIiwiZmlsZSI6InNyYy9hcHAvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1ham9yK01vbm8rRGlzcGxheSZkaXNwbGF5PXN3YXAnKTtcclxuLyogTUFJTiBCQUNLR1JPVU5EICAqL1xyXG5ib2R5e1xyXG4gICAgYmFja2dyb3VuZDojZWNmMGYzO1xyXG59XHJcbi8qIFRFWFQgU1RZTEVTICovXHJcbmgye1xyXG4gICAgZm9udC1mYW1pbHk6J01ham9yIE1vbm8gRGlzcGxheScsIG1vbm9zcGFjZTtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGRlcjtcclxuICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNXB4O1xyXG59XHJcbi8qIEZPUk0gU1RZTEVTICovXHJcbi5sb2dpbi1kaXZ7XHJcbiAgICBib3JkZXItcmFkaXVzOjQwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiNlY2YwZjM7XHJcbiAgICBib3gtc2hhZG93OjEzcHggMTNweCAyMHB4ICNjYmNlZDEsXHJcbiAgICAgICAgICAgICAgIC0xM3B4IC0xM3B4IDIwcHggI2ZmZmZmZiBcclxufVxyXG5pbWd7XHJcbiAgICBib3gtc2hhZG93OjBweCAwcHggMnB4ICM1ZjVmNWYsXHJcbiAgICAgICAgICAgICAgIDBweCAwcHggMHB4IDVweCAjZWNmMGYzLFxyXG4gICAgICAgICAgICAgICA4cHggOHB4IDE1cHggI2E3YWFhZixcclxuICAgICAgICAgICAgICAgLThweCAtOHB4IDE1cHggI2ZmZmZmZiBcclxufVxyXG4uZm9ybXtcclxuICAgIHBhZGRpbmc6MjBweDtcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICAgIGJvcmRlci1yYWRpdXM6MjVweDtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgOHB4IDhweCA4cHggI2NiY2VkMSxpbnNldCAtOHB4IC04cHggOHB4ICNmZmZmZmY7IFxyXG59XHJcbi5mb3JtLWdyb3VwIGlucHV0e1xyXG4gICAgYm9yZGVyOm5vbmU7XHJcbiAgICBvdXRsaW5lOm5vbmU7XHJcbiAgICBiYWNrZ3JvdW5kOm5vbmU7XHJcbiAgICBmb250LXNpemU6MThweDtcclxuICAgIGhlaWdodDogNTVweDtcclxuICAgIGNvbG9yOiM1NTU7XHJcbiAgICBwYWRkaW5nOjIwcHggMTBweCAyMHB4IDIwcHg7XHJcbn1cclxuLyogRk9STSBCVVRUT04gRUZGRUNUICovXHJcbi5sb2dpbi1idG4sLmctYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBmb250LXdlaWdodDo4MDA7XHJcbiAgICBjb2xvcjojNTk1OTU5O1xyXG4gICAgYmFja2dyb3VuZDojZGRlMWU3O1xyXG4gICAgbWFyZ2luOjE1cHggMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NDVweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbiAgICBib3gtc2hhZG93OjJweCAycHggNXB4ICNjYmNlZDEsLTVweCAtNXB4IDEwcHggI2ZmZmZmZjtcclxufVxyXG4ubG9naW4tYnRuOmZvY3VzLC5nLWJ1dHRvbjpmb2N1c3tcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgMnB4IDJweCA1cHggI2JhYmVlYyxpbnNldCAtNXB4IC01cHggMTBweCAjZmZmZmZmNzM7XHJcbn1cclxuLyogQlVUVE9OIElDT05TICovXHJcbnNwYW57XHJcbiAgICBmb250LXNpemU6MjBweDtcclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/login/login.component.ts":
  /*!******************************************!*\
    !*** ./src/app/login/login.component.ts ***!
    \******************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");
    /* harmony import */


    var _services_auth_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./../services/auth.service */
    "./src/app/services/auth.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../services/alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent(formBuilder, router, authenticationService, alertService, location, auth) {
        _classCallCheck(this, LoginComponent);

        this.formBuilder = formBuilder;
        this.router = router;
        this.authenticationService = authenticationService;
        this.alertService = alertService;
        this.location = location;
        this.auth = auth;
        this.loading = false;
        this.submitted = false; // redirect to home if already logged in
        // if (this.authenticationService.currentUserValue) {
        //     this.router.navigate(['/']);
        // }  //JWT TOKEN AUTHORIZATION
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.loginForm = this.formBuilder.group({
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_4__["Validators"].required]
          });
        } // convenience getter for easy access to form fields

      }, {
        key: "onSubmit",
        value: function onSubmit() {
          var _this11 = this;

          this.submitted = true; // stop here if form is invalid

          if (this.loginForm.invalid) {
            return;
          }

          this.loading = true;
          this.openSpinner();
          this.authenticationService.login(this.f.name.value, this.f.password.value).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_5__["first"])()).subscribe(function (data) {
            _this11.router.navigate(['home/login/dashboard']);
          }, function (error) {
            _this11.alertService.error(error);

            _this11.isLoading = false;
          });
        }
      }, {
        key: "openSpinner",
        value: function openSpinner() {
          var _this12 = this;

          this.isLoading = true;
          setTimeout(function () {
            _this12.isLoading = false;
          }, 5000);
        }
      }, {
        key: "f",
        get: function get() {
          return this.loginForm.controls;
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_8__["AuthenticationService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_7__["AlertService"]
      }, {
        type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]
      }, {
        type: _services_auth_service__WEBPACK_IMPORTED_MODULE_6__["AuthService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/login/login.component.css"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/material/material.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/material/material.module.ts ***!
    \*********************************************/

  /*! exports provided: MaterialModule */

  /***/
  function srcAppMaterialMaterialModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MaterialModule", function () {
      return MaterialModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_material_slider__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/material/slider */
    "./node_modules/@angular/material/esm2015/slider.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ngmodule/material-carousel */
    "./node_modules/@ngmodule/material-carousel/fesm2015/ngmodule-material-carousel.js");
    /* harmony import */


    var _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/material/tabs */
    "./node_modules/@angular/material/esm2015/tabs.js");
    /* harmony import */


    var _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material/badge */
    "./node_modules/@angular/material/esm2015/badge.js");

    var MaterialComponent = [_angular_material_slider__WEBPACK_IMPORTED_MODULE_2__["MatSliderModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatCardModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialogModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTableModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSidenavModule"], _ngmodule_material_carousel__WEBPACK_IMPORTED_MODULE_4__["MatCarouselModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatIconModule"], _angular_material_tabs__WEBPACK_IMPORTED_MODULE_5__["MatTabsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSnackBarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatFormFieldModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatInputModule"], _angular_material_badge__WEBPACK_IMPORTED_MODULE_6__["MatBadgeModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatSelectModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatButtonToggleModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatRadioModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatTooltipModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDatepickerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatNativeDateModule"], _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatProgressSpinnerModule"]];

    var MaterialModule = function MaterialModule() {
      _classCallCheck(this, MaterialModule);
    };

    MaterialModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [MaterialComponent],
      exports: [MaterialComponent]
    })], MaterialModule);
    /***/
  },

  /***/
  "./src/app/models/contact.ts":
  /*!***********************************!*\
    !*** ./src/app/models/contact.ts ***!
    \***********************************/

  /*! exports provided: Contact */

  /***/
  function srcAppModelsContactTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "Contact", function () {
      return Contact;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var Contact = function Contact() {
      _classCallCheck(this, Contact);
    };
    /***/

  },

  /***/
  "./src/app/news/news.component.css":
  /*!*****************************************!*\
    !*** ./src/app/news/news.component.css ***!
    \*****************************************/

  /*! exports provided: default */

  /***/
  function srcAppNewsNewsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Quicksand:wght@500&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');\r\n/* MAIN BACKGROUND */\r\nbody,.container-fluid{\r\n    background:linear-gradient(to right,#0e1a8b,rgb(134, 9, 134));\r\n}\r\n/* TEXT STYLE */\r\nh1{\r\n    font-family:'Julius Sans One', sans-serif;\r\n    font-size:large;\r\n    font-weight:600;  \r\n}\r\nh3{\r\n    font-family: 'Luckiest Guy', cursive;\r\n    font-size:xxx-large;\r\n    font-weight:bold;\r\n    color:rgb(255, 27, 27);\r\n    text-shadow:5px 0px 1px whitesmoke;\r\n}\r\nb{\r\n    color:red;\r\n    position:relative;\r\n    top:3px;\r\n    -webkit-animation:bounce .3s ease infinite alternate;\r\n            animation:bounce .3s ease infinite alternate; \r\n}\r\np{\r\n    font-family:'Montserrat', sans-serif;\r\n    font-weight:500;\r\n    font-size:x-large;\r\n}\r\n.divider{\r\n    width:98%;\r\n    background-color:orangered;\r\n    opacity:0.3;\r\n}\r\n.card-text{\r\n    font-family:'Quicksand', sans-serif;\r\n    font-weight:500;\r\n    font-size:large;\r\n}\r\n.event-container{\r\n    font-family:\"Roboto\",sans-serif;\r\n}\r\n/* BUBBLE EFFECT */\r\n.box div{\r\n    position:absolute;\r\n    width:70px;\r\n    height:70px;\r\n}\r\n.box div:nth-child(1){\r\n    top:7%;\r\n    left:57%;\r\n    background-color:rgb(87, 116, 245);\r\n    -webkit-animation:animate 9s linear infinite;\r\n            animation:animate 9s linear infinite;\r\n    border-radius:50%;\r\n    opacity:0.2;\r\n}\r\n.box div:nth-child(2){\r\n    top:25%;\r\n    left:3%;\r\n    background-color:rgb(255, 20, 196);\r\n    -webkit-animation:animate 10s linear infinite;\r\n            animation:animate 10s linear infinite;\r\n    opacity:0.3;\r\n}\r\n.box div:nth-child(3){\r\n    top:42%;\r\n    left:73%;\r\n    background-color: rgb(148, 255, 86);\r\n    -webkit-animation:animate 8s linear infinite;\r\n            animation:animate 8s linear infinite;\r\n    border-radius:50%;\r\n    opacity:0.3;\r\n}\r\n@-webkit-keyframes animate{\r\n    0%{\r\n    transform:rotate(0);\r\n    border-radius:60% 40% 32% 68% / 38% 36% 64% 62%;  \r\n    }\r\n    40%{\r\n    transform:rotate(0);\r\n    border-radius:45% 55% 49% 51% / 36% 51% 49% 64%;\r\n    }\r\n    60%{\r\n    transform:rotate(0);\r\n    border-radius:60% 40% 57% 43% / 47% 62% 38% 53%;\r\n    }\r\n    100%{\r\n    transform:rotate(360deg);\r\n    border-radius:60% 40% 32% 68% / 38% 36% 64% 62%;\r\n    }\r\n}\r\n@keyframes animate{\r\n    0%{\r\n    transform:rotate(0);\r\n    border-radius:60% 40% 32% 68% / 38% 36% 64% 62%;  \r\n    }\r\n    40%{\r\n    transform:rotate(0);\r\n    border-radius:45% 55% 49% 51% / 36% 51% 49% 64%;\r\n    }\r\n    60%{\r\n    transform:rotate(0);\r\n    border-radius:60% 40% 57% 43% / 47% 62% 38% 53%;\r\n    }\r\n    100%{\r\n    transform:rotate(360deg);\r\n    border-radius:60% 40% 32% 68% / 38% 36% 64% 62%;\r\n    }\r\n}\r\n/* BOUNCE TEXT ANIMATION */\r\nb:nth-child(2){\r\n    -webkit-animation-delay:.1s;\r\n            animation-delay:.1s;\r\n}\r\nb:nth-child(3){\r\n    -webkit-animation-delay:.2s;\r\n            animation-delay:.2s;\r\n}\r\nb:nth-child(4){\r\n    -webkit-animation-delay:.3s;\r\n            animation-delay:.3s;\r\n}\r\n@-webkit-keyframes bounce{\r\n    100%{\r\n        top:-3px;\r\n    }\r\n}\r\n@keyframes bounce{\r\n    100%{\r\n        top:-3px;\r\n    }\r\n}\r\n/* EVENT-CONTAINER */\r\n.event-container .event{\r\nbox-shadow:0 4px 16px -8px rgba(0,0,0,0.4);\r\nbackground:#ffff;\r\n}\r\n.event-date{\r\n    color:rgb(236, 37, 97);\r\n}\r\n.event .event-left{\r\n    background:#222;\r\n    min-width:80px;\r\n    display:flex;\r\n    align-items:center;\r\n    justify-content:center;\r\n    color:rgb(56, 216, 56);\r\n    padding:8px 48px;\r\n    font-weight:bold;\r\n    text-align:center;\r\n}\r\n.event .event-left .date{\r\n    font-size:56px;\r\n}\r\n.event .event-left .month{\r\n    font-size:16px;\r\n    font-weight:normal;\r\n}\r\n.event .event-right{\r\n    flex-direction: column;\r\n}\r\n@media(max-width:600px){\r\n    .event{\r\n        flex-direction:column;\r\n    }\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsaUZBQWlGO0FBQ2pGLCtFQUErRTtBQUMvRSx1RkFBdUY7QUFDdkYsb0ZBQW9GO0FBQ3BGLG9CQUFvQjtBQUNwQjtJQUNJLDZEQUE2RDtBQUNqRTtBQUNBLGVBQWU7QUFDZjtJQUNJLHlDQUF5QztJQUN6QyxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLG1CQUFtQjtJQUNuQixnQkFBZ0I7SUFDaEIsc0JBQXNCO0lBQ3RCLGtDQUFrQztBQUN0QztBQUNBO0lBQ0ksU0FBUztJQUNULGlCQUFpQjtJQUNqQixPQUFPO0lBQ1Asb0RBQTRDO1lBQTVDLDRDQUE0QztBQUNoRDtBQUNBO0lBQ0ksb0NBQW9DO0lBQ3BDLGVBQWU7SUFDZixpQkFBaUI7QUFDckI7QUFDQTtJQUNJLFNBQVM7SUFDVCwwQkFBMEI7SUFDMUIsV0FBVztBQUNmO0FBQ0E7SUFDSSxtQ0FBbUM7SUFDbkMsZUFBZTtJQUNmLGVBQWU7QUFDbkI7QUFDQTtJQUNJLCtCQUErQjtBQUNuQztBQUNBLGtCQUFrQjtBQUNsQjtJQUNJLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztBQUNmO0FBQ0E7SUFDSSxNQUFNO0lBQ04sUUFBUTtJQUNSLGtDQUFrQztJQUNsQyw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJLE9BQU87SUFDUCxPQUFPO0lBQ1Asa0NBQWtDO0lBQ2xDLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMsV0FBVztBQUNmO0FBQ0E7SUFDSSxPQUFPO0lBQ1AsUUFBUTtJQUNSLG1DQUFtQztJQUNuQyw0Q0FBb0M7WUFBcEMsb0NBQW9DO0lBQ3BDLGlCQUFpQjtJQUNqQixXQUFXO0FBQ2Y7QUFDQTtJQUNJO0lBQ0EsbUJBQW1CO0lBQ25CLCtDQUErQztJQUMvQztJQUNBO0lBQ0EsbUJBQW1CO0lBQ25CLCtDQUErQztJQUMvQztJQUNBO0lBQ0EsbUJBQW1CO0lBQ25CLCtDQUErQztJQUMvQztJQUNBO0lBQ0Esd0JBQXdCO0lBQ3hCLCtDQUErQztJQUMvQztBQUNKO0FBakJBO0lBQ0k7SUFDQSxtQkFBbUI7SUFDbkIsK0NBQStDO0lBQy9DO0lBQ0E7SUFDQSxtQkFBbUI7SUFDbkIsK0NBQStDO0lBQy9DO0lBQ0E7SUFDQSxtQkFBbUI7SUFDbkIsK0NBQStDO0lBQy9DO0lBQ0E7SUFDQSx3QkFBd0I7SUFDeEIsK0NBQStDO0lBQy9DO0FBQ0o7QUFDQSwwQkFBMEI7QUFDMUI7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSSwyQkFBbUI7WUFBbkIsbUJBQW1CO0FBQ3ZCO0FBQ0E7SUFDSTtRQUNJLFFBQVE7SUFDWjtBQUNKO0FBSkE7SUFDSTtRQUNJLFFBQVE7SUFDWjtBQUNKO0FBQ0Esb0JBQW9CO0FBQ3BCO0FBQ0EsMENBQTBDO0FBQzFDLGdCQUFnQjtBQUNoQjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSSxlQUFlO0lBQ2YsY0FBYztJQUNkLFlBQVk7SUFDWixrQkFBa0I7SUFDbEIsc0JBQXNCO0lBQ3RCLHNCQUFzQjtJQUN0QixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjtBQUNyQjtBQUNBO0lBQ0ksY0FBYztBQUNsQjtBQUNBO0lBQ0ksY0FBYztJQUNkLGtCQUFrQjtBQUN0QjtBQUNBO0lBQ0ksc0JBQXNCO0FBQzFCO0FBQ0E7SUFDSTtRQUNJLHFCQUFxQjtJQUN6QjtBQUNKIiwiZmlsZSI6InNyYy9hcHAvbmV3cy9uZXdzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1MdWNraWVzdCtHdXkmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVF1aWNrc2FuZDp3Z2h0QDUwMCZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9SnVsaXVzK1NhbnMrT25lJmRpc3BsYXk9c3dhcCcpO1xyXG4vKiBNQUlOIEJBQ0tHUk9VTkQgKi9cclxuYm9keSwuY29udGFpbmVyLWZsdWlke1xyXG4gICAgYmFja2dyb3VuZDpsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsIzBlMWE4YixyZ2IoMTM0LCA5LCAxMzQpKTtcclxufVxyXG4vKiBURVhUIFNUWUxFICovXHJcbmgxe1xyXG4gICAgZm9udC1mYW1pbHk6J0p1bGl1cyBTYW5zIE9uZScsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXNpemU6bGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDo2MDA7ICBcclxufVxyXG5oM3tcclxuICAgIGZvbnQtZmFtaWx5OiAnTHVja2llc3QgR3V5JywgY3Vyc2l2ZTtcclxuICAgIGZvbnQtc2l6ZTp4eHgtbGFyZ2U7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG4gICAgY29sb3I6cmdiKDI1NSwgMjcsIDI3KTtcclxuICAgIHRleHQtc2hhZG93OjVweCAwcHggMXB4IHdoaXRlc21va2U7XHJcbn1cclxuYntcclxuICAgIGNvbG9yOnJlZDtcclxuICAgIHBvc2l0aW9uOnJlbGF0aXZlO1xyXG4gICAgdG9wOjNweDtcclxuICAgIGFuaW1hdGlvbjpib3VuY2UgLjNzIGVhc2UgaW5maW5pdGUgYWx0ZXJuYXRlOyBcclxufVxyXG5we1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG4gICAgZm9udC1zaXplOngtbGFyZ2U7XHJcbn1cclxuLmRpdmlkZXJ7XHJcbiAgICB3aWR0aDo5OCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOm9yYW5nZXJlZDtcclxuICAgIG9wYWNpdHk6MC4zO1xyXG59XHJcbi5jYXJkLXRleHR7XHJcbiAgICBmb250LWZhbWlseTonUXVpY2tzYW5kJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcclxufVxyXG4uZXZlbnQtY29udGFpbmVye1xyXG4gICAgZm9udC1mYW1pbHk6XCJSb2JvdG9cIixzYW5zLXNlcmlmO1xyXG59XHJcbi8qIEJVQkJMRSBFRkZFQ1QgKi9cclxuLmJveCBkaXZ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBoZWlnaHQ6NzBweDtcclxufVxyXG4uYm94IGRpdjpudGgtY2hpbGQoMSl7XHJcbiAgICB0b3A6NyU7XHJcbiAgICBsZWZ0OjU3JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDg3LCAxMTYsIDI0NSk7XHJcbiAgICBhbmltYXRpb246YW5pbWF0ZSA5cyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICAgIG9wYWNpdHk6MC4yO1xyXG59XHJcbi5ib3ggZGl2Om50aC1jaGlsZCgyKXtcclxuICAgIHRvcDoyNSU7XHJcbiAgICBsZWZ0OjMlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoMjU1LCAyMCwgMTk2KTtcclxuICAgIGFuaW1hdGlvbjphbmltYXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBvcGFjaXR5OjAuMztcclxufVxyXG4uYm94IGRpdjpudGgtY2hpbGQoMyl7XHJcbiAgICB0b3A6NDIlO1xyXG4gICAgbGVmdDo3MyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTQ4LCAyNTUsIDg2KTtcclxuICAgIGFuaW1hdGlvbjphbmltYXRlIDhzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gICAgb3BhY2l0eTowLjM7XHJcbn1cclxuQGtleWZyYW1lcyBhbmltYXRle1xyXG4gICAgMCV7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDApO1xyXG4gICAgYm9yZGVyLXJhZGl1czo2MCUgNDAlIDMyJSA2OCUgLyAzOCUgMzYlIDY0JSA2MiU7ICBcclxuICAgIH1cclxuICAgIDQwJXtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOjQ1JSA1NSUgNDklIDUxJSAvIDM2JSA1MSUgNDklIDY0JTtcclxuICAgIH1cclxuICAgIDYwJXtcclxuICAgIHRyYW5zZm9ybTpyb3RhdGUoMCk7XHJcbiAgICBib3JkZXItcmFkaXVzOjYwJSA0MCUgNTclIDQzJSAvIDQ3JSA2MiUgMzglIDUzJTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICB0cmFuc2Zvcm06cm90YXRlKDM2MGRlZyk7XHJcbiAgICBib3JkZXItcmFkaXVzOjYwJSA0MCUgMzIlIDY4JSAvIDM4JSAzNiUgNjQlIDYyJTtcclxuICAgIH1cclxufVxyXG4vKiBCT1VOQ0UgVEVYVCBBTklNQVRJT04gKi9cclxuYjpudGgtY2hpbGQoMil7XHJcbiAgICBhbmltYXRpb24tZGVsYXk6LjFzO1xyXG59XHJcbmI6bnRoLWNoaWxkKDMpe1xyXG4gICAgYW5pbWF0aW9uLWRlbGF5Oi4ycztcclxufVxyXG5iOm50aC1jaGlsZCg0KXtcclxuICAgIGFuaW1hdGlvbi1kZWxheTouM3M7XHJcbn1cclxuQGtleWZyYW1lcyBib3VuY2V7XHJcbiAgICAxMDAle1xyXG4gICAgICAgIHRvcDotM3B4O1xyXG4gICAgfVxyXG59XHJcbi8qIEVWRU5ULUNPTlRBSU5FUiAqL1xyXG4uZXZlbnQtY29udGFpbmVyIC5ldmVudHtcclxuYm94LXNoYWRvdzowIDRweCAxNnB4IC04cHggcmdiYSgwLDAsMCwwLjQpO1xyXG5iYWNrZ3JvdW5kOiNmZmZmO1xyXG59XHJcbi5ldmVudC1kYXRle1xyXG4gICAgY29sb3I6cmdiKDIzNiwgMzcsIDk3KTtcclxufVxyXG4uZXZlbnQgLmV2ZW50LWxlZnR7XHJcbiAgICBiYWNrZ3JvdW5kOiMyMjI7XHJcbiAgICBtaW4td2lkdGg6ODBweDtcclxuICAgIGRpc3BsYXk6ZmxleDtcclxuICAgIGFsaWduLWl0ZW1zOmNlbnRlcjtcclxuICAgIGp1c3RpZnktY29udGVudDpjZW50ZXI7XHJcbiAgICBjb2xvcjpyZ2IoNTYsIDIxNiwgNTYpO1xyXG4gICAgcGFkZGluZzo4cHggNDhweDtcclxuICAgIGZvbnQtd2VpZ2h0OmJvbGQ7XHJcbiAgICB0ZXh0LWFsaWduOmNlbnRlcjtcclxufVxyXG4uZXZlbnQgLmV2ZW50LWxlZnQgLmRhdGV7XHJcbiAgICBmb250LXNpemU6NTZweDtcclxufVxyXG4uZXZlbnQgLmV2ZW50LWxlZnQgLm1vbnRoe1xyXG4gICAgZm9udC1zaXplOjE2cHg7XHJcbiAgICBmb250LXdlaWdodDpub3JtYWw7XHJcbn1cclxuLmV2ZW50IC5ldmVudC1yaWdodHtcclxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbn1cclxuQG1lZGlhKG1heC13aWR0aDo2MDBweCl7XHJcbiAgICAuZXZlbnR7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246Y29sdW1uO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/news/news.component.ts":
  /*!****************************************!*\
    !*** ./src/app/news/news.component.ts ***!
    \****************************************/

  /*! exports provided: NewsComponent */

  /***/
  function srcAppNewsNewsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NewsComponent", function () {
      return NewsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var NewsComponent = /*#__PURE__*/function () {
      function NewsComponent() {
        _classCallCheck(this, NewsComponent);
      }

      _createClass(NewsComponent, [{
        key: "goback",
        value: function goback() {
          window.history.back();
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return NewsComponent;
    }();

    NewsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-news',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./news.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/news/news.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./news.component.css */
      "./src/app/news/news.component.css"))["default"]]
    })], NewsComponent);
    /***/
  },

  /***/
  "./src/app/notify/notify.component.css":
  /*!*********************************************!*\
    !*** ./src/app/notify/notify.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppNotifyNotifyComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL25vdGlmeS9ub3RpZnkuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/notify/notify.component.ts":
  /*!********************************************!*\
    !*** ./src/app/notify/notify.component.ts ***!
    \********************************************/

  /*! exports provided: NotifyComponent */

  /***/
  function srcAppNotifyNotifyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NotifyComponent", function () {
      return NotifyComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony import */


    var _services__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services */
    "./src/app/services/index.ts");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");

    var NotifyComponent = /*#__PURE__*/function () {
      function NotifyComponent(router, user, alert, snackBar, authentication) {
        var _this13 = this;

        _classCallCheck(this, NotifyComponent);

        this.router = router;
        this.user = user;
        this.alert = alert;
        this.snackBar = snackBar;
        this.authentication = authentication;
        this.count = 0;
        this.submitted = false;
        this.currentUserSubscription = this.authentication.currentUser.subscribe(function (user) {
          _this13.currentUser = user; //authenticated user data
        });
        this.user.notificationSource.subscribe(function (data) {
          _this13.value = data; //sender data
        });
      }

      _createClass(NotifyComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.compareUser();
        }
      }, {
        key: "compareUser",
        value: function compareUser() {
          if (this.currentUser.name === this.value.name && this.currentUser.email === this.value.email && this.currentUser.contact === this.value.contact && this.currentUser.location === this.value.location) {
            this.avail = this.value.type;
            this.request$ = this.user.getReq(this.avail); //recieved message from patient

            this.count++; // this.user.getCount(this.count);
          }
        }
      }, {
        key: "attendRequest",
        value: function attendRequest(value1, value2) {
          var _this14 = this;

          this.attending = true;
          this.alert.sentRequest(this.attending);
          this.user.delRequest(value1, value2).subscribe(function (data) {
            console.log(data), function (err) {
              return console.log(err);
            }, _this14.submitted = true;
          });

          if (this.submitted == true) {
            this.snackBar.open("SMS sent", 'Dismiss');
          }
        }
      }, {
        key: "ignoreRequest",
        value: function ignoreRequest() {
          this.attending = false;
          this.alert.sentRequest(this.attending);
        }
      }]);

      return NotifyComponent;
    }();

    NotifyComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_2__["UserService"]
      }, {
        type: _services__WEBPACK_IMPORTED_MODULE_5__["AlertService"]
      }, {
        type: _angular_material__WEBPACK_IMPORTED_MODULE_6__["MatSnackBar"]
      }, {
        type: _services_authentication_service__WEBPACK_IMPORTED_MODULE_4__["AuthenticationService"]
      }];
    };

    NotifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-notify',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./notify.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/notify/notify.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./notify.component.css */
      "./src/app/notify/notify.component.css"))["default"]]
    })], NotifyComponent);
    /***/
  },

  /***/
  "./src/app/orequest/orequest.component.css":
  /*!*************************************************!*\
    !*** ./src/app/orequest/orequest.component.css ***!
    \*************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrequestOrequestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MAIN BACKGROUND */\r\n.background{\r\n    background: linear-gradient(to bottom right, #fff2f1 0%, #ff6e6e 100%);\r\n}\r\n/* FORM STYLES */\r\n.request-form {\r\n    width:auto;\r\n    background-color: white;\r\n    padding: 20px; \r\n    border-radius:15px;\r\n}\r\n.request-form-field {\r\n    min-width: 100%;\r\n}\r\n.request-for-button {\r\n    margin-bottom: 15px;\r\n}\r\n.request-form-actions {\r\n    padding: 20px;\r\n}\r\n.mat-btn{\r\n    width:100px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JlcXVlc3Qvb3JlcXVlc3QuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvQkFBb0I7QUFDcEI7SUFDSSxzRUFBc0U7QUFDMUU7QUFDQSxnQkFBZ0I7QUFDaEI7SUFDSSxVQUFVO0lBQ1YsdUJBQXVCO0lBQ3ZCLGFBQWE7SUFDYixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG1CQUFtQjtBQUN2QjtBQUNBO0lBQ0ksYUFBYTtBQUNqQjtBQUNBO0lBQ0ksV0FBVztBQUNmIiwiZmlsZSI6InNyYy9hcHAvb3JlcXVlc3Qvb3JlcXVlc3QuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIE1BSU4gQkFDS0dST1VORCAqL1xyXG4uYmFja2dyb3VuZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byBib3R0b20gcmlnaHQsICNmZmYyZjEgMCUsICNmZjZlNmUgMTAwJSk7XHJcbn1cclxuLyogRk9STSBTVFlMRVMgKi9cclxuLnJlcXVlc3QtZm9ybSB7XHJcbiAgICB3aWR0aDphdXRvO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgICBwYWRkaW5nOiAyMHB4OyBcclxuICAgIGJvcmRlci1yYWRpdXM6MTVweDtcclxufVxyXG4ucmVxdWVzdC1mb3JtLWZpZWxkIHtcclxuICAgIG1pbi13aWR0aDogMTAwJTtcclxufVxyXG4ucmVxdWVzdC1mb3ItYnV0dG9uIHtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbn1cclxuLnJlcXVlc3QtZm9ybS1hY3Rpb25zIHtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbn1cclxuLm1hdC1idG57XHJcbiAgICB3aWR0aDoxMDBweDtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/orequest/orequest.component.ts":
  /*!************************************************!*\
    !*** ./src/app/orequest/orequest.component.ts ***!
    \************************************************/

  /*! exports provided: OrequestComponent */

  /***/
  function srcAppOrequestOrequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrequestComponent", function () {
      return OrequestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var OrequestComponent = /*#__PURE__*/function () {
      function OrequestComponent(fb, route, router, user) {
        _classCallCheck(this, OrequestComponent);

        this.fb = fb;
        this.route = route;
        this.router = router;
        this.user = user;
        this.minDate = new Date();
        this.year = this.minDate.getFullYear();
        this.month = this.minDate.getMonth();
        this.day = this.minDate.getDate() + 10; //only 10 days requirement for emergency operation 

        this.maxDate = new Date(this.year, this.month, this.day);
        this.requestForm = this.fb.group({
          name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
          contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{10}$')]],
          id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{12}$')]],
          pname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]*')]],
          page: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]],
          type: ['odonor'],
          gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
          organ: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          location: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
          requiredDate: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
      }

      _createClass(OrequestComponent, [{
        key: "goback",
        value: function goback() {
          window.history.back();
        }
      }, {
        key: "saveRequest",
        value: function saveRequest() {
          this.openSpinner();
          if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function (position) {
            console.log(position); //  $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true",function(data){
            //   console.log(data);
            //  })                  //GMAP'S INTEGRATION
          });else {
            console.log("location is not supported");
          }
          this.user.orequest(this.requestForm.value).subscribe(function (data) {
            return console.log(data, "Successfully submitted!");
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openSpinner",
        value: function openSpinner() {
          var _this15 = this;

          var value = this.requestForm.value.type;
          this.isLoading = true;
          setTimeout(function () {
            _this15.isLoading = false;

            _this15.login(value);
          }, 5000);
        }
      }, {
        key: "login",
        value: function login(value) {
          this.router.navigate([value], {
            relativeTo: this.route
          });
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrequestComponent;
    }();

    OrequestComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    OrequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-orequest',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./orequest.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/orequest/orequest.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./orequest.component.css */
      "./src/app/orequest/orequest.component.css"))["default"]]
    })], OrequestComponent);
    /***/
  },

  /***/
  "./src/app/organdonation/keyframes.ts":
  /*!********************************************!*\
    !*** ./src/app/organdonation/keyframes.ts ***!
    \********************************************/

  /*! exports provided: tada, bounceIn, bounceOut */

  /***/
  function srcAppOrgandonationKeyframesTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "tada", function () {
      return tada;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounceIn", function () {
      return bounceIn;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "bounceOut", function () {
      return bounceOut;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var tada = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      offset: .1
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)',
      offset: .2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: .3
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: .4
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: .5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: .6
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: .7
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)',
      offset: .8
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)',
      offset: .9
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'none',
      offset: 1
    })];
    var bounceIn = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'rotate3d(0,0,1,-200deg)',
      opacity: 0,
      offset: .0
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'translate3d(0,0,0)',
      opacity: 1,
      offset: 1
    })];
    var bounceOut = [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(0.9,0.9,0.9)',
      offset: .2
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1,1.1,1.1)',
      opacity: 1,
      offset: .5
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(1.1,1.1,1.1)',
      opacity: 1,
      offset: .55
    }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_1__["style"])({
      transform: 'scale3d(0,0,0)',
      opacity: 0,
      offset: 1
    })];
    /***/
  },

  /***/
  "./src/app/organdonation/organdonation.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/organdonation/organdonation.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppOrgandonationOrgandonationComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n/* MAIN BACKGROUND */\r\nbody,.container-fluid{\r\n    background: linear-gradient(to right, #41295a, #2f0743);\r\n    /* background: linear-gradient(to right, #021327, #080f1b); W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+     */\r\n}\r\n/* TEXT STYLES */\r\nh2,h4{\r\n    font-family: 'Julius Sans One', sans-serif;\r\n    font-weight:600;\r\n}\r\n.card-title{\r\n    color:#fd3477;\r\n}\r\nhr{\r\n    width:60%;\r\n    background-color:#fd3477;\r\n}\r\n.card-text{\r\n    font-family:'Montserrat', sans-serif;\r\n    font-size:large;\r\n    font-weight:500;\r\n}\r\n/* CARD BUTTON */\r\nbutton{\r\n    height:45px;\r\n}\r\n/* BUBBLES ANIMATION */\r\n.box div{\r\n    position:absolute;\r\n    width:70px;\r\n    height:70px;\r\n  }\r\n.box div:nth-child(1){\r\n    top:97%;\r\n    left:6%;\r\n    background-color:rgb(28, 119, 255);\r\n    -webkit-animation:animate 11s linear infinite;\r\n            animation:animate 11s linear infinite;\r\n    border-radius:50%;\r\n  }\r\n.box div:nth-child(2){\r\n    top:16%;\r\n    left:77%;\r\n    background-color: rgb(255, 86, 86);\r\n    -webkit-animation:animate 12s linear infinite;\r\n            animation:animate 12s linear infinite;\r\n    border-radius:50%;\r\n  }\r\n.box div:nth-child(3){\r\n    top:10%;\r\n    left:5%;\r\n    background-color:#fd3477;\r\n    -webkit-animation:animate 11s linear infinite;\r\n            animation:animate 11s linear infinite;\r\n    border-radius:50%;\r\n  }\r\n.box div:nth-child(4){\r\n    top:98%;\r\n    left:76%;\r\n    background-color:rgb(93, 253, 61); \r\n    -webkit-animation:animate 10s linear infinite; \r\n            animation:animate 10s linear infinite;\r\n  }\r\n.box div:nth-child(5){\r\n    top:50%;\r\n    left:15%;\r\n    background-color:rgb(255, 122, 34); \r\n    -webkit-animation:animate 10s linear infinite; \r\n            animation:animate 10s linear infinite;\r\n  }\r\n@-webkit-keyframes animate{\r\n    0%{\r\n      transform: scale(0) translateY(0) rotate(0);\r\n      opacity:1;\r\n    }\r\n    100%{\r\n      transform: scale(1.0) translateY(-90px) rotate(360deg);\r\n      opacity:0;\r\n    }\r\n  }\r\n@keyframes animate{\r\n    0%{\r\n      transform: scale(0) translateY(0) rotate(0);\r\n      opacity:1;\r\n    }\r\n    100%{\r\n      transform: scale(1.0) translateY(-90px) rotate(360deg);\r\n      opacity:0;\r\n    }\r\n  }\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvb3JnYW5kb25hdGlvbi9vcmdhbmRvbmF0aW9uLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0ZBQW9GO0FBQ3BGLCtFQUErRTtBQUMvRSxvQkFBb0I7QUFDcEI7SUFDSSx1REFBdUQ7SUFDdkQsa0lBQWtJO0FBQ3RJO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksMENBQTBDO0lBQzFDLGVBQWU7QUFDbkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFNBQVM7SUFDVCx3QkFBd0I7QUFDNUI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBLGdCQUFnQjtBQUNoQjtJQUNJLFdBQVc7QUFDZjtBQUNBLHNCQUFzQjtBQUNwQjtJQUNFLGlCQUFpQjtJQUNqQixVQUFVO0lBQ1YsV0FBVztFQUNiO0FBQ0E7SUFDRSxPQUFPO0lBQ1AsT0FBTztJQUNQLGtDQUFrQztJQUNsQyw2Q0FBcUM7WUFBckMscUNBQXFDO0lBQ3JDLGlCQUFpQjtFQUNuQjtBQUNBO0lBQ0UsT0FBTztJQUNQLFFBQVE7SUFDUixrQ0FBa0M7SUFDbEMsNkNBQXFDO1lBQXJDLHFDQUFxQztJQUNyQyxpQkFBaUI7RUFDbkI7QUFDQTtJQUNFLE9BQU87SUFDUCxPQUFPO0lBQ1Asd0JBQXdCO0lBQ3hCLDZDQUFxQztZQUFyQyxxQ0FBcUM7SUFDckMsaUJBQWlCO0VBQ25CO0FBQ0E7SUFDRSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGlDQUFpQztJQUNqQyw2Q0FBcUM7WUFBckMscUNBQXFDO0VBQ3ZDO0FBQ0E7SUFDRSxPQUFPO0lBQ1AsUUFBUTtJQUNSLGtDQUFrQztJQUNsQyw2Q0FBcUM7WUFBckMscUNBQXFDO0VBQ3ZDO0FBQ0E7SUFDRTtNQUNFLDJDQUEyQztNQUMzQyxTQUFTO0lBQ1g7SUFDQTtNQUNFLHNEQUFzRDtNQUN0RCxTQUFTO0lBQ1g7RUFDRjtBQVRBO0lBQ0U7TUFDRSwyQ0FBMkM7TUFDM0MsU0FBUztJQUNYO0lBQ0E7TUFDRSxzREFBc0Q7TUFDdEQsU0FBUztJQUNYO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9vcmdhbmRvbmF0aW9uL29yZ2FuZG9uYXRpb24uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUp1bGl1cytTYW5zK09uZSZkaXNwbGF5PXN3YXAnKTtcclxuQGltcG9ydCB1cmwoJ2h0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9TW9udHNlcnJhdCZkaXNwbGF5PXN3YXAnKTtcclxuLyogTUFJTiBCQUNLR1JPVU5EICovXHJcbmJvZHksLmNvbnRhaW5lci1mbHVpZHtcclxuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCwgIzQxMjk1YSwgIzJmMDc0Myk7XHJcbiAgICAvKiBiYWNrZ3JvdW5kOiBsaW5lYXItZ3JhZGllbnQodG8gcmlnaHQsICMwMjEzMjcsICMwODBmMWIpOyBXM0MsIElFIDEwKy8gRWRnZSwgRmlyZWZveCAxNissIENocm9tZSAyNissIE9wZXJhIDEyKywgU2FmYXJpIDcrICAgICAqL1xyXG59XHJcbi8qIFRFWFQgU1RZTEVTICovXHJcbmgyLGg0e1xyXG4gICAgZm9udC1mYW1pbHk6ICdKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwO1xyXG59XHJcbi5jYXJkLXRpdGxle1xyXG4gICAgY29sb3I6I2ZkMzQ3NztcclxufVxyXG5ocntcclxuICAgIHdpZHRoOjYwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkMzQ3NztcclxufVxyXG4uY2FyZC10ZXh0e1xyXG4gICAgZm9udC1mYW1pbHk6J01vbnRzZXJyYXQnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOmxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6NTAwO1xyXG59XHJcbi8qIENBUkQgQlVUVE9OICovXHJcbmJ1dHRvbntcclxuICAgIGhlaWdodDo0NXB4O1xyXG59XHJcbi8qIEJVQkJMRVMgQU5JTUFUSU9OICovXHJcbiAgLmJveCBkaXZ7XHJcbiAgICBwb3NpdGlvbjphYnNvbHV0ZTtcclxuICAgIHdpZHRoOjcwcHg7XHJcbiAgICBoZWlnaHQ6NzBweDtcclxuICB9XHJcbiAgLmJveCBkaXY6bnRoLWNoaWxkKDEpe1xyXG4gICAgdG9wOjk3JTtcclxuICAgIGxlZnQ6NiU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnJnYigyOCwgMTE5LCAyNTUpO1xyXG4gICAgYW5pbWF0aW9uOmFuaW1hdGUgMTFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIH1cclxuICAuYm94IGRpdjpudGgtY2hpbGQoMil7XHJcbiAgICB0b3A6MTYlO1xyXG4gICAgbGVmdDo3NyU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMjU1LCA4NiwgODYpO1xyXG4gICAgYW5pbWF0aW9uOmFuaW1hdGUgMTJzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIGJvcmRlci1yYWRpdXM6NTAlO1xyXG4gIH1cclxuICAuYm94IGRpdjpudGgtY2hpbGQoMyl7XHJcbiAgICB0b3A6MTAlO1xyXG4gICAgbGVmdDo1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6I2ZkMzQ3NztcclxuICAgIGFuaW1hdGlvbjphbmltYXRlIDExcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgICBib3JkZXItcmFkaXVzOjUwJTtcclxuICB9XHJcbiAgLmJveCBkaXY6bnRoLWNoaWxkKDQpe1xyXG4gICAgdG9wOjk4JTtcclxuICAgIGxlZnQ6NzYlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjpyZ2IoOTMsIDI1MywgNjEpOyBcclxuICAgIGFuaW1hdGlvbjphbmltYXRlIDEwcyBsaW5lYXIgaW5maW5pdGU7XHJcbiAgfVxyXG4gIC5ib3ggZGl2Om50aC1jaGlsZCg1KXtcclxuICAgIHRvcDo1MCU7XHJcbiAgICBsZWZ0OjE1JTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6cmdiKDI1NSwgMTIyLCAzNCk7IFxyXG4gICAgYW5pbWF0aW9uOmFuaW1hdGUgMTBzIGxpbmVhciBpbmZpbml0ZTtcclxuICB9XHJcbiAgQGtleWZyYW1lcyBhbmltYXRle1xyXG4gICAgMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMCkgdHJhbnNsYXRlWSgwKSByb3RhdGUoMCk7XHJcbiAgICAgIG9wYWNpdHk6MTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wKSB0cmFuc2xhdGVZKC05MHB4KSByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgb3BhY2l0eTowO1xyXG4gICAgfVxyXG4gIH1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/organdonation/organdonation.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/organdonation/organdonation.component.ts ***!
    \**********************************************************/

  /*! exports provided: OrgandonationComponent */

  /***/
  function srcAppOrgandonationOrgandonationComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "OrgandonationComponent", function () {
      return OrgandonationComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");
    /* harmony import */


    var _keyframes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./keyframes */
    "./src/app/organdonation/keyframes.ts");

    var OrgandonationComponent = /*#__PURE__*/function () {
      function OrgandonationComponent() {
        _classCallCheck(this, OrgandonationComponent);
      }

      _createClass(OrgandonationComponent, [{
        key: "goback",
        value: function goback() {
          window.history.back();
        }
      }, {
        key: "startAnimation",
        value: function startAnimation(state) {
          if (!this.animationState) {
            this.animationState = state;
          }
        }
      }, {
        key: "resetAnimationState",
        value: function resetAnimationState() {
          this.animationState = '';
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return OrgandonationComponent;
    }();

    OrgandonationComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-organdonation',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./organdonation.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/organdonation/organdonation.component.html"))["default"],
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["trigger"])('cardAnimator', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => tada', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["tada"]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => bounceIn', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["bounceIn"]))), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["transition"])('* => bounceOut', Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["animate"])(1000, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_2__["keyframes"])(_keyframes__WEBPACK_IMPORTED_MODULE_3__["bounceOut"])))])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./organdonation.component.css */
      "./src/app/organdonation/organdonation.component.css"))["default"]]
    })], OrgandonationComponent);
    /***/
  },

  /***/
  "./src/app/page-not-found/page-not-found.component.ts":
  /*!************************************************************!*\
    !*** ./src/app/page-not-found/page-not-found.component.ts ***!
    \************************************************************/

  /*! exports provided: PageNotFoundComponent */

  /***/
  function srcAppPageNotFoundPageNotFoundComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PageNotFoundComponent", function () {
      return PageNotFoundComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PageNotFoundComponent = /*#__PURE__*/function () {
      function PageNotFoundComponent() {
        _classCallCheck(this, PageNotFoundComponent);
      }

      _createClass(PageNotFoundComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return PageNotFoundComponent;
    }();

    PageNotFoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-page-not-found',
      template: " <h1 class='text-center p-4'>\n     ERROR 404 page-not-found !\n     Invalid URL !!\n    </h1>\n  ",
      styles: ["h1,h2{font-weight:xx-large;color:#5499C7;font-size:3em;}"]
    })], PageNotFoundComponent);
    /***/
  },

  /***/
  "./src/app/request/request.component.css":
  /*!***********************************************!*\
    !*** ./src/app/request/request.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRequestRequestComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "/* MAIN BACKGROUND */\r\n.background{\r\n    background: linear-gradient(to bottom right, #fff2f1 0%, #ff6e6e 100%);\r\n}\r\n/* FORM STYLES */\r\n.request-form {\r\n    width:auto;\r\n    background-color: white;\r\n    padding: 20px; \r\n    border-radius:15px;\r\n}\r\n.request-form-field {\r\n    min-width: 100%;\r\n}\r\n.request-for-button {\r\n    margin-bottom: 15px;\r\n}\r\n.request-form-actions {\r\n    padding: 20px;\r\n}\r\n.mat-btn{\r\n    width:100px;\r\n}\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVxdWVzdC9yZXF1ZXN0LmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0JBQW9CO0FBQ3BCO0lBQ0ksc0VBQXNFO0FBQzFFO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksVUFBVTtJQUNWLHVCQUF1QjtJQUN2QixhQUFhO0lBQ2Isa0JBQWtCO0FBQ3RCO0FBQ0E7SUFDSSxlQUFlO0FBQ25CO0FBQ0E7SUFDSSxtQkFBbUI7QUFDdkI7QUFDQTtJQUNJLGFBQWE7QUFDakI7QUFDQTtJQUNJLFdBQVc7QUFDZiIsImZpbGUiOiJzcmMvYXBwL3JlcXVlc3QvcmVxdWVzdC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogTUFJTiBCQUNLR1JPVU5EICovXHJcbi5iYWNrZ3JvdW5ke1xyXG4gICAgYmFja2dyb3VuZDogbGluZWFyLWdyYWRpZW50KHRvIGJvdHRvbSByaWdodCwgI2ZmZjJmMSAwJSwgI2ZmNmU2ZSAxMDAlKTtcclxufVxyXG4vKiBGT1JNIFNUWUxFUyAqL1xyXG4ucmVxdWVzdC1mb3JtIHtcclxuICAgIHdpZHRoOmF1dG87XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuICAgIHBhZGRpbmc6IDIwcHg7IFxyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG59XHJcbi5yZXF1ZXN0LWZvcm0tZmllbGQge1xyXG4gICAgbWluLXdpZHRoOiAxMDAlO1xyXG59XHJcbi5yZXF1ZXN0LWZvci1idXR0b24ge1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxufVxyXG4ucmVxdWVzdC1mb3JtLWFjdGlvbnMge1xyXG4gICAgcGFkZGluZzogMjBweDtcclxufVxyXG4ubWF0LWJ0bntcclxuICAgIHdpZHRoOjEwMHB4O1xyXG59XHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/request/request.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/request/request.component.ts ***!
    \**********************************************/

  /*! exports provided: RequestComponent */

  /***/
  function srcAppRequestRequestComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RequestComponent", function () {
      return RequestComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var RequestComponent = /*#__PURE__*/function () {
      function RequestComponent(fb, router, route, user) {
        _classCallCheck(this, RequestComponent);

        this.fb = fb;
        this.router = router;
        this.route = route;
        this.user = user;
        this.minDate = new Date();
        this.year = this.minDate.getFullYear();
        this.month = this.minDate.getMonth();
        this.day = this.minDate.getDate() + 10; //only 10 days requirement for emergency operation 

        this.maxDate = new Date(this.year, this.month, this.day);
      }

      _createClass(RequestComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.sendRequestForm();
        }
      }, {
        key: "goback",
        value: function goback() {
          window.history.back();
        }
      }, {
        key: "sendRequestForm",
        value: function sendRequestForm() {
          this.requestForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{10}$')]],
            id: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('^[0-9]{12}$')]],
            pname: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].pattern('[a-zA-Z]*')]],
            page: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].maxLength(2)]],
            gender: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            type: ['bdonor'],
            requestFor: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]],
            bloodGroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            units: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].minLength(3)]],
            requiredDate: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]]
          });
        }
      }, {
        key: "saveRequest",
        value: function saveRequest() {
          this.openSpinner();
          if (navigator.geolocation) navigator.geolocation.getCurrentPosition(function (position) {//  $.get("http://maps.googleapis.com/maps/api/geocode/json?latlng="+position.coords.latitude+","+position.coords.longitude+"&sensor=true",function(data){
            //   console.log(data);
            //  })
          });else {
            console.log("location is not supported");
          }
          this.user.request(this.requestForm.value).subscribe(function (data) {
            return console.log(data, "Successfully submitted!");
          }, function (error) {
            return console.log(error);
          });
        }
      }, {
        key: "openSpinner",
        value: function openSpinner() {
          var _this16 = this;

          var value = this.requestForm.value.type;
          this.isLoading = true;
          setTimeout(function () {
            _this16.isLoading = false;

            _this16.login(value);
          }, 5000);
        }
      }, {
        key: "login",
        value: function login(value) {
          this.router.navigate([value], {
            relativeTo: this.route
          });
        }
      }]);

      return RequestComponent;
    }();

    RequestComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    RequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-request',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./request.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/request/request.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./request.component.css */
      "./src/app/request/request.component.css"))["default"]]
    })], RequestComponent);
    /***/
  },

  /***/
  "./src/app/services/alert.service.ts":
  /*!*******************************************!*\
    !*** ./src/app/services/alert.service.ts ***!
    \*******************************************/

  /*! exports provided: AlertService */

  /***/
  function srcAppServicesAlertServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return AlertService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");

    var AlertService = /*#__PURE__*/function () {
      function AlertService(router) {
        var _this17 = this;

        _classCallCheck(this, AlertService);

        this.router = router;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.keepAfterNavigationChange = false;
        this.reqtxt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](null);
        this.requestSource = this.reqtxt.asObservable(); // clear alert message on route change

        router.events.subscribe(function (event) {
          if (event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationStart"]) {
            if (_this17.keepAfterNavigationChange) {
              // only keep for a single location change
              _this17.keepAfterNavigationChange = false;
            } else {
              // clear alert
              _this17.subject.next();
            }
          }
        });
      }

      _createClass(AlertService, [{
        key: "sentRequest",
        value: function sentRequest(value) {
          this.reqtxt.next(value);
        }
      }, {
        key: "success",
        value: function success(message) {
          var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterNavigationChange = keepAfterNavigationChange;
          this.subject.next({
            type: 'success',
            text: message
          });
        }
      }, {
        key: "error",
        value: function error(message) {
          var keepAfterNavigationChange = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
          this.keepAfterNavigationChange = keepAfterNavigationChange;
          this.subject.next({
            type: 'error',
            text: message
          });
        }
      }, {
        key: "getMessage",
        value: function getMessage() {
          return this.subject.asObservable();
        }
      }]);

      return AlertService;
    }();

    AlertService.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AlertService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AlertService);
    /***/
  },

  /***/
  "./src/app/services/auth.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/auth.service.ts ***!
    \******************************************/

  /*! exports provided: AuthService */

  /***/
  function srcAppServicesAuthServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthService", function () {
      return AuthService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! firebase/app */
    "./node_modules/firebase/app/dist/index.cjs.js");
    /* harmony import */


    var firebase_app__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(firebase_app__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/fire/auth */
    "./node_modules/@angular/fire/auth/es2015/index.js");
    /* harmony import */


    var _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/fire/firestore */
    "./node_modules/@angular/fire/firestore/es2015/index.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthService = /*#__PURE__*/function () {
      function AuthService(afauth, afs, router) {
        var _this18 = this;

        _classCallCheck(this, AuthService);

        this.afauth = afauth;
        this.afs = afs;
        this.router = router;
        this.id = false;
        this.user = this.afauth.authState.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_7__["switchMap"])(function (user) {
          if (user) {
            _this18.id = true;
            return _this18.afs.doc('users/${user.uid}').valueChanges();
          } else {
            _this18.id = false;
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_6__["of"])(null);
          }
        }));
      }

      _createClass(AuthService, [{
        key: "googleSignin",
        value: function googleSignin() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
            var provider, credential;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    this.id = true;
                    provider = new firebase_app__WEBPACK_IMPORTED_MODULE_3__["auth"].GoogleAuthProvider();
                    _context.next = 4;
                    return this.afauth.auth.signInWithPopup(provider);

                  case 4:
                    credential = _context.sent;
                    this.router.navigateByUrl('/home/login/dashboard');
                    return _context.abrupt("return", this.updateUserData(credential.user));

                  case 7:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }, {
        key: "signOut",
        value: function signOut() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0, /*#__PURE__*/regeneratorRuntime.mark(function _callee2() {
            return regeneratorRuntime.wrap(function _callee2$(_context2) {
              while (1) {
                switch (_context2.prev = _context2.next) {
                  case 0:
                    this.id = false;
                    _context2.next = 3;
                    return this.afauth.auth.signOut();

                  case 3:
                    return _context2.abrupt("return", this.router.navigate(['/home/login']));

                  case 4:
                  case "end":
                    return _context2.stop();
                }
              }
            }, _callee2, this);
          }));
        }
      }, {
        key: "updateUserData",
        value: function updateUserData(user) {
          var userRef = this.afs.doc('users/${user.uid}');
          var data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName
          };
          return userRef.set(data, {
            merge: true
          });
        }
      }]);

      return AuthService;
    }();

    AuthService.ctorParameters = function () {
      return [{
        type: _angular_fire_auth__WEBPACK_IMPORTED_MODULE_4__["AngularFireAuth"]
      }, {
        type: _angular_fire_firestore__WEBPACK_IMPORTED_MODULE_5__["AngularFirestore"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthService);
    /***/
  },

  /***/
  "./src/app/services/authentication.service.ts":
  /*!****************************************************!*\
    !*** ./src/app/services/authentication.service.ts ***!
    \****************************************************/

  /*! exports provided: AuthenticationService */

  /***/
  function srcAppServicesAuthenticationServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return AuthenticationService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var AuthenticationService = /*#__PURE__*/function () {
      function AuthenticationService(http) {
        _classCallCheck(this, AuthenticationService);

        this.http = http;
        this.currentUserSubject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](JSON.parse(localStorage.getItem('currentUser')));
        this.currentUser = this.currentUserSubject.asObservable();
      }

      _createClass(AuthenticationService, [{
        key: "login",
        value: function login(name, password) {
          var _this19 = this;

          return this.http.post("/users/authenticate", {
            name: name,
            password: password
          }).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["map"])(function (user) {
            // login successful if there's a jwt token in the response
            if (user && user.token) {
              // store user details and jwt token in local storage to keep user logged in between page refreshes
              localStorage.setItem('currentUser', JSON.stringify(user));

              _this19.currentUserSubject.next(user);
            }

            return user;
          }));
        }
      }, {
        key: "logout",
        value: function logout() {
          // remove user from local storage to log user out
          localStorage.removeItem('currentUser');
          this.currentUserSubject.next(null);
        }
      }, {
        key: "currentUserValue",
        get: function get() {
          return this.currentUserSubject.value;
        }
      }]);

      return AuthenticationService;
    }();

    AuthenticationService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AuthenticationService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AuthenticationService);
    /***/
  },

  /***/
  "./src/app/services/index.ts":
  /*!***********************************!*\
    !*** ./src/app/services/index.ts ***!
    \***********************************/

  /*! exports provided: AuthenticationService, UserService, AlertService */

  /***/
  function srcAppServicesIndexTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _alert_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./alert.service */
    "./src/app/services/alert.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AlertService", function () {
      return _alert_service__WEBPACK_IMPORTED_MODULE_1__["AlertService"];
    });
    /* harmony import */


    var _authentication_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./authentication.service */
    "./src/app/services/authentication.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "AuthenticationService", function () {
      return _authentication_service__WEBPACK_IMPORTED_MODULE_2__["AuthenticationService"];
    });
    /* harmony import */


    var _user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user.service */
    "./src/app/services/user.service.ts");
    /* harmony reexport (safe) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return _user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"];
    });
    /***/

  },

  /***/
  "./src/app/services/user.service.ts":
  /*!******************************************!*\
    !*** ./src/app/services/user.service.ts ***!
    \******************************************/

  /*! exports provided: UserService */

  /***/
  function srcAppServicesUserServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserService", function () {
      return UserService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var rxjs_operators__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs/operators */
    "./node_modules/rxjs/_esm2015/operators/index.js");

    var UserService = /*#__PURE__*/function () {
      function UserService(http) {
        _classCallCheck(this, UserService);

        this.http = http;
        this.datatxt = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"]('default Notification');
        this.notificationSource = this.datatxt.asObservable(); // this.notifCount=new BehaviorSubject<any>(0);
        // this.notifObserve$=this.notifCount.asObservable();    //FOR NOTIFICATION COUNT
      }

      _createClass(UserService, [{
        key: "sendNotification",
        value: function sendNotification(data) {
          this.datatxt.next(data);
        } // getCount(value:number){
        //   this.notifCount.next(value);   //FOR NOTIFICATION COUNT
        // }

      }, {
        key: "count",
        value: function count() {
          return this.http.get("/users/count"); //APPLICATION-FORMS COUNT
        }
      }, {
        key: "registerData",
        value: function registerData(user) {
          var _this20 = this;

          return this.http.post("/users/register", user).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this20.handleError(e);
          })); //USER-SIGNUP
        }
      }, {
        key: "registertion",
        value: function registertion(data) {
          var _this21 = this;

          return this.http.post("/users/hospital", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this21.handleError(e);
          })); //HOSPITAL-SIGNUP
        }
      }, {
        key: "getDonorList",
        value: function getDonorList(type) {
          return this.http.get("/donor/donorList/".concat(type)); //DONORS-LIST BY TYPE
        }
      }, {
        key: "getReq",
        value: function getReq(type) {
          var _this22 = this;

          return this.http.get("/donor/getReq/".concat(type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this22.handleError(e);
          })); //RECIEVED-NOTIF MESSAGE
        }
      }, {
        key: "delRequest",
        value: function delRequest(id, type) {
          var _this23 = this;

          return this.http["delete"]("/donor/delReq/".concat(id, "/").concat(type)).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this23.handleError(e);
          })); //ACCEPTED-REQUEST BY DONOR 
        }
      }, {
        key: "sendForm",
        value: function sendForm(data) {
          var _this24 = this;

          return this.http.post("/users/app", data).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this24.handleError(e);
          })); //APPLICATION-FORM DATA
        }
      }, {
        key: "getAppointments",
        value: function getAppointments() {
          var _this25 = this;

          return this.http.get("/donor/appointment").pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this25.handleError(e);
          })); //GET ALL APPOINTMENTS
        }
      }, {
        key: "sendContact",
        value: function sendContact(contact) {
          return this.http.post("/users/contact", contact); //CONTACT-FORM DATA
        }
      }, {
        key: "request",
        value: function request(req) {
          var _this26 = this;

          return this.http.post("/users/request", req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this26.handleError(e);
          })); //B-REQUEST DATA
        }
      }, {
        key: "orequest",
        value: function orequest(req) {
          var _this27 = this;

          return this.http.post("/users/orequest", req).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_4__["catchError"])(function (e) {
            return _this27.handleError(e);
          })); //O-REQUEST DATA
        }
      }, {
        key: "handleError",
        value: function handleError(err) {
          console.log(err);
          console.log("Handle Http calls error");
          console.log(err.error.message);
          return Object(rxjs__WEBPACK_IMPORTED_MODULE_3__["throwError"])(err.error);
        }
      }]);

      return UserService;
    }();

    UserService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    UserService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], UserService);
    /***/
  },

  /***/
  "./src/app/signup/signup.component.css":
  /*!*********************************************!*\
    !*** ./src/app/signup/signup.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Mulish:wght@600display=swap');\r\n/* MAIN BACKGROUND  */\r\n.container-fluid,body{\r\n    background:#ecf0f3;\r\n}\r\n/* TEXT STYLES */\r\nh2{\r\n    font-family: 'Mulish', sans-serif;\r\n    font-size:40px;\r\n    letter-spacing: 1.3px;\r\n}\r\nh5{\r\n    font-family:'Courier New', Courier, monospace;\r\n}\r\n/* FORM STYLES */\r\n.signup-div{\r\n    border-radius:40px;\r\n    background:#ecf0f3;\r\n    box-shadow:13px 13px 20px #cbced1,\r\n               -13px -13px 20px #ffffff \r\n}\r\nimg{\r\n    box-shadow:0px 0px 2px #5f5f5f,\r\n               0px 0px 0px 5px #ecf0f3,\r\n               8px 8px 15px #a7aaaf,\r\n               -8px -8px 15px #ffffff \r\n}\r\n.form{\r\n    padding:10px;\r\n}\r\n.invalid-feedback{\r\n    padding-left:20px;\r\n}\r\n.form-group{\r\n    border-radius:25px;\r\n    box-shadow:inset 8px 8px 8px #cbced1,inset -8px -8px 8px #ffffff; \r\n    margin-top:20px;\r\n    margin-bottom:30px; \r\n}\r\n.form-group input,.form-group select{\r\n    border:none;\r\n    outline:none;\r\n    background:none;\r\n    font-size:18px;\r\n    height: 55px;\r\n    color:#555;\r\n    padding:14px 16px 20px 20px;\r\n}\r\n/* FORM BUTTON EFFECT */\r\nbutton{\r\n    font-family:'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif;\r\n    font-size:18px;\r\n    font-weight:800;\r\n    color:#595959;\r\n    background:#dde1e7;\r\n    margin:15px 0;\r\n    width:100%;\r\n    height:45px;\r\n    border:none;\r\n    outline:none;\r\n    cursor:pointer;\r\n    border-radius:25px;\r\n    box-shadow:2px 2px 5px #cbced1,-5px -5px 10px #ffffff;\r\n}\r\nbutton:focus{\r\n    box-shadow:inset 2px 2px 5px #babeec,inset -5px -5px 10px #ffffff73;\r\n}\r\n/* BUTTON ICONS */\r\nspan{\r\n    font-size:20px;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLG1GQUFtRjtBQUNuRixxQkFBcUI7QUFDckI7SUFDSSxrQkFBa0I7QUFDdEI7QUFDQSxnQkFBZ0I7QUFDaEI7SUFDSSxpQ0FBaUM7SUFDakMsY0FBYztJQUNkLHFCQUFxQjtBQUN6QjtBQUNBO0lBQ0ksNkNBQTZDO0FBQ2pEO0FBQ0EsZ0JBQWdCO0FBQ2hCO0lBQ0ksa0JBQWtCO0lBQ2xCLGtCQUFrQjtJQUNsQjs7QUFFSjtBQUNBO0lBQ0k7Ozs7QUFJSjtBQUNBO0lBQ0ksWUFBWTtBQUNoQjtBQUNBO0lBQ0ksaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSxrQkFBa0I7SUFDbEIsZ0VBQWdFO0lBQ2hFLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7QUFDQTtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osZUFBZTtJQUNmLGNBQWM7SUFDZCxZQUFZO0lBQ1osVUFBVTtJQUNWLDJCQUEyQjtBQUMvQjtBQUNBLHVCQUF1QjtBQUN2QjtJQUNJLHFIQUFxSDtJQUNySCxjQUFjO0lBQ2QsZUFBZTtJQUNmLGFBQWE7SUFDYixrQkFBa0I7SUFDbEIsYUFBYTtJQUNiLFVBQVU7SUFDVixXQUFXO0lBQ1gsV0FBVztJQUNYLFlBQVk7SUFDWixjQUFjO0lBQ2Qsa0JBQWtCO0lBQ2xCLHFEQUFxRDtBQUN6RDtBQUNBO0lBQ0ksbUVBQW1FO0FBQ3ZFO0FBQ0EsaUJBQWlCO0FBQ2pCO0lBQ0ksY0FBYztBQUNsQiIsImZpbGUiOiJzcmMvYXBwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU11bGlzaDp3Z2h0QDYwMGRpc3BsYXk9c3dhcCcpO1xyXG4vKiBNQUlOIEJBQ0tHUk9VTkQgICovXHJcbi5jb250YWluZXItZmx1aWQsYm9keXtcclxuICAgIGJhY2tncm91bmQ6I2VjZjBmMztcclxufVxyXG4vKiBURVhUIFNUWUxFUyAqL1xyXG5oMntcclxuICAgIGZvbnQtZmFtaWx5OiAnTXVsaXNoJywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtc2l6ZTo0MHB4O1xyXG4gICAgbGV0dGVyLXNwYWNpbmc6IDEuM3B4O1xyXG59XHJcbmg1e1xyXG4gICAgZm9udC1mYW1pbHk6J0NvdXJpZXIgTmV3JywgQ291cmllciwgbW9ub3NwYWNlO1xyXG59XHJcbi8qIEZPUk0gU1RZTEVTICovXHJcbi5zaWdudXAtZGl2e1xyXG4gICAgYm9yZGVyLXJhZGl1czo0MHB4O1xyXG4gICAgYmFja2dyb3VuZDojZWNmMGYzO1xyXG4gICAgYm94LXNoYWRvdzoxM3B4IDEzcHggMjBweCAjY2JjZWQxLFxyXG4gICAgICAgICAgICAgICAtMTNweCAtMTNweCAyMHB4ICNmZmZmZmYgXHJcbn1cclxuaW1ne1xyXG4gICAgYm94LXNoYWRvdzowcHggMHB4IDJweCAjNWY1ZjVmLFxyXG4gICAgICAgICAgICAgICAwcHggMHB4IDBweCA1cHggI2VjZjBmMyxcclxuICAgICAgICAgICAgICAgOHB4IDhweCAxNXB4ICNhN2FhYWYsXHJcbiAgICAgICAgICAgICAgIC04cHggLThweCAxNXB4ICNmZmZmZmYgXHJcbn1cclxuLmZvcm17XHJcbiAgICBwYWRkaW5nOjEwcHg7XHJcbn1cclxuLmludmFsaWQtZmVlZGJhY2t7XHJcbiAgICBwYWRkaW5nLWxlZnQ6MjBweDtcclxufVxyXG4uZm9ybS1ncm91cHtcclxuICAgIGJvcmRlci1yYWRpdXM6MjVweDtcclxuICAgIGJveC1zaGFkb3c6aW5zZXQgOHB4IDhweCA4cHggI2NiY2VkMSxpbnNldCAtOHB4IC04cHggOHB4ICNmZmZmZmY7IFxyXG4gICAgbWFyZ2luLXRvcDoyMHB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTozMHB4OyBcclxufVxyXG4uZm9ybS1ncm91cCBpbnB1dCwuZm9ybS1ncm91cCBzZWxlY3R7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIG91dGxpbmU6bm9uZTtcclxuICAgIGJhY2tncm91bmQ6bm9uZTtcclxuICAgIGZvbnQtc2l6ZToxOHB4O1xyXG4gICAgaGVpZ2h0OiA1NXB4O1xyXG4gICAgY29sb3I6IzU1NTtcclxuICAgIHBhZGRpbmc6MTRweCAxNnB4IDIwcHggMjBweDtcclxufVxyXG4vKiBGT1JNIEJVVFRPTiBFRkZFQ1QgKi9cclxuYnV0dG9ue1xyXG4gICAgZm9udC1mYW1pbHk6J0x1Y2lkYSBTYW5zJywgJ0x1Y2lkYSBTYW5zIFJlZ3VsYXInLCAnTHVjaWRhIEdyYW5kZScsICdMdWNpZGEgU2FucyBVbmljb2RlJywgR2VuZXZhLCBWZXJkYW5hLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOjE4cHg7XHJcbiAgICBmb250LXdlaWdodDo4MDA7XHJcbiAgICBjb2xvcjojNTk1OTU5O1xyXG4gICAgYmFja2dyb3VuZDojZGRlMWU3O1xyXG4gICAgbWFyZ2luOjE1cHggMDtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBoZWlnaHQ6NDVweDtcclxuICAgIGJvcmRlcjpub25lO1xyXG4gICAgb3V0bGluZTpub25lO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOjI1cHg7XHJcbiAgICBib3gtc2hhZG93OjJweCAycHggNXB4ICNjYmNlZDEsLTVweCAtNXB4IDEwcHggI2ZmZmZmZjtcclxufVxyXG5idXR0b246Zm9jdXN7XHJcbiAgICBib3gtc2hhZG93Omluc2V0IDJweCAycHggNXB4ICNiYWJlZWMsaW5zZXQgLTVweCAtNXB4IDEwcHggI2ZmZmZmZjczO1xyXG59XHJcbi8qIEJVVFRPTiBJQ09OUyAqL1xyXG5zcGFue1xyXG4gICAgZm9udC1zaXplOjIwcHg7XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/signup/signup.component.ts":
  /*!********************************************!*\
    !*** ./src/app/signup/signup.component.ts ***!
    \********************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");

    var SignupComponent = /*#__PURE__*/function () {
      function SignupComponent(_router, fb, el, user) {
        _classCallCheck(this, SignupComponent);

        this._router = _router;
        this.fb = fb;
        this.el = el;
        this.user = user;
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.createRegisterForm();
        }
      }, {
        key: "onSubmit",
        value: function onSubmit() {
          // if (navigator.geolocation)
          //   navigator.geolocation.getCurrentPosition(function (position) {
          //     this.latitude=position.coords.latitude;
          //     this.longitude=position.coords.longitude;          //GMAPS API-BILLING ACCOUNT
          //   });
          // else {
          //   console.log("location is not supported");
          // }
          this.openSpinner();
          this.register();
        }
      }, {
        key: "createRegisterForm",
        value: function createRegisterForm() {
          this.registerForm = this.fb.group({
            name: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('[a-zA-Z]*')]],
            email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].email, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            confirmPassword: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            type: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            bgroup: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            location: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].minLength(3)]],
            contact: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].maxLength(10), _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].pattern('^[0-9]{10}')]],
            age: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            profilePic: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            role: ['user']
          }, {
            validator: [this.fileUploadType, this.passwordMatchValidator, this.ageMax]
          });
        }
      }, {
        key: "ageMax",
        value: function ageMax(g) {
          if (g.get('age').value <= 18 || g.get('age').value >= 60) {
            return {
              'age': true
            };
          } else {
            return null;
          }
        }
      }, {
        key: "passwordMatchValidator",
        value: function passwordMatchValidator(g) {
          return g.get('password').value === g.get('confirmPassword').value ? null : {
            'mismatch': true
          };
        }
      }, {
        key: "fileUploadType",
        value: function fileUploadType(g) {
          var file = g.get('profilePic').value;

          if (file) {
            var extension = file.split('.');
            var val = extension[extension.length - 1];

            if (val === "jpeg" || val === "png" || val === "jpg") {
              return null;
            } else return {
              'fileextension': true
            };
          }

          return null;
        }
      }, {
        key: "openSpinner",
        value: function openSpinner() {
          var _this28 = this;

          this.isLoading = true;
          setTimeout(function () {
            _this28.isLoading = false;

            _this28.login();
          }, 5000);
        } //end of openSpinner function

      }, {
        key: "login",
        value: function login() {
          this._router.navigate(['/home/login']);
        } //on login navbar link click

      }, {
        key: "register",
        value: function register() {
          var formData = new FormData(); //locate the file element meant for the file upload.

          var inputEl = this.el.nativeElement.querySelector('#profilePic'); //get the total amount of files attached to the file input.

          var fileCount = inputEl.files.length; //check if the filecount is greater than zero, to be sure a file was selected.

          if (fileCount > 0) {
            // a file was selected
            //append the key name 'photo' with the first file in the element
            formData.append('photo', inputEl.files.item(0));
          }

          this.user.registerData(this.registerForm.value).subscribe(function (data) {
            return data;
          }, function (error) {
            return console.log(error);
          });
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_4__["UserService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/signup/signup.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/signup/signup.component.css"))["default"]]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/view-patients/view-patients.component.css":
  /*!***********************************************************!*\
    !*** ./src/app/view-patients/view-patients.component.css ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppViewPatientsViewPatientsComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Libre+Baskervilledisplay=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Lora&display=swap');\r\n/* TEXT STYLES */\r\nh3,h6{\r\n    font-family:Verdana, Geneva, Tahoma, sans-serif;\r\n    font-weight:bold;\r\n}\r\nh4{\r\n    color:#ec407a;\r\n    font-family:'Libre Baskerville', serif;\r\n  }\r\nh5{\r\n    font-family: 'Lora', serif;\r\n}\r\n/* NAVBAR */\r\n.navbar{\r\n    height:10%;\r\n    background-color:#3b5998\r\n}\r\n.container{\r\n    max-width: -webkit-fill-available;\r\n}\r\n/* SPINNER */\r\nmat-progress-spinner{\r\n    position: absolute;\r\n    top: 32%;\r\n    left: 71%;\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvdmlldy1wYXRpZW50cy92aWV3LXBhdGllbnRzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscUZBQXFGO0FBQ3JGLHlFQUF5RTtBQUN6RSxnQkFBZ0I7QUFDaEI7SUFDSSwrQ0FBK0M7SUFDL0MsZ0JBQWdCO0FBQ3BCO0FBQ0E7SUFDSSxhQUFhO0lBQ2Isc0NBQXNDO0VBQ3hDO0FBQ0Y7SUFDSSwwQkFBMEI7QUFDOUI7QUFDQSxXQUFXO0FBQ1g7SUFDSSxVQUFVO0lBQ1Y7QUFDSjtBQUNBO0lBQ0ksaUNBQWlDO0FBQ3JDO0FBQ0EsWUFBWTtBQUNaO0lBQ0ksa0JBQWtCO0lBQ2xCLFFBQVE7SUFDUixTQUFTO0FBQ2IiLCJmaWxlIjoic3JjL2FwcC92aWV3LXBhdGllbnRzL3ZpZXctcGF0aWVudHMuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxpYnJlK0Jhc2tlcnZpbGxlZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PUxvcmEmZGlzcGxheT1zd2FwJyk7XHJcbi8qIFRFWFQgU1RZTEVTICovXHJcbmgzLGg2e1xyXG4gICAgZm9udC1mYW1pbHk6VmVyZGFuYSwgR2VuZXZhLCBUYWhvbWEsIHNhbnMtc2VyaWY7XHJcbiAgICBmb250LXdlaWdodDpib2xkO1xyXG59XHJcbmg0e1xyXG4gICAgY29sb3I6I2VjNDA3YTtcclxuICAgIGZvbnQtZmFtaWx5OidMaWJyZSBCYXNrZXJ2aWxsZScsIHNlcmlmO1xyXG4gIH1cclxuaDV7XHJcbiAgICBmb250LWZhbWlseTogJ0xvcmEnLCBzZXJpZjtcclxufVxyXG4vKiBOQVZCQVIgKi9cclxuLm5hdmJhcntcclxuICAgIGhlaWdodDoxMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMzYjU5OThcclxufVxyXG4uY29udGFpbmVye1xyXG4gICAgbWF4LXdpZHRoOiAtd2Via2l0LWZpbGwtYXZhaWxhYmxlO1xyXG59XHJcbi8qIFNQSU5ORVIgKi9cclxubWF0LXByb2dyZXNzLXNwaW5uZXJ7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDMyJTtcclxuICAgIGxlZnQ6IDcxJTtcclxufVxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/view-patients/view-patients.component.ts":
  /*!**********************************************************!*\
    !*** ./src/app/view-patients/view-patients.component.ts ***!
    \**********************************************************/

  /*! exports provided: ViewPatientsComponent */

  /***/
  function srcAppViewPatientsViewPatientsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ViewPatientsComponent", function () {
      return ViewPatientsComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_user_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../services/user.service */
    "./src/app/services/user.service.ts");
    /* harmony import */


    var _services_alert_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../services/alert.service */
    "./src/app/services/alert.service.ts");

    var ViewPatientsComponent = /*#__PURE__*/function () {
      function ViewPatientsComponent(router, user, alert, route) {
        _classCallCheck(this, ViewPatientsComponent);

        this.router = router;
        this.user = user;
        this.alert = alert;
        this.route = route;
        this.text = "text-center";
      }

      _createClass(ViewPatientsComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this29 = this;

          this.route.paramMap.subscribe(function (params) {
            var val = params.get('value');
            _this29.avail = val;
          });
          this.reloadData(this.avail);
        }
      }, {
        key: "reloadData",
        value: function reloadData(avail) {
          var _this30 = this;

          this.user.getDonorList(avail).subscribe(function (data) {
            _this30.donors = data;
          });
        }
      }, {
        key: "send",
        value: function send(val, msg1, msg2) {
          this.message1 = msg1;
          this.message2 = msg2;
          this.user.sendNotification(val);
          this.openSpinner();
        }
      }, {
        key: "openSpinner",
        value: function openSpinner() {
          var _this31 = this;

          this.isLoading = true;
          setTimeout(function () {
            _this31.isLoading = false;

            _this31.get();
          }, 5000);
        }
      }, {
        key: "get",
        value: function get() {
          var _this32 = this;

          this.alert.requestSource.subscribe(function (data) {
            _this32.attending = data, console.log(_this32.attending);
          });

          if (this.attending == true) {
            this.attending = true;
          }

          if (this.attending == false) {
            this.ignored = true;
          }
        }
      }]);

      return ViewPatientsComponent;
    }();

    ViewPatientsComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }, {
        type: _services_user_service__WEBPACK_IMPORTED_MODULE_3__["UserService"]
      }, {
        type: _services_alert_service__WEBPACK_IMPORTED_MODULE_4__["AlertService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"]
      }];
    };

    ViewPatientsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-view-patients',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./view-patients.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/view-patients/view-patients.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./view-patients.component.css */
      "./src/app/view-patients/view-patients.component.css"))["default"]]
    })], ViewPatientsComponent);
    /***/
  },

  /***/
  "./src/app/whytodonate/whytodonate.component.css":
  /*!*******************************************************!*\
    !*** ./src/app/whytodonate/whytodonate.component.css ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppWhytodonateWhytodonateComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url('https://fonts.googleapis.com/css2?family=Julius+Sans+One&display=swap');\r\n@import url('https://fonts.googleapis.com/css2?family=Montserrat&display=swap');\r\n/* TEXT STYLES */\r\nq{\r\n    color:rgb(80, 219, 38);\r\n}\r\nh3{\r\n    color:orangered;\r\n    font-family: 'Montserrat', sans-serif;\r\n    font-weight:500;\r\n}\r\nh4{\r\n    font-family:'Julius Sans One', sans-serif;\r\n    font-size:xx-large;\r\n    font-weight:600;  \r\n}\r\np{\r\n    font-family:'Montserrat', sans-serif;\r\n    font-weight:500;\r\n    font-size:x-large;\r\n}\r\n#feedback{\r\n    font-family:'Times New Roman', Times, serif;\r\n}\r\n.card-text{\r\n    font-family:'Montserrat', sans-serif;\r\n    font-weight:500;\r\n    font-size:large;\r\n}\r\n/* PROGRESS STYLES */\r\n.progress,.progress-bar{\r\n    height:30px;\r\n}\r\n/* BUBBLE EFFECT */\r\n.bubble{\r\n    width:120px;\r\n    height:120px;\r\n    content:'';\r\n    border-radius:54% 46% 42% 58% / 60% 58% 42% 40%;\r\n    background-image: linear-gradient(to right bottom,blue,#fa183d ),linear-gradient(to right,blue,#fa183d );\r\n    -webkit-animation:wave 5s linear infinite;\r\n            animation:wave 5s linear infinite;\r\n}\r\n@-webkit-keyframes wave{\r\n    20%{\r\n        border-radius:45% 55% 62% 38% / 53% 51% 49% 47%;\r\n    }\r\n    40%{\r\n        border-radius:45% 55% 49% 51% / 36% 51% 49% 64%;\r\n    }\r\n    60%{\r\n        border-radius:60% 40% 57% 43% / 47% 62% 38% 53%;\r\n    }\r\n    80%{\r\n        border-radius:60% 40% 32% 68% / 38% 36% 64% 62%;\r\n    }\r\n}\r\n@keyframes wave{\r\n    20%{\r\n        border-radius:45% 55% 62% 38% / 53% 51% 49% 47%;\r\n    }\r\n    40%{\r\n        border-radius:45% 55% 49% 51% / 36% 51% 49% 64%;\r\n    }\r\n    60%{\r\n        border-radius:60% 40% 57% 43% / 47% 62% 38% 53%;\r\n    }\r\n    80%{\r\n        border-radius:60% 40% 32% 68% / 38% 36% 64% 62%;\r\n    }\r\n}\r\n/* ZOOMING EFFECT */\r\n.media{\r\n    -webkit-animation:scale 20s linear infinite;\r\n            animation:scale 20s linear infinite;\r\n}\r\n@-webkit-keyframes scale{\r\n    0%{\r\n        transform:scale3d(0.5,0.5,0.6);\r\n    }\r\n    50%{\r\n        transform:scale3d(1,1,1);\r\n    }\r\n    100%{\r\n        transform:scale3d(0,0,0);\r\n    }\r\n}\r\n@keyframes scale{\r\n    0%{\r\n        transform:scale3d(0.5,0.5,0.6);\r\n    }\r\n    50%{\r\n        transform:scale3d(1,1,1);\r\n    }\r\n    100%{\r\n        transform:scale3d(0,0,0);\r\n    }\r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvd2h5dG9kb25hdGUvd2h5dG9kb25hdGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxvRkFBb0Y7QUFDcEYsK0VBQStFO0FBQy9FLGdCQUFnQjtBQUNoQjtJQUNJLHNCQUFzQjtBQUMxQjtBQUNBO0lBQ0ksZUFBZTtJQUNmLHFDQUFxQztJQUNyQyxlQUFlO0FBQ25CO0FBQ0E7SUFDSSx5Q0FBeUM7SUFDekMsa0JBQWtCO0lBQ2xCLGVBQWU7QUFDbkI7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsaUJBQWlCO0FBQ3JCO0FBQ0E7SUFDSSwyQ0FBMkM7QUFDL0M7QUFDQTtJQUNJLG9DQUFvQztJQUNwQyxlQUFlO0lBQ2YsZUFBZTtBQUNuQjtBQUNBLG9CQUFvQjtBQUNwQjtJQUNJLFdBQVc7QUFDZjtBQUNBLGtCQUFrQjtBQUNsQjtJQUNJLFdBQVc7SUFDWCxZQUFZO0lBQ1osVUFBVTtJQUNWLCtDQUErQztJQUMvQyx3R0FBd0c7SUFDeEcseUNBQWlDO1lBQWpDLGlDQUFpQztBQUNyQztBQUNBO0lBQ0k7UUFDSSwrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSwrQ0FBK0M7SUFDbkQ7QUFDSjtBQWJBO0lBQ0k7UUFDSSwrQ0FBK0M7SUFDbkQ7SUFDQTtRQUNJLCtDQUErQztJQUNuRDtJQUNBO1FBQ0ksK0NBQStDO0lBQ25EO0lBQ0E7UUFDSSwrQ0FBK0M7SUFDbkQ7QUFDSjtBQUNBLG1CQUFtQjtBQUNuQjtJQUNJLDJDQUFtQztZQUFuQyxtQ0FBbUM7QUFDdkM7QUFDQTtJQUNJO1FBQ0ksOEJBQThCO0lBQ2xDO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7SUFDQTtRQUNJLHdCQUF3QjtJQUM1QjtBQUNKO0FBVkE7SUFDSTtRQUNJLDhCQUE4QjtJQUNsQztJQUNBO1FBQ0ksd0JBQXdCO0lBQzVCO0lBQ0E7UUFDSSx3QkFBd0I7SUFDNUI7QUFDSiIsImZpbGUiOiJzcmMvYXBwL3doeXRvZG9uYXRlL3doeXRvZG9uYXRlLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1KdWxpdXMrU2FucytPbmUmZGlzcGxheT1zd2FwJyk7XHJcbkBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PU1vbnRzZXJyYXQmZGlzcGxheT1zd2FwJyk7XHJcbi8qIFRFWFQgU1RZTEVTICovXHJcbnF7XHJcbiAgICBjb2xvcjpyZ2IoODAsIDIxOSwgMzgpO1xyXG59XHJcbmgze1xyXG4gICAgY29sb3I6b3JhbmdlcmVkO1xyXG4gICAgZm9udC1mYW1pbHk6ICdNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxufVxyXG5oNHtcclxuICAgIGZvbnQtZmFtaWx5OidKdWxpdXMgU2FucyBPbmUnLCBzYW5zLXNlcmlmO1xyXG4gICAgZm9udC1zaXplOnh4LWxhcmdlO1xyXG4gICAgZm9udC13ZWlnaHQ6NjAwOyAgXHJcbn1cclxucHtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIGZvbnQtc2l6ZTp4LWxhcmdlO1xyXG59XHJcbiNmZWVkYmFja3tcclxuICAgIGZvbnQtZmFtaWx5OidUaW1lcyBOZXcgUm9tYW4nLCBUaW1lcywgc2VyaWY7XHJcbn1cclxuLmNhcmQtdGV4dHtcclxuICAgIGZvbnQtZmFtaWx5OidNb250c2VycmF0Jywgc2Fucy1zZXJpZjtcclxuICAgIGZvbnQtd2VpZ2h0OjUwMDtcclxuICAgIGZvbnQtc2l6ZTpsYXJnZTtcclxufVxyXG4vKiBQUk9HUkVTUyBTVFlMRVMgKi9cclxuLnByb2dyZXNzLC5wcm9ncmVzcy1iYXJ7XHJcbiAgICBoZWlnaHQ6MzBweDtcclxufVxyXG4vKiBCVUJCTEUgRUZGRUNUICovXHJcbi5idWJibGV7XHJcbiAgICB3aWR0aDoxMjBweDtcclxuICAgIGhlaWdodDoxMjBweDtcclxuICAgIGNvbnRlbnQ6Jyc7XHJcbiAgICBib3JkZXItcmFkaXVzOjU0JSA0NiUgNDIlIDU4JSAvIDYwJSA1OCUgNDIlIDQwJTtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byByaWdodCBib3R0b20sYmx1ZSwjZmExODNkICksbGluZWFyLWdyYWRpZW50KHRvIHJpZ2h0LGJsdWUsI2ZhMTgzZCApO1xyXG4gICAgYW5pbWF0aW9uOndhdmUgNXMgbGluZWFyIGluZmluaXRlO1xyXG59XHJcbkBrZXlmcmFtZXMgd2F2ZXtcclxuICAgIDIwJXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjQ1JSA1NSUgNjIlIDM4JSAvIDUzJSA1MSUgNDklIDQ3JTtcclxuICAgIH1cclxuICAgIDQwJXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjQ1JSA1NSUgNDklIDUxJSAvIDM2JSA1MSUgNDklIDY0JTtcclxuICAgIH1cclxuICAgIDYwJXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjYwJSA0MCUgNTclIDQzJSAvIDQ3JSA2MiUgMzglIDUzJTtcclxuICAgIH1cclxuICAgIDgwJXtcclxuICAgICAgICBib3JkZXItcmFkaXVzOjYwJSA0MCUgMzIlIDY4JSAvIDM4JSAzNiUgNjQlIDYyJTtcclxuICAgIH1cclxufVxyXG4vKiBaT09NSU5HIEVGRkVDVCAqL1xyXG4ubWVkaWF7XHJcbiAgICBhbmltYXRpb246c2NhbGUgMjBzIGxpbmVhciBpbmZpbml0ZTtcclxufVxyXG5Aa2V5ZnJhbWVzIHNjYWxle1xyXG4gICAgMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlM2QoMC41LDAuNSwwLjYpO1xyXG4gICAgfVxyXG4gICAgNTAle1xyXG4gICAgICAgIHRyYW5zZm9ybTpzY2FsZTNkKDEsMSwxKTtcclxuICAgIH1cclxuICAgIDEwMCV7XHJcbiAgICAgICAgdHJhbnNmb3JtOnNjYWxlM2QoMCwwLDApO1xyXG4gICAgfVxyXG59XHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/whytodonate/whytodonate.component.ts":
  /*!******************************************************!*\
    !*** ./src/app/whytodonate/whytodonate.component.ts ***!
    \******************************************************/

  /*! exports provided: WhytodonateComponent */

  /***/
  function srcAppWhytodonateWhytodonateComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WhytodonateComponent", function () {
      return WhytodonateComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var WhytodonateComponent = /*#__PURE__*/function () {
      function WhytodonateComponent() {
        _classCallCheck(this, WhytodonateComponent);
      }

      _createClass(WhytodonateComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goback",
        value: function goback() {
          window.history.back();
        }
      }]);

      return WhytodonateComponent;
    }();

    WhytodonateComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-whytodonate',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./whytodonate.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/whytodonate/whytodonate.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./whytodonate.component.css */
      "./src/app/whytodonate/whytodonate.component.css"))["default"]]
    })], WhytodonateComponent);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! c:\Angular\Major\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map