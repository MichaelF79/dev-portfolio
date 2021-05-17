"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.Pill = exports.Paragraph = exports.SectionTitle = void 0;

var _styledComponents = _interopRequireDefault(require("styled-components"));

var _colors = require("@carbon/colors");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: inline-block;\n  margin-right: 0.75rem;\n  margin-bottom: 0.75rem;\n  margin-top: 0.75rem;\n  padding: 0.5rem;\n  background-color: ", ";\n  color: #000000;\n  font-weight: bold;\n  border-radius: 15px; \n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  white-space: pre-wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  margin-top: 1.5rem;\n  margin-bottom: 1rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }

var SectionTitle = _styledComponents["default"].h3(_templateObject());

exports.SectionTitle = SectionTitle;

var Paragraph = _styledComponents["default"].p(_templateObject2());

exports.Paragraph = Paragraph;

var Pill = _styledComponents["default"].span(_templateObject3(), _colors.blue[10]);

exports.Pill = Pill;