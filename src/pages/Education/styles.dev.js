"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Degree = exports.Institution = exports.EducationItem = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("@carbon/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n  display: inline-block;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1rem;\n  padding-bottom: 1rem;\n  border-bottom: 1px solid ", ";\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var EducationItem = _styledComponents["default"].li(_templateObject(), _colors.white);

exports.EducationItem = EducationItem;

var Institution = _styledComponents["default"].h4(_templateObject2());

exports.Institution = Institution;

var Degree = _styledComponents["default"].p(_templateObject3());

exports.Degree = Degree;